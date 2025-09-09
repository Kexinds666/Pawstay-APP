export const env = {
  APP_REGION: process.env.APP_REGION || 'us-west-2',
  APPSYNC_URL: process.env.APPSYNC_URL || '',
  COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID || '',
  COGNITO_WEB_CLIENT_ID: process.env.COGNITO_WEB_CLIENT_ID || '',
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || '',
  API_BASE_URL: process.env.API_BASE_URL || '',
  S3_BUCKET_PUBLIC_URL: process.env.S3_BUCKET_PUBLIC_URL || ''
};
