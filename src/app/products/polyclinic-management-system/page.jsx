import Footer from "@/components/layout/Footer";
import PolyclinicHero from "@/components/pages/polyclinic-management/PolyclinicHero";
import PolyclinicManagement from "@/components/pages/polyclinic-management/PolyclinicManagement";
import PolyclinicBenefitsSection from "@/components/pages/polyclinic-management/PolyclinicBenefitsSection";
import PolyclinicModulesWithVideo from "@/components/pages/polyclinic-management/PolyclinicModulesWithVideo";
import PolyclinicScalableSolution from "@/components/pages/polyclinic-management/PolyclinicScalableSolution";
import PolyclinicTargetAudience from "@/components/pages/polyclinic-management/PolyclinicTargetAudience";
import PolyclinicWorkflow from "@/components/pages/polyclinic-management/PolyclinicWorkflow";
import PolyclinicTrialSection from "@/components/pages/polyclinic-management/PolyclinicTrialSection";

export default function PolyclinicManagementSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PolyclinicHero />
      <PolyclinicManagement />
      <PolyclinicBenefitsSection />
      <PolyclinicModulesWithVideo />
      <PolyclinicScalableSolution />
      <PolyclinicWorkflow />
      <PolyclinicTrialSection />
      <Footer />
    </main>
  );
}
