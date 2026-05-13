"use client";

import { useState } from "react";

export default function ResourceCheckoutButton({
  resourceSlug,
  price,
}: {
  resourceSlug: string;
  price: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const response = await fetch("/api/create-resource-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourceSlug,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Checkout could not be started.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Sorry, checkout could not be started. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className="rounded-2xl bg-[#07112f] px-8 py-5 text-lg font-black text-white shadow-2xl shadow-slate-900/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Opening checkout..." : `Get the system — ${price}`}
    </button>
  );
}