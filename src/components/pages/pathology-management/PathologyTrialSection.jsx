import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { pathologyTrial } from "@/config/sections/trials";

export default function PathologyTrialSection() {
  return <TrialRequestSection {...pathologyTrial} />;
}
