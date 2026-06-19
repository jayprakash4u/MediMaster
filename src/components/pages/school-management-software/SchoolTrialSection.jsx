import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { schoolTrial } from "@/lib/trial-sections";

export default function SchoolTrialSection() {
  return <TrialRequestSection {...schoolTrial} />;
}
