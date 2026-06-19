import ProductHero from "@/components/ui/ProductHero";
import BillingOrbit from "@/components/pages/medical-billing-system/BillingOrbit";
import { billingHero } from "@/lib/product-heroes";

export default function BillingHero() {
  return <ProductHero {...billingHero} visual={<BillingOrbit />} />;
}
