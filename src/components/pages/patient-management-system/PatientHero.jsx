import ProductHero from "@/components/ui/ProductHero";
import PatientOrbit from "@/components/pages/patient-management-system/PatientOrbit";
import { patientHero } from "@/lib/product-heroes";

export default function PatientHero() {
  return <ProductHero {...patientHero} visual={<PatientOrbit />} />;
}
