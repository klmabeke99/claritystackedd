import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is missing.");
}

if (!webhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET is missing.");
}
const stripe = new Stripe(stripeSecretKey);

export async function POST(request: Request) {
  try {
    const body = await request.text();

    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe signature." },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const resourceSlug = session.metadata?.resource_slug;

      if (!resourceSlug) {
        return NextResponse.json(
          { error: "Missing resource slug metadata." },
          { status: 400 }
        );
      }

      await supabaseAdmin.from("resource_purchases").insert({
        resource_slug: resourceSlug,
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : null,
        amount_total: session.amount_total,
        currency: session.currency,
        payment_status: session.payment_status,
        download_unlocked: true,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);

    return NextResponse.json(
      { error: "Webhook handler failed." },
      { status: 400 }
    );
  }
}