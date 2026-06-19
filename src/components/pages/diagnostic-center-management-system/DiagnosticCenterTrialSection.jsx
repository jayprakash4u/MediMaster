import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { diagnosticCenterTrial } from "@/lib/trial-sections";

export default function DiagnosticCenterTrialSection() {
  return <TrialRequestSection {...diagnosticCenterTrial} />;
}
