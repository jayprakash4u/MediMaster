import Footer from "@/components/layout/Footer";
import PharmacyHero from "@/components/pages/pharmacy-management/PharmacyHero";
import PharmacyManagement from "@/components/pages/pharmacy-management/PharmacyManagement";
import PharmacyBenefitsSection from "@/components/pages/pharmacy-management/PharmacyBenefitsSection";
import PharmacyTargetAudience from "@/components/pages/pharmacy-management/PharmacyTargetAudience";
import PharmacyModulesWithVideo from "@/components/pages/pharmacy-management/PharmacyModulesWithVideo";
import PharmacyTrialSection from "@/components/pages/pharmacy-management/PharmacyTrialSection";
import PharmacyWorkflow from "@/components/pages/pharmacy-management/PharmacyWorkflow";

export default function PharmacyManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PharmacyHero />
      <PharmacyManagement />
      <PharmacyBenefitsSection />
      <PharmacyModulesWithVideo />
      <PharmacyTargetAudience />
      <PharmacyWorkflow />
      <PharmacyTrialSection />
      <Footer />
    </main>
  );
}
