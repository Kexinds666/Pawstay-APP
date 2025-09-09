import Stripe from 'stripe';
export const handler = async (event: any) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_xxx', { apiVersion: '2024-06-20' as any });
  try {
    const sig = event.headers['stripe-signature'];
    stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET || 'whsec_xxx');
  } catch (e: any) {
    return { statusCode: 400, body: `Webhook Error: ${e.message}` };
  }
  return { statusCode: 200, body: 'ok' };
};
