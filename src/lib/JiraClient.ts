import type { Priority } from '../dbs/index.ts';
import type {
  IssueResponse,
  IssueType,
  JiraPriority,
  JiraStatus,
  Member,
} from './IssueResponse';

import { Status } from '../dbs/index.ts';

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
  #apiKey: string;
  #username: string;

  constructor(apiKey: string, username: string) {
    this.#apiKey = apiKey;
    this.#username = username;
  }

  public async getIssues(): Promise<Issue[]> {
    const url = new URL(
      'search',
      'https://estateguru.atlassian.net/rest/api/3/',
    );
    url.searchParams.set(
      'jql',
      'project = "US" AND assignee = 608abece83b8c6006b0aabc3 AND status = Open ORDER BY created DESC',
    );

    const data = await this.#request<{ issues: IssueResponse[] }>(
      url.toString(),
    );

    return data.issues.map(toIssue);
  }

  async #request<T>(url: string): Promise<T> {
    const auth = btoa(`${this.#username}:${this.#apiKey}`);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}
