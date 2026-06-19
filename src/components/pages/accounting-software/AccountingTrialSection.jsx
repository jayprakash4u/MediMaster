import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { accountingTrial } from "@/config/sections/trials";

export default function AccountingTrialSection() {
  return <TrialRequestSection {...accountingTrial} />;
}
