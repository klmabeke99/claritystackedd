import type { Metadata } from "next";
import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export const metadata: Metadata = {
  title: "ADHD Work | ClarityStacked",
  description:
    "Plan workdays, unpack tasks, manage focus, and support ADHD-friendly productivity.",
};

export default function AdhdWorkPage() {
  return <ProductPageTemplate app={apps.adhdWork} />;
}