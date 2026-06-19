"use client";

import BillingHero from "@/components/pages/medical-billing-system/BillingHero";
import BillingManagement from "@/components/pages/medical-billing-system/BillingManagement";
import BillingBenefitsSection from "@/components/pages/medical-billing-system/BillingBenefitsSection";
import BillingModulesWithVideo from "@/components/pages/medical-billing-system/BillingModulesWithVideo";
import BillingScalableSolution from "@/components/pages/medical-billing-system/BillingScalableSolution";
import BillingTargetAudience from "@/components/pages/medical-billing-system/BillingTargetAudience";
import BillingWorkflow from "@/components/pages/medical-billing-system/BillingWorkflow";
import BillingTrialSection from "@/components/pages/medical-billing-system/BillingTrialSection";

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
    </main>
  );
}
