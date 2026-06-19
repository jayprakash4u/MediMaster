import ProductHero from "@/components/ui/ProductHero";
import PathologyStatic from "@/components/pages/pathology-management/PathologyStatic";
import { pathologyHero } from "@/lib/product-heroes";

export default function PathologyHero() {
  return <ProductHero {...pathologyHero} visual={<PathologyStatic />} />;
}
