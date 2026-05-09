import type { Metadata } from "next";
import ProductPageTemplate from "../components/ProductPageTemplate";
import { apps } from "../data/apps";

export const metadata: Metadata = {
  title: "Life Admin OS | ClarityStacked",
  description:
    "Organise bills, subscriptions, tasks, reminders, and life admin systems.",
};

export default function LifeAdminPage() {
  return <ProductPageTemplate app={apps.lifeAdmin} />;
}