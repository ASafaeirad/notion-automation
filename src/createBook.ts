#!/usr/bin/env node

import { range } from '@fullstacksjs/toolbox';
import { Client } from '@notionhq/client';
import { addDays, setHours, setMinutes, setSeconds } from 'date-fns';

import { config } from './config.ts';
import type { Priority } from './dbs/index.ts';
import { ActionDatabase } from './dbs/index.ts';
import type { IconName, ProjectName } from './entities/index.ts';

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

  const pages = range(pageCount - offset + 1, offset, 1);

  const tasks = pages.map(page =>
    action.addItem({
      name: `${title}: ${unit} ${page}`,
      icon,
      priority,
      doDate: addDays(
        setSeconds(setMinutes(setHours(new Date(), 20), 0), 0),
        page - offset,
      ),
      project,
      dueDate,
    }),
  );

  return Promise.all(tasks);
}

// const title = await Rofi.text('Title');
// const offset = await Rofi.text('Offset');
// const pageCount = await Rofi.text('Page Count');
// const dueDate = await Rofi.date('Due Date');
// const priority = await Rofi.optionalSelect<Priority>(
//   'Priority',
//   Object.keys(Priorities),
// );
// const project = await Rofi.select<ProjectName>(
//   'Project',
//   Object.keys(Projects),
// );
// const icon = await Rofi.optionalSelect<IconName>('Icon', iconNames);
// const unit = await Rofi.text('Unit');

await createBook({
  title: 'SE Practitioners Approach',
  icon: 'notebook',
  offset: 77,
  pageCount: 638,
  priority: 'Third',
  project: 'SEPractitionersApproach',
  unit: 'page',
});
