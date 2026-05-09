import type { Metadata } from "next";
import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export const metadata: Metadata = {
  title: "Decision Helper | ClarityStacked",
  description:
    "Turn overthinking into structured decisions using practical clarity systems.",
};

export default function DecisionHelperPage() {
  return <ProductPageTemplate app={apps.decisionHelper} />;
}