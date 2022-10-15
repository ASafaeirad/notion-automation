#!/usr/bin/env node

import { isNull, toInteger } from '@fullstacksjs/toolbox';
import { Client } from '@notionhq/client';
import { addDays } from 'date-fns';
import { getPlaylistVideos } from 'usetube';

import { config } from './config.js';
import { ActionDatabase } from './dbs/Action.js';
import type { IconName, ProjectName } from './entities/index.js';
import { iconNames, PlayListVideo, Projects } from './entities/index.js';
import { Rofi } from './lib/Rofi.js';

interface Options {
  offset?: number;
  playlist: string;
  project: ProjectName;
  icon: IconName;
}

async function createYoutubeCourse({
  offset = 0,
  playlist,
  icon,
  project,
}: Options) {
  const client = new Client({ auth: config.notionSecret });
  const actionDatabase = new ActionDatabase(client);
  const videos = await getPlaylistVideos(playlist);
  if (isNull(videos)) throw new Error('Cannot get the playlist');

  const items = videos
    .map((video, index) => ({
      name: `${index + 1}. ${video.title}`,
      doDate: addDays(new Date(), index + offset),
      url: PlayListVideo({ id: video.id, playlist }),
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

const playlist = await Rofi.text('Playlist');
const icon = await Rofi.optionalSelect<IconName>('Icon', iconNames);
const project = await Rofi.select<ProjectName>(
  'Project',
  Object.keys(Projects),
);
const offset = await Rofi.optionalText('Offset');

await createYoutubeCourse({
  playlist,
  project,
  offset: toInteger(offset, 0),
  icon: icon ?? 'youtube',
});
