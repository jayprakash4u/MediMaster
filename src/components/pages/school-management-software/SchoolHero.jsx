import ProductHero from "@/components/ui/ProductHero";
import SchoolOrbit from "@/components/pages/school-management-software/SchoolOrbit";
import { schoolHero } from "@/lib/product-heroes";

export default function SchoolHero() {
  return <ProductHero {...schoolHero} visual={<SchoolOrbit />} />;
}
