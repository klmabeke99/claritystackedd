import type { Metadata } from "next";
import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export const metadata: Metadata = {
  title: "CalmFrame | ClarityStacked",
  description:
    "Reduce mental noise, reflect clearly, reset focus, and create calmer routines.",
};

export default function CalmFramePage() {
  return <ProductPageTemplate app={apps.calmframe} />;
}