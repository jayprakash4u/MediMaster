import SupportTicketingHero from "@/components/pages/support-ticketing-system/SupportTicketingHero";
import SupportTicketingManagement from "@/components/pages/support-ticketing-system/SupportTicketingManagement";
import SupportTicketingBenefitsSection from "@/components/pages/support-ticketing-system/SupportTicketingBenefitsSection";
import SupportTicketingModulesWithVideo from "@/components/pages/support-ticketing-system/SupportTicketingModulesWithVideo";
import SupportTicketingScalableSolution from "@/components/pages/support-ticketing-system/SupportTicketingScalableSolution";
import SupportTicketingTargetAudience from "@/components/pages/support-ticketing-system/SupportTicketingTargetAudience";
import SupportTicketingWorkflow from "@/components/pages/support-ticketing-system/SupportTicketingWorkflow";
import SupportTicketingTrialSection from "@/components/pages/support-ticketing-system/SupportTicketingTrialSection";

export default function SupportTicketingSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SupportTicketingHero />
      <SupportTicketingManagement />
      <SupportTicketingBenefitsSection />
      <SupportTicketingModulesWithVideo />
      <SupportTicketingScalableSolution />
      <SupportTicketingTargetAudience />
      <SupportTicketingWorkflow />
      <SupportTicketingTrialSection />
    </main>
  );
}
