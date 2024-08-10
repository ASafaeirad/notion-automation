#!/usr/bin/env bun

import { Client } from '@notionhq/client';

import { config } from './config.js';
import { Icon } from './entities/Icon.js';

const updateIcon = async () => {
  const notionClient = new Client({ auth: config.notionSecret });
  const pages = await notionClient.databases.query({
    database_id: '83ee0ec8ee524ee5939856e689541b2b',
    // start_cursor: '8ad04c54-ef82-44aa-8cb5-aaf6d32e2a01',
    // filter: {
    //   property: 'Project',
    //   type: 'relation',
    //   relation: { contains: '08a493c6-93be-4c3c-b208-8d62d650bf16' },
    // },
    // filter: {
    //   property: 'Status',
    //   status: { equals: 'Done' },
    // },
  });

  const updates = pages.results.map(p => {
    // const icon = p.icon?.external?.url;
    // console.log(icon);
    // if (!icon || icon.includes('/icons/')) return Promise.resolve();

    // const url = `${icon.split('/').slice(0, -1).join('/')}/icons/${icon
    //   .split('/')
    //   .pop()}`;

    const url = Icon('document');

    return notionClient.pages.update({
      page_id: p.id,
      icon: { type: 'external', external: { url } },
    });
  });

  return Promise.all(updates);
};

await updateIcon();
