import type { Client } from '@notionhq/client';

import type { IconName } from '../entities/index.js';
import { Day, Icon } from '../entities/index.js';
import { Database } from './Database.js';

export enum HabitStatus {
  Todo = 'To Do',
  Done = 'Done',
}

export interface Routine {
  name: string;
  icon: IconName;
}

export class RoutineDatabase {
  constructor(private client: Client) {}

  public addRoutine({ name, icon }: Routine) {
    return this.client.pages.create({
      parent: { database_id: Database.Routines },
      icon: { type: 'external', external: { url: Icon(icon) } },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Day: { date: { start: Day(new Date()) } },
      },
    });
  }

  public addRoutines(routines: Routine[]) {
    return Promise.all(routines.map(routine => this.addRoutine(routine)));
  }
}
