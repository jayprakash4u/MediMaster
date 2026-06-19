import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { polyclinicTrial } from "@/config/sections/trials";

export default function PolyclinicTrialSection() {
  return <TrialRequestSection {...polyclinicTrial} />;
}
