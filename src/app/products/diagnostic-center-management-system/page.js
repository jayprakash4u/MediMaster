import DiagnosticCenterHero from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterHero";
import DiagnosticCenterManagement from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterManagement";
import DiagnosticCenterBenefitsSection from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterBenefitsSection";
import DiagnosticCenterModulesWithVideo from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterModulesWithVideo";
import DiagnosticCenterScalableSolution from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterScalableSolution";
import DiagnosticCenterTargetAudience from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterTargetAudience";
import DiagnosticCenterWorkflow from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterWorkflow";
import DiagnosticCenterTrialSection from "@/components/pages/diagnostic-center-management-system/DiagnosticCenterTrialSection";

export default function DiagnosticCenterManagementSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <DiagnosticCenterHero />
      <DiagnosticCenterManagement />
      <DiagnosticCenterBenefitsSection />
      <DiagnosticCenterModulesWithVideo />
      <DiagnosticCenterScalableSolution />
      <DiagnosticCenterWorkflow />
      <DiagnosticCenterTrialSection />
    </main>
  );
}
