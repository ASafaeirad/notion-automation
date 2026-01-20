#!/usr/bin/env node

import { Client } from '@notionhq/client';
import { addDays } from 'date-fns';

import type { IconName } from './entities/Icon.ts';
import type { ProjectName } from './entities/Project.ts';

import { config } from './config.ts';
import { ActionDatabase } from './dbs/Action.ts';

interface Lesson {
  url: string;
  label: string;
}

async function createCourse({
  offset = 0,
  icon,
  project,
  lessons,
}: {
  offset?: number;
  icon: IconName;
  project: ProjectName;
  lessons: Lesson[];
}) {
  const client = new Client({ auth: config.notionSecret });
  const actionDatabase = new ActionDatabase(client);

  const items = lessons
    .map((lesson, index) => ({
      name: `${index + 1}. ${lesson.label}`,
      doDate: addDays(new Date(), index + offset),
      url: lesson.url,
    }))
    .slice(offset);

  const tasks = items.map(item =>
    actionDatabase
      .addItem({
        icon,
        name: item.name,
        doDate: item.doDate,
        project,
        children: [{ video: { external: { url: item.url } } }],
      })
      .then(res => {
        console.log(`✅ Item "${item.name}" created`);
        return res;
      }),
  );

  return Promise.all(tasks);
}

const lessons: Lesson[] = [];

await createCourse({
  offset: 0,
  icon: 'github',
  project: 'GitBook',
  lessons,
});
