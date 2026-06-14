import Footer from "@/components/layout/Footer";
import DentalHero from "@/components/pages/dental-clinic-management/DentalHero";
import DentalManagement from "@/components/pages/dental-clinic-management/DentalManagement";
import DentalBenefitsSection from "@/components/pages/dental-clinic-management/DentalBenefitsSection";
import DentalModulesWithVideo from "@/components/pages/dental-clinic-management/DentalModulesWithVideo";
import DentalScalableSolution from "@/components/pages/dental-clinic-management/DentalScalableSolution";
import DentalTargetAudience from "@/components/pages/dental-clinic-management/DentalTargetAudience";
import DentalWorkflow from "@/components/pages/dental-clinic-management/DentalWorkflow";
import DentalTrialSection from "@/components/pages/dental-clinic-management/DentalTrialSection";

export default function DentalClinicManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <DentalHero />
      <DentalManagement />
      <DentalBenefitsSection />
      <DentalModulesWithVideo />
      <DentalScalableSolution />
      <DentalTargetAudience />
      <DentalWorkflow />
      <DentalTrialSection />
      <Footer />
    </main>
  );
}
