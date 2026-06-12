import Footer from "@/components/layout/Footer";
import SchoolManagement from "@/components/pages/school-management/SchoolManagement";
import SchoolBenefitsSection from "@/components/pages/school-management/SchoolBenefitsSection";
import SchoolModulesWithVideo from "@/components/pages/school-management/SchoolModulesWithVideo";
import SchoolScalableSolution from "@/components/pages/school-management/SchoolScalableSolution";
import SchoolTargetAudience from "@/components/pages/school-management/SchoolTargetAudience";
import SchoolWorkflow from "@/components/pages/school-management/SchoolWorkflow";
import SchoolTrialSection from "@/components/pages/school-management/SchoolTrialSection";

export default function SchoolManagementSoftwarePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SchoolManagement />
      <SchoolBenefitsSection />
      <SchoolModulesWithVideo />
      <SchoolScalableSolution />
      <SchoolTargetAudience />
      <SchoolWorkflow />
      <SchoolTrialSection />
      <Footer />
    </main>
  );
}
