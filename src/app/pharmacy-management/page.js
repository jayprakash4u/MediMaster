import Footer from "@/components/layout/Footer";
import PharmacyManagement from "@/components/sections/PharmacyManagement";
import PharmacyBenefitsSection from "@/components/sections/PharmacyBenefitsSection";
import PharmacyTargetAudience from "@/components/sections/PharmacyTargetAudience";
import PharmacyModulesWithVideo from "@/components/sections/PharmacyModulesWithVideo";
import PharmacyTrialSection from "@/components/sections/PharmacyTrialSection";
import PharmacyWorkflow from "@/components/sections/PharmacyWorkflow";

export default function PharmacyManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
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
