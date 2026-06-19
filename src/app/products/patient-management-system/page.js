import PatientHero from "@/components/pages/patient-management-system/PatientHero";
import PatientManagement from "@/components/pages/patient-management-system/PatientManagement";
import PatientBenefitsSection from "@/components/pages/patient-management-system/PatientBenefitsSection";
import PatientModulesWithVideo from "@/components/pages/patient-management-system/PatientModulesWithVideo";
import PatientScalableSolution from "@/components/pages/patient-management-system/PatientScalableSolution";
import PatientTargetAudience from "@/components/pages/patient-management-system/PatientTargetAudience";
import PatientWorkflow from "@/components/pages/patient-management-system/PatientWorkflow";
import PatientTrialSection from "@/components/pages/patient-management-system/PatientTrialSection";

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
    </main>
  );
}
