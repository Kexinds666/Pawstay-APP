import { Client } from '@opensearch-project/opensearch';
export const osClient = new Client({ node: process.env.OS_ENDPOINT || 'https://example.com' });
