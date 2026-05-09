import type { Metadata } from "next";
import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export const metadata: Metadata = {
  title: "Prepper Pantry | ClarityStacked",
  description:
    "Manage pantry inventory, expiry dates, meal planning, restock systems, and food readiness.",
};

export default function PrepperPantryPage() {
  return <ProductPageTemplate app={apps.prepperPantry} />;
}