import Footer from "@/components/layout/Footer";
import PathologyHero from "@/components/pages/pathology-management/PathologyHero";
import PathologyManagement from "@/components/pages/pathology-management/PathologyManagement";
import PathologyBenefitsSection from "@/components/pages/pathology-management/PathologyBenefitsSection";
import PathologyModulesWithVideo from "@/components/pages/pathology-management/PathologyModulesWithVideo";
import ScalableSolution from "@/components/pages/pathology-management/ScalableSolution";
import PathologyTargetAudience from "@/components/pages/pathology-management/PathologyTargetAudience";
import PathologyWorkflow from "@/components/pages/pathology-management/PathologyWorkflow";
import PathologyTrialSection from "@/components/pages/pathology-management/PathologyTrialSection";

export default function PathologyManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PathologyHero />
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
