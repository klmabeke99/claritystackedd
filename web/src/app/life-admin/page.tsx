import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export default function LifeAdminPage() {
  return <ProductPageTemplate app={apps.lifeAdmin} />;
}