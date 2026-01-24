#!/usr/bin/env node

import { Client } from '@notionhq/client';
import { addDays } from 'date-fns';
import PQueue from 'p-queue';

import { config } from './config.ts';
import { DataSources } from './dbs/Database.ts';
import { Day } from './entities/Day.ts';
import { Projects } from './entities/Project.ts';
import { queryAll } from './lib/Notion.ts';

await splitTasks({
  dataSourceId: DataSources.Actions,
  dateProp: 'Do Date',
  sorts: [{ property: 'Name', direction: 'ascending' }],
  filter: {
    and: [
      { property: 'Status', status: { equals: 'To Do' } },
      { property: 'Project', relation: { contains: Projects.GitBook.id } },
    ],
  },
  time: {
    start: { hour: 19, minute: 20 },
    end: { hour: 19, minute: 30 },
  },
});

interface Args {
  dataSourceId: string;
  filter?: Parameters<Client['dataSources']['query']>[0]['filter'];
  sorts?: Parameters<Client['dataSources']['query']>[0]['sorts'];
  dateProp: string;
  time: {
    start: { hour: number; minute: number };
    end: { hour: number; minute: number };
  };
}

async function splitTasks({
  dataSourceId,
  filter,
  sorts,
  dateProp,
  time,
}: Args) {
  const queue = new PQueue({ concurrency: 8 });
  const notionClient = new Client({ auth: config.notionSecret });
  const pages = await queryAll({ data_source_id: dataSourceId, sorts, filter });

  pages.forEach((p, index) => {
    const date = addDays(new Date(), index);
    queue.add(() => {
      console.log(`Updating ${p.id} to ${Day(date)}`);
      return notionClient.pages.update({
        page_id: p.id,
        properties: {
          [dateProp]: { date: { start: Day(date) } },
        },
      });
    });
  });

  return queue.onIdle();
}
