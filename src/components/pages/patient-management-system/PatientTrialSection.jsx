import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { patientTrial } from "@/config/sections/trials";

export default function PatientTrialSection() {
  return <TrialRequestSection {...patientTrial} />;
}
