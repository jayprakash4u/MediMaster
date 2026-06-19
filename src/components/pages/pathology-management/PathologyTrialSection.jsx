import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { pathologyTrial } from "@/lib/trial-sections";

export default function PathologyTrialSection() {
  return <TrialRequestSection {...pathologyTrial} />;
}
