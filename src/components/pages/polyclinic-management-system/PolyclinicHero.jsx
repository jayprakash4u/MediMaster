import ProductHero from "@/components/ui/ProductHero";
import PolyclinicOrbit from "@/components/pages/polyclinic-management-system/PolyclinicOrbit";
import { polyclinicHero } from "@/lib/product-heroes";

export default function PolyclinicHero() {
  return <ProductHero {...polyclinicHero} visual={<PolyclinicOrbit />} />;
}
