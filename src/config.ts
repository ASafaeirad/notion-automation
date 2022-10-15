import { getRequiredEnv } from '@fullstacksjs/toolbox';
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  notionSecret: getRequiredEnv('NOTION_API_SECRET'),
  jiraApiClient: getRequiredEnv('JIRA_API_KEY'),
  jiraUsername: getRequiredEnv('JIRA_USERNAME'),
};
