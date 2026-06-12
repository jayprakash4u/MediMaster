import Footer from "@/components/layout/Footer";
import DiagnosticCenterManagement from "@/components/pages/diagnostic-center-management/DiagnosticCenterManagement";
import DiagnosticCenterBenefitsSection from "@/components/pages/diagnostic-center-management/DiagnosticCenterBenefitsSection";
import DiagnosticCenterModulesWithVideo from "@/components/pages/diagnostic-center-management/DiagnosticCenterModulesWithVideo";
import DiagnosticCenterScalableSolution from "@/components/pages/diagnostic-center-management/DiagnosticCenterScalableSolution";
import DiagnosticCenterTargetAudience from "@/components/pages/diagnostic-center-management/DiagnosticCenterTargetAudience";
import DiagnosticCenterWorkflow from "@/components/pages/diagnostic-center-management/DiagnosticCenterWorkflow";
import DiagnosticCenterTrialSection from "@/components/pages/diagnostic-center-management/DiagnosticCenterTrialSection";

export default function DiagnosticCenterManagementSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <DiagnosticCenterManagement />
      <DiagnosticCenterBenefitsSection />
      <DiagnosticCenterModulesWithVideo />
      <DiagnosticCenterScalableSolution />
      <DiagnosticCenterTargetAudience />
      <DiagnosticCenterWorkflow />
      <DiagnosticCenterTrialSection />
      <Footer />
    </main>
  );
}
