import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resourceSlug = body.resourceSlug;

    if (!resourceSlug) {
      return NextResponse.json(
        { error: "Resource slug is required." },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const priceId = process.env.STRIPE_RESOURCE_PRICE_ID;

    if (!siteUrl || !priceId) {
      return NextResponse.json(
        { error: "Stripe environment variables are missing." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        resource_slug: resourceSlug,
      },
      success_url: `${siteUrl}/resources/${resourceSlug}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/resources/${resourceSlug}?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Create resource checkout error:", error);

    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}