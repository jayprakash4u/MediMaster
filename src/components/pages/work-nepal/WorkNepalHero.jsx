import ProductHero from "@/components/ui/ProductHero";
import WorkNepalOrbit from "@/components/pages/work-nepal/WorkNepalOrbit";
import { workNepalHero } from "@/lib/product-heroes";

export default function WorkNepalHero() {
  return <ProductHero {...workNepalHero} visual={<WorkNepalOrbit />} />;
}
