import TrialRequestSection from "@/components/ui/TrialRequestSection";
import { supportTicketingTrial } from "@/lib/trial-sections";

export default function SupportTicketingTrialSection() {
  return <TrialRequestSection {...supportTicketingTrial} />;
}
