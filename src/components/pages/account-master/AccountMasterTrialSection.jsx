import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { accountMasterTrial } from "@/config/sections/trials";

export default function AccountMasterTrialSection() {
  return <TrialRequestSection {...accountMasterTrial} />;
}
