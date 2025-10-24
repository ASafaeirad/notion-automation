import type { Client } from '@notionhq/client';

import { DataSources } from './Database.ts';

export const Recurrence = {
  Monthly: 'Monthly',
  Yearly: 'Yearly',
} as const;
export type Recurrence = (typeof Recurrence)[keyof typeof Recurrence];

export interface Debit {
  id: string;
  name: string;
  amount: number;
  recurrence: Recurrence;
}

export const toDebit = (page: any) => {
  const props = page.properties;

  return {
    id: page.id,
    name: props['Name'].title[0].plain_text || 'Untitled',
    amount: props['Amount'].number,
    recurrence: props['Recurrence'].select?.name as Recurrence,
    type: props['Type'].select?.name,
  };
};

export class DebitDatabase {
  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }

  async getMonthly() {
    const res = await this.#client.dataSources.query({
      data_source_id: DataSources.Debits,
      filter: {
        and: [
          { property: 'IsActive', checkbox: { equals: true } },
          { property: 'Recurrence', select: { equals: Recurrence.Monthly } },
        ],
      },
    });

    return res.results.map(toDebit);
  }
}
