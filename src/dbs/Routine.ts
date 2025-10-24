import type { Client } from '@notionhq/client';

import type { IconName } from '../entities/index.ts';
import { Day, Icon } from '../entities/index.ts';
import { Database } from './Database.ts';

export enum HabitStatus {
  Todo = 'To Do',
  Done = 'Done',
}

export interface Routine {
  name: string;
  icon: IconName;
}

export class RoutineDatabase {
  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }

  public addRoutine({ name, icon }: Routine) {
    return this.#client.pages.create({
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
