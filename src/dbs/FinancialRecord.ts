import type { Client } from '@notionhq/client';

import { Icon } from '../entities/index.ts';
import { Database } from './Database.ts';

interface FinancialRecord {
  name: string;
  amount: number;
  tag: string;
  month: string;
}

export class FinancialRecordDatabase {
  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }

  createRecord({ name, amount, tag, month }: FinancialRecord) {
    return this.#client.pages.create({
      parent: { database_id: Database.FinancialRecords },
      icon: { type: 'external', external: { url: Icon('receipt') } },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Amount: { number: amount },
        Month: { relation: [{ id: month }] },
        Tag: { select: { name: tag } },
      },
    });
  }
}
