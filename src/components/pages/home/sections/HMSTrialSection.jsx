import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { hmsTrial } from "@/lib/trial-sections";

export default function HMSTrialSection() {
  return <TrialRequestSection {...hmsTrial} />;
}
