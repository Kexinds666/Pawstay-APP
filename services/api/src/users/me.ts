export const handler = async (event: any) => {
  const userId = event.requestContext?.authorizer?.jwt?.claims?.sub ?? 'anon';
  return { statusCode: 200, body: JSON.stringify({ id: userId, email: 'demo@pawstay.app' }) };
};
