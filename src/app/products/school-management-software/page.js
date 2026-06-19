import SchoolHero from "@/components/pages/school-management-software/SchoolHero";
import SchoolManagement from "@/components/pages/school-management-software/SchoolManagement";
import SchoolBenefitsSection from "@/components/pages/school-management-software/SchoolBenefitsSection";
import SchoolModulesWithVideo from "@/components/pages/school-management-software/SchoolModulesWithVideo";
import SchoolScalableSolution from "@/components/pages/school-management-software/SchoolScalableSolution";
import SchoolTargetAudience from "@/components/pages/school-management-software/SchoolTargetAudience";
import SchoolWorkflow from "@/components/pages/school-management-software/SchoolWorkflow";
import SchoolTrialSection from "@/components/pages/school-management-software/SchoolTrialSection";

export default function SchoolManagementSoftwarePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SchoolHero />
      <SchoolManagement />
      <SchoolBenefitsSection />
      <SchoolModulesWithVideo />
      <SchoolScalableSolution />
      <SchoolWorkflow />
      <SchoolTrialSection />
    </main>
  );
}
