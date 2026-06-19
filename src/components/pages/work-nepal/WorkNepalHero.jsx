import ProductHero from "@/components/ui/ProductHero";
import WorkNepalOrbit from "@/components/pages/work-nepal/WorkNepalOrbit";
import { workNepalHero } from "@/config/heroes/product";

export default function WorkNepalHero() {
  return <ProductHero {...workNepalHero} visual={<WorkNepalOrbit />} />;
}
