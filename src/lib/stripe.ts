import Stripe from "stripe";

declare global {
  var __stripe: Stripe | undefined;
}

/** Customer-facing Stripe labels. Never send store/product names to Stripe. */
export const STRIPE_CONSULTING = {
  productName: "Consulting",
  productDescription: "Professional consulting services.",
  paymentDescription: "Consulting",
  statementDescriptorSuffix: "CONSULTING",
} as const;

function getStripeSecretKey(): string {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return key;
}

export function getStripe(): Stripe {
  if (!globalThis.__stripe) {
    globalThis.__stripe = new Stripe(getStripeSecretKey());
  }

  return globalThis.__stripe;
}
