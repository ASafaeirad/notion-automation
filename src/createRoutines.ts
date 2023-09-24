#!/usr/bin/env bun

import { Client } from '@notionhq/client';

import { config } from './config.js';
import { RoutineDatabase } from './dbs/index.js';

async function createRoutines() {
  const client = new Client({ auth: config.notionSecret });
  const routineDb = new RoutineDatabase(client);
  const { routines } = await import('./routines.js');
  routineDb.addRoutines(routines);
}

await createRoutines();
