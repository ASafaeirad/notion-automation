export interface StatusCategory {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

export type JiraStatus =
  | 'Blocked'
  | 'CLOSED'
  | 'DONE'
  | 'In Progress'
  | 'Open'
  | 'Ready for test';

interface Status {
  self: string;
  description: string;
  iconUrl: string;
  name: JiraStatus;
  id: string;
  statusCategory: StatusCategory;
}

export type JiraPriority = 'High' | 'Highest' | 'Low' | 'Lowest' | 'Medium';

interface Priority {
  self: string;
  iconUrl: string;
  name: JiraPriority;
  id: string;
}

interface JiraIssueType {
  self: string;
  id: string;
  description: string;
  iconUrl: string;
  name: string;
  subtask: boolean;
  avatarId: number;
  hierarchyLevel: number;
}

export interface ParentFields {
  summary: string;
  status: Status;
  priority: Priority;
  issuetype: JiraIssueType;
}

export interface Parent {
  id: string;
  key: string;
  self: string;
  fields: ParentFields;
}

export interface NonEditableReason {
  reason: string;
  message: string;
}

export interface Customfield10103 {
  hasEpicLinkFieldDependency: boolean;
  showField: boolean;
  nonEditableReason: NonEditableReason;
}

export interface AvatarUrls {
  '48x48': string;
  '24x24': string;
  '16x16': string;
  '32x32': string;
}

export interface Assignee {
  self: string;
  accountId: string;
  emailAddress: string;
  avatarUrls: AvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  accountType: string;
}

export interface StatusCategory2 {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

export interface Creator {
  self: string;
  accountId: string;
  avatarUrls: AvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  accountType: string;
}

export interface Reporter {
  self: string;
  accountId: string;
  avatarUrls: AvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  accountType: string;
}

export interface Aggregateprogress {
  progress: number;
  total: number;
}

export interface Progress {
  progress: number;
  total: number;
}

export interface Votes {
  self: string;
  votes: number;
  hasVoted: boolean;
}

export interface Worklog {
  startAt: number;
  maxResults: number;
  total: number;
  worklogs: any[];
}

export interface Project {
  self: string;
  id: string;
  key: string;
  name: string;
  projectTypeKey: string;
  simplified: boolean;
  avatarUrls: AvatarUrls;
}

export interface Watches {
  self: string;
  watchCount: number;
  isWatching: boolean;
}

export interface Issuerestrictions {}

export interface IssueRestriction {
  issuerestrictions: Issuerestrictions;
  shouldDisplay: boolean;
}

export interface Timetracking {}

export interface Comment {
  comments: any[];
  self: string;
  maxResults: number;
  total: number;
  startAt: number;
}

export interface Fields {
  statuscategorychangedate: Date;
  parent: Parent;
  fixVersions: any[];
  resolution?: any;
  lastViewed: Date;
  priority: Priority;
  labels: any[];
  aggregatetimeoriginalestimate?: any;
  timeestimate?: any;
  versions: any[];
  issuelinks: any[];
  assignee: Assignee;
  status: Status;
  components: any[];
  aggregatetimeestimate?: any;
  creator: Creator;
  subtasks: any[];
  reporter: Reporter;
  aggregateprogress: Aggregateprogress;
  progress: Progress;
  votes: Votes;
  worklog: Worklog;
  issuetype: JiraIssueType;
  timespent?: any;
  project: Project;
  aggregatetimespent?: any;
  resolutiondate?: any;
  workratio: number;
  watches: Watches;
  issuerestriction: IssueRestriction;
  created: string;
  updated: string;
  timeoriginalestimate?: any;
  description?: { content: any };
  timetracking: Timetracking;
  security?: any;
  attachment: any[];
  summary: string;
  environment?: any;
  duedate?: any;
  comment: Comment;
}

export interface IssueResponse {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: Fields;
}

export interface Member {
  name: string;
  avatar: string;
}

export interface IssueType {
  name: string;
  icon: string;
}
