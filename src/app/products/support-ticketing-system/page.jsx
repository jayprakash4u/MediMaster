import Footer from "@/components/layout/Footer";
import SupportTicketingManagement from "@/components/pages/support-ticketing/SupportTicketingManagement";
import SupportTicketingBenefitsSection from "@/components/pages/support-ticketing/SupportTicketingBenefitsSection";
import SupportTicketingModulesWithVideo from "@/components/pages/support-ticketing/SupportTicketingModulesWithVideo";
import SupportTicketingScalableSolution from "@/components/pages/support-ticketing/SupportTicketingScalableSolution";
import SupportTicketingTargetAudience from "@/components/pages/support-ticketing/SupportTicketingTargetAudience";
import SupportTicketingWorkflow from "@/components/pages/support-ticketing/SupportTicketingWorkflow";
import SupportTicketingTrialSection from "@/components/pages/support-ticketing/SupportTicketingTrialSection";

export default function SupportTicketingSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SupportTicketingManagement />
      <SupportTicketingBenefitsSection />
      <SupportTicketingModulesWithVideo />
      <SupportTicketingScalableSolution />
      <SupportTicketingTargetAudience />
      <SupportTicketingWorkflow />
      <SupportTicketingTrialSection />
      <Footer />
    </main>
  );
}
