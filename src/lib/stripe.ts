import "server-only";

import { createHash } from "node:crypto";
import Stripe from "stripe";
import type { HomepagePlanSlug } from "@/data/business-model";

export type SubscriptionCheckoutMode = "mock" | "stripe_test";

export function getCheckoutMode(): SubscriptionCheckoutMode {
  const mode = process.env.SUBSCRIPTION_CHECKOUT_MODE?.trim() ?? "mock";
  return mode === "stripe_test" ? "stripe_test" : "mock";
}

export function getStripeClient(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey || !secretKey.startsWith("sk_test_")) {
    throw new Error("stripe_test_key_missing");
  }

  return new Stripe(secretKey, {
    maxNetworkRetries: 2,
    timeout: 10_000,
  });
}

export function getStripePriceId(planSlug: HomepagePlanSlug): string {
  const envKeyByPlan: Partial<Record<HomepagePlanSlug, string>> = {
    "web-start": "STRIPE_PRICE_ID_WEB_START",
  };
  const envKey = envKeyByPlan[planSlug];
  const priceId = envKey ? process.env[envKey]?.trim() : undefined;

  if (!priceId || !priceId.startsWith("price_")) {
    throw new Error("stripe_test_price_missing");
  }
  return priceId;
}

export function getWebhookSecret(): string {
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secret || !secret.startsWith("whsec_")) {
    throw new Error("stripe_webhook_secret_missing");
  }
  return secret;
}

export function getSiteOrigin(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    const url = new URL(configured);
    const isLocal =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "::1";
    if (url.protocol === "https:" || (url.protocol === "http:" && isLocal)) {
      return url.origin;
    }
  }
  return new URL(request.url).origin;
}

export function checkoutRateLimitKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const connectingIp = request.headers.get("cf-connecting-ip")?.trim();
  const source = connectingIp || forwarded || "unknown";
  return createHash("sha256").update(source).digest("hex");
}

export function checkoutIdempotencyKey(
  planSlug: HomepagePlanSlug,
  rateLimitKey: string,
): string {
  const thirtySecondBucket = Math.floor(Date.now() / 30_000);
  const digest = createHash("sha256")
    .update(`${planSlug}:${rateLimitKey}:${thirtySecondBucket}`)
    .digest("hex");
  return `nekonote_demo_${digest}`;
}
