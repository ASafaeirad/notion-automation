import dotenv from 'dotenv';

dotenv.config();

export const config = {
  notionSecret: process.env['NOTION_API_SECRET'],
  jiraApiClient: process.env['JIRA_API_KEY'],
  jiraUsername: process.env['JIRA_USERNAME'],
};
