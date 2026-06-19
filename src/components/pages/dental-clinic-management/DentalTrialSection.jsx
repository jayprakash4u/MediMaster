import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { dentalTrial } from "@/lib/trial-sections";

export default function DentalTrialSection() {
  return <TrialRequestSection {...dentalTrial} />;
}
