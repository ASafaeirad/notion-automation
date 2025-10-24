import fs from 'node:fs';
import path from 'node:path';

const envPath = path.resolve(process.cwd(), '.env');

if (fs.existsSync(envPath)) {
  process.loadEnvFile(envPath);
}

export const config = {
  notionSecret: process.env['NOTION_API_SECRET'],
  jiraApiClient: process.env['JIRA_API_KEY'],
  jiraUsername: process.env['JIRA_USERNAME'],
};
