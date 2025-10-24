#!/usr/bin/env node

import { Client } from '@notionhq/client';

import { config } from './config.ts';
import { DebitDatabase } from './dbs/Debit.ts';
import { FinancialRecordDatabase } from './dbs/FinancialRecord.ts';
import { MonthDatabase } from './dbs/Month.ts';

async function createFinancialMonth() {
  const notionClient = new Client({ auth: config.notionSecret });
  const actionDatabase = new DebitDatabase(notionClient);
  const financialRecordDatabase = new FinancialRecordDatabase(notionClient);
  const monthDatabase = new MonthDatabase(notionClient);

  const month = await monthDatabase.getOrCreateThisMonth();
  const debits = await actionDatabase.getMonthly();
  const promises = config.incomes.map(income => {
    return financialRecordDatabase.createRecord({
      name: 'Income',
      amount: income,
      tag: 'Income',
      month: month.id,
    });
  });

  const debitsPromises = debits.map(debit => {
    return financialRecordDatabase.createRecord({
      name: debit.name,
      amount: debit.amount * -1,
      tag: debit.type,
      month: month.id,
    });
  });

  return Promise.all([...promises, ...debitsPromises]);
}

await createFinancialMonth();
