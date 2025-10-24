#!/usr/bin/env node

import { Client } from '@notionhq/client';

import { config } from './config.ts';
import { DataSources } from './dbs/Database.ts';
import { Icon } from './entities/Icon.ts';

interface Args {
  dataSourceId: string;
  startCursor?: string;
  filter?: Parameters<Client['dataSources']['query']>[0]['filter'];
}

const updateIcon = async ({ dataSourceId, startCursor, filter }: Args) => {
  const notionClient = new Client({ auth: config.notionSecret });
  const pages = await notionClient.dataSources.query({
    data_source_id: dataSourceId,
    start_cursor: startCursor,
    filter,
  });

  const updates = pages.results.map(p => {
    const url = Icon('document');

    return notionClient.pages.update({
      page_id: p.id,
      icon: { type: 'external', external: { url } },
    });
  });

  return Promise.all(updates);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const relationFilter = {
  property: 'Project',
  type: 'relation',
  relation: { contains: '08a493c6-93be-4c3c-b208-8d62d650bf16' },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const statusFilter = {
  property: 'Status',
  status: { equals: 'Done' },
};

await updateIcon({ dataSourceId: DataSources.Actions });
