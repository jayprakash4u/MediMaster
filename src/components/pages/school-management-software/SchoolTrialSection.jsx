import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { schoolTrial } from "@/config/sections/trials";

export default function SchoolTrialSection() {
  return <TrialRequestSection {...schoolTrial} />;
}
