"use client";

import Footer from "@/components/layout/Footer.jsx";
import BillingHero from "@/components/pages/medical-billing/BillingHero";
import BillingManagement from "@/components/pages/medical-billing/BillingManagement";
import BillingBenefitsSection from "@/components/pages/medical-billing/BillingBenefitsSection";
import BillingModulesWithVideo from "@/components/pages/medical-billing/BillingModulesWithVideo";
import BillingScalableSolution from "@/components/pages/medical-billing/BillingScalableSolution";
import BillingTargetAudience from "@/components/pages/medical-billing/BillingTargetAudience";
import BillingWorkflow from "@/components/pages/medical-billing/BillingWorkflow";
import BillingTrialSection from "@/components/pages/medical-billing/BillingTrialSection";

export default function MedicalBillingSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BillingHero />
      <BillingManagement />
      <BillingBenefitsSection />
      <BillingModulesWithVideo />
      <BillingScalableSolution />
      <BillingTargetAudience />
      <BillingWorkflow />
      <BillingTrialSection />
      <Footer />
    </main>
  );
}
