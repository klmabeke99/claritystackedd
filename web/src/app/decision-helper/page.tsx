import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export default function DecisionHelperPage() {
  return <ProductPageTemplate app={apps.decisionHelper} />;
}