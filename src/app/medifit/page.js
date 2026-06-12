import Footer from "@/components/layout/Footer";
import MediFitManagement from "@/components/pages/medifit/MediFitManagement";
import MediFitBenefitsSection from "@/components/pages/medifit/MediFitBenefitsSection";
import MediFitModulesWithVideo from "@/components/pages/medifit/MediFitModulesWithVideo";
import MediFitScalableSolution from "@/components/pages/medifit/MediFitScalableSolution";
import MediFitTargetAudience from "@/components/pages/medifit/MediFitTargetAudience";
import MediFitWorkflow from "@/components/pages/medifit/MediFitWorkflow";
import MediFitTrialSection from "@/components/pages/medifit/MediFitTrialSection";

export default function MediFitPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <MediFitManagement />
      <MediFitBenefitsSection />
      <MediFitModulesWithVideo />
      <MediFitScalableSolution />
      <MediFitTargetAudience />
      <MediFitWorkflow />
      <MediFitTrialSection />
      <Footer />
    </main>
  );
}
