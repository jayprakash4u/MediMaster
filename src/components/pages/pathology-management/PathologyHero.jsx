import ProductHero from "@/components/ui/ProductHero";
import PathologyStatic from "@/components/pages/pathology-management/PathologyStatic";
import { pathologyHero } from "@/config/heroes/product";

export default function PathologyHero() {
  return <ProductHero {...pathologyHero} visual={<PathologyStatic />} />;
}
