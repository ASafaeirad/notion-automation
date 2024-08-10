#!/usr/bin/env bun

import { Client } from '@notionhq/client';
import { addDays, format } from 'date-fns';

import { config } from './config.js';
import { queryAll } from './lib/Notion.js';

await splitTasks({
  db: 'd055125e75b8461fa43a083209a612c6',
  dateProp: 'Due Date',
  sorts: [{ property: 'Name', direction: 'ascending' }],
  filter: {
    and: [
      { property: 'Status', status: { equals: 'To Do' } },
      { property: 'Name', title: { starts_with: 'Grammar In Use' } },
    ],
  },
});

interface Args {
  db: string;
  filter?: Parameters<Client['databases']['query']>[0]['filter'];
  sorts?: Parameters<Client['databases']['query']>[0]['sorts'];
  dateProp: string;
}

async function splitTasks({ db, filter, sorts, dateProp }: Args) {
  const notionClient = new Client({ auth: config.notionSecret });
  const pages = await queryAll({ database_id: db, sorts, filter });

  const tasks = pages.map(p => {
    const properties = (p as any).properties;

    return {
      id: p.id,
      doDate: properties[dateProp]?.date?.start,
    };
  });

  const updates = tasks.map((t, index) => {
    return notionClient.pages.update({
      page_id: t.id,
      properties: {
        dateProp: {
          date: { start: format(addDays(new Date(), index), 'yyyy-MM-dd') },
        },
      },
    });
  });

  return Promise.all(updates);
}
