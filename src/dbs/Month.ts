import type { Client } from '@notionhq/client';

import { isNull } from '@fullstacksjs/toolbox';

import { Month } from '../entities/index.ts';
import { Database, DataSources, Pages, Templates } from './Database.ts';

export const toMonth = (page: any) => {
  const props = page.properties;

  return {
    id: page.id,
    name: props['Name'].title[0].plain_text || 'Untitled',
  };
};

export class MonthDatabase {
  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }

  async getOrCreateThisMonth() {
    let month = await this.#client.dataSources
      .query({
        data_source_id: DataSources.Months,
        filter: {
          property: 'Name',
          title: { equals: Month(new Date()) },
        },
      })
      .then(res => res.results[0]);

    if (isNull(month)) {
      month = await this.#client.pages.create({
        parent: { database_id: Database.Months },
        properties: {
          Name: { title: [{ text: { content: Month(new Date()) } }] },
          Years: { relation: [{ id: Pages.Year }] },
        },
        template: {
          template_id: Templates.Month,
          type: 'template_id',
        },
      });
    }

    return toMonth(month);
  }
}
