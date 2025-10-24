import type { Axios } from 'axios';
import axios from 'axios';

import type { Priority } from '../dbs/index.ts';
import { Status } from '../dbs/index.ts';
import type {
  IssueResponse,
  IssueType,
  JiraPriority,
  JiraStatus,
  Member,
} from './IssueResponse';

export interface Issue {
  key: string;
  title: string;
  type: IssueType;
  reporter: Member;
  assignee: Member;
  status: Status;
  updatedAt: Date;
  createdAt: Date;
  priority: Priority;
  description?: string;
}

const statusMap: Record<JiraStatus, Status> = {
  'In Progress': Status.InProgress,
  'Ready for test': Status.Done,
  'Blocked': Status.Todo,
  'CLOSED': Status.Done,
  'DONE': Status.Done,
  'Open': Status.Todo,
};

const priorityMap: Record<JiraPriority, Priority> = {
  Highest: 'Urgent',
  High: 'First',
  Medium: 'Second',
  Low: 'Third',
  Lowest: 'Future',
};

const toIssue = (data: IssueResponse): Issue => ({
  key: data.key,
  title: `${data.key}: ${data.fields.summary.trim()}`,
  type: {
    name: data.fields.issuetype.name,
    icon: data.fields.issuetype.iconUrl,
  },
  reporter: {
    name: data.fields.reporter.displayName,
    avatar: data.fields.reporter.avatarUrls['48x48'],
  },
  assignee: {
    name: data.fields.assignee.displayName,
    avatar: data.fields.assignee.avatarUrls['48x48'],
  },
  status: statusMap[data.fields.status.name],
  updatedAt: new Date(data.fields.updated),
  createdAt: new Date(data.fields.created),
  priority: priorityMap[data.fields.priority?.name],
  description: data.fields.description?.content,
});

export class JiraClient {
  client: Axios;

  constructor(private apiKey: string, private username: string) {
    this.client = new axios.Axios({
      baseURL: 'https://estateguru.atlassian.net/rest/api/3/',
    });
  }

  public getIssues() {
    return this.client
      .get('search', {
        params: {
          jql: 'project = "US" AND assignee = 608abece83b8c6006b0aabc3 AND status = Open ORDER BY created DESC',
        },
        auth: {
          username: this.username,
          password: this.apiKey,
        },
        responseType: 'json',
      })
      .then(res => JSON.parse(res.data))
      .then<Issue[]>(data => data.issues.map(toIssue));
  }
}
