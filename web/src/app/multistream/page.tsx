import type { Metadata } from "next";
import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export const metadata: Metadata = {
  title: "MultiStream Command | ClarityStacked",
  description:
    "Track income, invoices, expenses, reports, and overdue payments across multiple income streams.",
};

export default function MultiStreamPage() {
  return <ProductPageTemplate app={apps.multistream} />;
}