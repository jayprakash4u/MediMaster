import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { dentalTrial } from "@/config/sections/trials";

export default function DentalTrialSection() {
  return <TrialRequestSection {...dentalTrial} />;
}
