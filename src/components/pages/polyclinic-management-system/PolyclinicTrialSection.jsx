import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { polyclinicTrial } from "@/lib/trial-sections";

export default function PolyclinicTrialSection() {
  return <TrialRequestSection {...polyclinicTrial} />;
}
