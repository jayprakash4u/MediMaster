import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { medifitTrial } from "@/config/sections/trials";

export default function MediFitTrialSection() {
  return <TrialRequestSection {...medifitTrial} />;
}
