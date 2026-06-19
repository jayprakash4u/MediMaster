import ProductHero from "@/components/ui/ProductHero";
import PatientOrbit from "@/components/pages/patient-management-system/PatientOrbit";
import { patientHero } from "@/config/heroes/product";

export default function PatientHero() {
  return <ProductHero {...patientHero} visual={<PatientOrbit />} />;
}
