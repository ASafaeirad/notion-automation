#!/usr/bin/env bun

import { isNull } from '@fullstacksjs/toolbox';
import { Client } from '@notionhq/client';

import { config } from './config.js';
import type { Priority } from './dbs/Action.js';
import { ActionDatabase, Priorities } from './dbs/Action.js';
import type { ProjectName } from './entities/Project.js';
import { Projects } from './entities/Project.js';
import { Rofi } from './lib/Rofi.js';

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
