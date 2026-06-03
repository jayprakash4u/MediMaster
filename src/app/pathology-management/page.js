import Footer from "@/components/layout/Footer";
import PathologyManagement from "@/components/sections/PathologyManagement";
import PathologyBenefitsSection from "@/components/sections/PathologyBenefitsSection";
import PathologyModulesWithVideo from "@/components/sections/PathologyModulesWithVideo";
import ScalableSolution from "@/components/sections/ScalableSolution";
import PathologyTargetAudience from "@/components/sections/PathologyTargetAudience";
import PathologyWorkflow from "@/components/sections/PathologyWorkflow";
import PathologyTrialSection from "@/components/sections/PathologyTrialSection";

export default function PathologyManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PathologyManagement />
      <PathologyBenefitsSection />
      <PathologyModulesWithVideo />
      <ScalableSolution />
      <PathologyWorkflow />
      <PathologyTrialSection />
      <Footer />
    </main>
  );
}
