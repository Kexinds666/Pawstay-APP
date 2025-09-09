import Stripe from 'stripe';
import { ok, bad } from '../common/response';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_xxx', { apiVersion: '2024-06-20' as any });
export const handler = async (event: any) => {
  const body = JSON.parse(event.body ?? '{}');
  const { bookingId } = body;
  if (!bookingId) return bad('bookingId required');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 10000, currency: 'usd', automatic_payment_methods: { enabled: true }
  });
  return ok({ paymentIntentClientSecret: paymentIntent.client_secret });
};
