import ProductHero from "@/components/ui/ProductHero";
import PharmacyOrbit from "@/components/pages/pharmacy-management/PharmacyOrbit";
import { pharmacyHero } from "@/lib/product-heroes";

export default function PharmacyHero() {
  return <ProductHero {...pharmacyHero} visual={<PharmacyOrbit />} />;
}
