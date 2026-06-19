import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { accountMasterTrial } from "@/lib/trial-sections";

export default function AccountMasterTrialSection() {
  return <TrialRequestSection {...accountMasterTrial} />;
}
