import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
export const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}));
export const Tables = {
  Listings: process.env.TABLE_LISTINGS || 'pawstay-listings',
  Messages: process.env.TABLE_MESSAGES || 'pawstay-messages',
  Bookings: process.env.TABLE_BOOKINGS || 'pawstay-bookings'
};
