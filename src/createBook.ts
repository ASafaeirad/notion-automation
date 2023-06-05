#!/usr/bin/env node

import { range, toInteger } from '@fullstacksjs/toolbox';
import { Client } from '@notionhq/client';

import { config } from './config.js';
import type { Priority } from './dbs/index.js';
import { ActionDatabase, Priorities } from './dbs/index.js';
import type { IconName, ProjectName } from './entities/index.js';
import { iconNames, Projects } from './entities/index.js';
import { Rofi } from './lib/Rofi.js';

interface Options {
  offset: number;
  pageCount: number;
  title: string;
  unit?: string;
  priority?: Priority;
  project: ProjectName;
  dueDate?: Date;
  icon?: IconName;
}

function createBook({
  offset,
  pageCount,
  title,
  unit = 'page',
  priority,
  project,
  dueDate,
  icon = 'notebook',
}: Options) {
  const client = new Client({ auth: config.notionSecret });
  const action = new ActionDatabase(client);

  const pages = range(pageCount - offset, { step: 1, offset });

  const tasks = pages.map(page =>
    action.addItem({
      name: `${title}: ${unit} ${page}`,
      icon,
      priority,
      project,
      dueDate,
    }),
  );

  return Promise.all(tasks);
}

const title = await Rofi.text('Title');
const offset = await Rofi.text('Offset');
const pageCount = await Rofi.text('Page Count');
const dueDate = await Rofi.date('Due Date');
const priority = await Rofi.optionalSelect<Priority>(
  'Priority',
  Object.keys(Priorities),
);
const project = await Rofi.select<ProjectName>(
  'Project',
  Object.keys(Projects),
);
const icon = await Rofi.optionalSelect<IconName>('Icon', iconNames);
const unit = await Rofi.text('Unit');

await createBook({
  title,
  dueDate,
  icon,
  offset: toInteger(offset, 0),
  pageCount: toInteger(pageCount, 0),
  priority,
  project,
  unit,
});
