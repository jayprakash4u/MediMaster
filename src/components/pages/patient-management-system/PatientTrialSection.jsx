import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { patientTrial } from "@/lib/trial-sections";

export default function PatientTrialSection() {
  return <TrialRequestSection {...patientTrial} />;
}
