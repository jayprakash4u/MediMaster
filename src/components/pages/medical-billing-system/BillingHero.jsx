import ProductHero from "@/components/ui/ProductHero";
import BillingOrbit from "@/components/pages/medical-billing-system/BillingOrbit";
import { billingHero } from "@/config/heroes/product";

export default function BillingHero() {
  return <ProductHero {...billingHero} visual={<BillingOrbit />} />;
}
