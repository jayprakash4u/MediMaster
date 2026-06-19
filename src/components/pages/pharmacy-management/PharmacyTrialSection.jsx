import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { pharmacyTrial } from "@/config/sections/trials";

export default function PharmacyTrialSection() {
  return <TrialRequestSection {...pharmacyTrial} />;
}
