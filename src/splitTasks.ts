#!/usr/bin/env node

import { Client } from '@notionhq/client';
import { addDays } from 'date-fns';

import { config } from './config.ts';
import { Database } from './dbs/Database.ts';
import { Time } from './entities/Day.ts';
import { queryAll } from './lib/Notion.ts';

await splitTasks({
  db: Database.Actions,
  dateProp: 'Do Date',
  sorts: [{ property: 'Name', direction: 'ascending' }],
  filter: {
    and: [
      { property: 'Status', status: { equals: 'To Do' } },
      // { property: 'Name', title: { contains: 'Grammar In Use' } },
      { property: 'Name', title: { starts_with: 'SE Practitioners Approach' } },
    ],
  },
  time: {
    start: { hour: 19, minute: 20 },
    end: { hour: 19, minute: 30 },
  },
});

interface Args {
  db: string;
  filter?: Parameters<Client['databases']['query']>[0]['filter'];
  sorts?: Parameters<Client['databases']['query']>[0]['sorts'];
  dateProp: string;
  time: {
    start: { hour: number; minute: number };
    end: { hour: number; minute: number };
  };
}

async function splitTasks({ db, filter, sorts, dateProp, time }: Args) {
  const notionClient = new Client({ auth: config.notionSecret });
  const pages = await queryAll({ database_id: db, sorts, filter });

  const updates = pages.map((p, index) => {
    const date = addDays(new Date(), index);
    return notionClient.pages.update({
      page_id: p.id,
      properties: {
        [dateProp]: {
          date: {
            start: Time({ date, ...time.start }),
            end: Time({ date, ...time.end }),
          },
        },
      },
    });
  });

  return Promise.all(updates);
}
