import ProductHero from "@/components/ui/ProductHero";
import PolyclinicOrbit from "@/components/pages/polyclinic-management-system/PolyclinicOrbit";
import { polyclinicHero } from "@/config/heroes/product";

export default function PolyclinicHero() {
  return <ProductHero {...polyclinicHero} visual={<PolyclinicOrbit />} />;
}
