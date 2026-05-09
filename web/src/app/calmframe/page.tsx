import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export default function CalmFramePage() {
  return <ProductPageTemplate app={apps.calmframe} />;
}