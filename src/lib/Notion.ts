import { Client } from '@notionhq/client';

import { config } from '../config';

type Result = Awaited<ReturnType<Client['dataSources']['query']>>['results'];

export const queryAll = async (
  query: Parameters<Client['dataSources']['query']>[0],
  acc = [] as Result,
  prevCursor?: string,
): Promise<Result> => {
  const notionClient = new Client({ auth: config.notionSecret });
  const pages = await notionClient.dataSources.query(query);

  acc.push(...pages.results);

  if (pages.next_cursor && pages.next_cursor !== prevCursor) {
    return queryAll(query, acc, pages.next_cursor) as Promise<Result>;
  } else {
    return acc;
  }
};
