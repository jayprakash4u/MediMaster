import ProductHero from "@/components/ui/ProductHero";
import MediFitOrbit from "@/components/pages/medifit/MediFitOrbit";
import { medifitHero } from "@/config/heroes/product";

export default function MediFitHero() {
  return <ProductHero {...medifitHero} visual={<MediFitOrbit />} />;
}
