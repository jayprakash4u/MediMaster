import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { billingTrial } from "@/lib/trial-sections";

export default function BillingTrialSection() {
  return <TrialRequestSection {...billingTrial} />;
}
