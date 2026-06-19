import ProductHero from "@/components/ui/ProductHero";
import DiagnosticCenterOrbit from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterOrbit";
import { diagnosticCenterHero } from "@/lib/product-heroes";

export default function DiagnosticCenterHero() {
  return <ProductHero {...diagnosticCenterHero} visual={<DiagnosticCenterOrbit />} />;
}
