import Stripe from "stripe";
import { NextResponse } from "next/server";
import {
  getCheckoutMode,
  getStripeClient,
  getWebhookSecret,
} from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const acceptedEvents = new Set<Stripe.Event.Type>([
  "checkout.session.completed",
  "invoice.paid",
  "invoice.payment_failed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

declare global {
  var nekonoteProcessedStripeEvents: Set<string> | undefined;
}

const processedEvents =
  globalThis.nekonoteProcessedStripeEvents ??
  (globalThis.nekonoteProcessedStripeEvents = new Set<string>());

export async function POST(request: Request) {
  if (getCheckoutMode() !== "stripe_test") {
    return NextResponse.json(
      { received: false, error: "webhook_disabled_in_mock_mode" },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { received: false, error: "signature_missing" },
      { status: 400 },
    );
  }

  try {
    const stripe = getStripeClient();
    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      getWebhookSecret(),
    );

    if (processedEvents.has(event.id)) {
      return NextResponse.json({ received: true, duplicate: true });
    }

    if (acceptedEvents.has(event.type)) {
      // Stripe Dashboard is the source of truth in this demo. No customer,
      // card, or subscription data is persisted until a production DB and
      // retention policy are approved.
      processedEvents.add(event.id);
      if (processedEvents.size > 1_000) {
        const oldestEventId = processedEvents.values().next().value;
        if (oldestEventId) processedEvents.delete(oldestEventId);
      }
    }

    return NextResponse.json({
      received: true,
      handled: acceptedEvents.has(event.type),
    });
  } catch {
    return NextResponse.json(
      { received: false, error: "invalid_signature_or_configuration" },
      { status: 400 },
    );
  }
}
