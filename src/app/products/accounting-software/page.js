import AccountingHero from "@/components/pages/accounting-software/AccountingHero";
import AccountingManagement from "@/components/pages/accounting-software/AccountingManagement";
import AccountingBenefitsSection from "@/components/pages/accounting-software/AccountingBenefitsSection";
import AccountingModulesWithVideo from "@/components/pages/accounting-software/AccountingModulesWithVideo";
import AccountingScalableSolution from "@/components/pages/accounting-software/AccountingScalableSolution";
import AccountingTargetAudience from "@/components/pages/accounting-software/AccountingTargetAudience";
import AccountingWorkflow from "@/components/pages/accounting-software/AccountingWorkflow";
import AccountingTrialSection from "@/components/pages/accounting-software/AccountingTrialSection";

export default function AccountingSoftwarePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AccountingHero />
      <AccountingManagement />
      <AccountingBenefitsSection />
      <AccountingModulesWithVideo />
      <AccountingScalableSolution />
      <AccountingTargetAudience />
      <AccountingWorkflow />
      <AccountingTrialSection />
    </main>
  );
}
