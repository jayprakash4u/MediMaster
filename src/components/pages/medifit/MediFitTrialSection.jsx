import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { medifitTrial } from "@/lib/trial-sections";

export default function MediFitTrialSection() {
  return <TrialRequestSection {...medifitTrial} />;
}
