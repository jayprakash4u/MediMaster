import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { hmsTrial } from "@/config/sections/trials";

export default function HMSTrialSection() {
  return <TrialRequestSection {...hmsTrial} />;
}
