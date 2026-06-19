import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { supportTicketingTrial } from "@/config/sections/trials";

export default function SupportTicketingTrialSection() {
  return <TrialRequestSection {...supportTicketingTrial} />;
}
