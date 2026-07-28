import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getHomepagePlan } from "@/data/business-model";
import {
  checkoutIdempotencyKey,
  checkoutRateLimitKey,
  getCheckoutMode,
  getSiteOrigin,
  getStripeClient,
  getStripePriceId,
} from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maxRequestBytes = 2_000;
const maxRequestsPerMinute = 5;

type RateLimitEntry = { count: number; resetAt: number };

declare global {
  var nekonoteCheckoutRateLimits: Map<string, RateLimitEntry> | undefined;
}

const rateLimits =
  globalThis.nekonoteCheckoutRateLimits ??
  (globalThis.nekonoteCheckoutRateLimits = new Map<string, RateLimitEntry>());

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = rateLimits.get(key);
  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > maxRequestsPerMinute;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > maxRequestBytes) {
    return NextResponse.json(
      { ok: false, error: "payload_too_large" },
      { status: 413 },
    );
  }

  const rateLimitKey = checkoutRateLimitKey(request);
  if (isRateLimited(rateLimitKey)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  const body = (await request.json().catch(() => null)) as
    | { planId?: unknown }
    | null;
  const planId =
    body && typeof body.planId === "string" ? body.planId.trim() : "";
  const plan = getHomepagePlan(planId);

  if (!plan || !plan.stripeCheckoutEnabled) {
    return NextResponse.json(
      { ok: false, error: "invalid_plan" },
      { status: 400 },
    );
  }

  const mode = getCheckoutMode();
  const origin = getSiteOrigin(request);

  if (mode === "mock") {
    return NextResponse.json({
      ok: true,
      mode,
      url: `${origin}/subscription/success?session_id=mock_${randomUUID()}`,
    });
  }

  try {
    const stripe = getStripeClient();
    const priceId = getStripePriceId(plan.slug);
    const session = await stripe.checkout.sessions.create(
      {
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        billing_address_collection: "required",
        phone_number_collection: { enabled: true },
        consent_collection: { terms_of_service: "required" },
        success_url: `${origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/subscription/cancel`,
        metadata: {
          plan_slug: plan.slug,
          environment: "demo",
        },
        subscription_data: {
          metadata: {
            plan_slug: plan.slug,
            environment: "demo",
          },
        },
      },
      {
        idempotencyKey: checkoutIdempotencyKey(plan.slug, rateLimitKey),
      },
    );

    if (!session.url) {
      return NextResponse.json(
        { ok: false, error: "checkout_url_missing" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, mode, url: session.url });
  } catch {
    return NextResponse.json(
      { ok: false, error: "stripe_test_unavailable" },
      { status: 503 },
    );
  }
}
