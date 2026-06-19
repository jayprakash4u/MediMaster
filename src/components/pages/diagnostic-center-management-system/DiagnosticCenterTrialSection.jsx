import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { diagnosticCenterTrial } from "@/config/sections/trials";

export default function DiagnosticCenterTrialSection() {
  return <TrialRequestSection {...diagnosticCenterTrial} />;
}
