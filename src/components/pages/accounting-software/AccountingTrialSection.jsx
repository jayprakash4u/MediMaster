import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { accountingTrial } from "@/lib/trial-sections";

export default function AccountingTrialSection() {
  return <TrialRequestSection {...accountingTrial} />;
}
