import ProductHero from "@/components/ui/ProductHero";
import DentalOrbit from "@/components/pages/dental-clinic-management/DentalOrbit";
import { dentalHero } from "@/config/heroes/product";

export default function DentalHero() {
  return <ProductHero {...dentalHero} visual={<DentalOrbit />} />;
}
