import { isNotNull } from '@fullstacksjs/toolbox';
import type { Client } from '@notionhq/client';
import type { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';

import type { IconName, ProjectName } from '../entities/index.js';
import { Day, Icon, Projects } from '../entities/index.js';
import { Database } from './Database.js';

export enum Status {
  Todo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
  Closed = 'Closed',
  Suspended = 'Suspended',
}

export type Priority = 'First' | 'Future' | 'Second' | 'Third' | 'Urgent';

export const Priorities: Record<Priority, string> = {
  Urgent: 'Urgent',
  First: '1st',
  Second: '2nd',
  Third: '3rd',
  Future: 'In Future',
};

export interface ActionItem {
  key?: string;
  name: string;
  icon: IconName;
  priority?: Priority;
  project?: ProjectName;
  doDate?: Date;
  dueDate?: Date;
  children?: Children;
}

export class ActionDatabase {
  constructor(private client: Client) {}

  public addItem({
    name,
    icon,
    doDate,
    dueDate,
    project,
    priority,
    key,
    children,
  }: ActionItem) {
    const properties: CreatePageParameters['properties'] = {
      Status: { status: { name: Status.Todo } },
      Name: { title: [{ text: { content: name } }] },
    };

    if (isNotNull(key))
      properties['Key'] = { rich_text: [{ text: { content: key } }] };
    if (isNotNull(doDate))
      properties['Do Date'] = { date: { start: Day(doDate) } };
    if (isNotNull(dueDate))
      properties['Due Date'] = { date: { start: Day(dueDate) } };
    if (isNotNull(priority))
      properties['Priority'] = { select: { name: Priorities[priority] } };
    if (isNotNull(project))
      properties['Project'] = { relation: [{ id: Projects[project].id }] };

    return this.client.pages.create({
      parent: { database_id: Database.Actions },
      icon: { type: 'external', external: { url: Icon(icon) } },
      children,
      properties,
    });
  }
}
