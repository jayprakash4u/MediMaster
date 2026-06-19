import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { pharmacyTrial } from "@/lib/trial-sections";

export default function PharmacyTrialSection() {
  return <TrialRequestSection {...pharmacyTrial} />;
}
