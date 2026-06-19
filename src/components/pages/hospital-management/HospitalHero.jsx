import ProductHero from "@/components/ui/ProductHero";
import HMSOrbit from "@/components/pages/hospital-management/HMSOrbit";
import { hospitalHero } from "@/config/heroes/product";

export default function HospitalHero() {
  return <ProductHero {...hospitalHero} visual={<HMSOrbit />} />;
}
