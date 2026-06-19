import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { billingTrial } from "@/config/sections/trials";

export default function BillingTrialSection() {
  return <TrialRequestSection {...billingTrial} />;
}
