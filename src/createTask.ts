#!/usr/bin/env node

import { isNull } from '@fullstacksjs/toolbox';
import { Client } from '@notionhq/client';

import { config } from './config.ts';
import type { Priority } from './dbs/Action.ts';
import { ActionDatabase, Priorities } from './dbs/Action.ts';
import type { ProjectName } from './entities/Project.ts';
import { Projects } from './entities/Project.ts';
import { Rofi } from './lib/Rofi.ts';

interface Options {
  name: string;
  doDate?: Date;
  priority?: Priority;
  project?: ProjectName;
}

const createTask = ({ name, doDate, priority, project }: Options) => {
  const notionClient = new Client({ auth: config.notionSecret });
  const actionDatabase = new ActionDatabase(notionClient);

  return actionDatabase.addItem({
    icon: isNull(project) ? 'check' : Projects[project]?.icon,
    name,
    doDate,
    project,
    priority,
  });
};

const name = await Rofi.text('Name');
const doDate = await Rofi.relativeDate('Do Date');
const priority = await Rofi.optionalSelect<Priority>(
  'Priority',
  Object.keys(Priorities),
);
const project = await Rofi.optionalSelect<ProjectName>(
  'Project',
  Object.keys(Projects),
);

await createTask({ name, project, doDate, priority });
