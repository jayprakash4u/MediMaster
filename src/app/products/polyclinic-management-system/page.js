import PolyclinicHero from "@/components/pages/polyclinic-management-system/PolyclinicHero";
import PolyclinicManagement from "@/components/pages/polyclinic-management-system/PolyclinicManagement";
import PolyclinicBenefitsSection from "@/components/pages/polyclinic-management-system/PolyclinicBenefitsSection";
import PolyclinicModulesWithVideo from "@/components/pages/polyclinic-management-system/PolyclinicModulesWithVideo";
import PolyclinicScalableSolution from "@/components/pages/polyclinic-management-system/PolyclinicScalableSolution";
import PolyclinicTargetAudience from "@/components/pages/polyclinic-management-system/PolyclinicTargetAudience";
import PolyclinicWorkflow from "@/components/pages/polyclinic-management-system/PolyclinicWorkflow";
import PolyclinicTrialSection from "@/components/pages/polyclinic-management-system/PolyclinicTrialSection";

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
    </main>
  );
}
