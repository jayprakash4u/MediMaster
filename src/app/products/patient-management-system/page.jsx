import Footer from "@/components/layout/Footer";
import PatientHero from "@/components/pages/patient-management/PatientHero";
import PatientManagement from "@/components/pages/patient-management/PatientManagement";
import PatientBenefitsSection from "@/components/pages/patient-management/PatientBenefitsSection";
import PatientModulesWithVideo from "@/components/pages/patient-management/PatientModulesWithVideo";
import PatientScalableSolution from "@/components/pages/patient-management/PatientScalableSolution";
import PatientTargetAudience from "@/components/pages/patient-management/PatientTargetAudience";
import PatientWorkflow from "@/components/pages/patient-management/PatientWorkflow";
import PatientTrialSection from "@/components/pages/patient-management/PatientTrialSection";

export default function PatientManagementSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PatientHero />
      <PatientManagement />
      <PatientBenefitsSection />
      <PatientModulesWithVideo />
      <PatientScalableSolution />
      <PatientWorkflow />
      <PatientTrialSection />
      <Footer />
    </main>
  );
}
