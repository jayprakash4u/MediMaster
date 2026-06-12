import Footer from "@/components/layout/Footer";
import AccountMaster from "@/components/pages/account-master/AccountMaster";
import AccountMasterBenefitsSection from "@/components/pages/account-master/AccountMasterBenefitsSection";
import AccountMasterModulesWithVideo from "@/components/pages/account-master/AccountMasterModulesWithVideo";
import AccountMasterScalableSolution from "@/components/pages/account-master/AccountMasterScalableSolution";
import AccountMasterTargetAudience from "@/components/pages/account-master/AccountMasterTargetAudience";
import AccountMasterWorkflow from "@/components/pages/account-master/AccountMasterWorkflow";
import AccountMasterTrialSection from "@/components/pages/account-master/AccountMasterTrialSection";

export default function AccountMasterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AccountMaster />
      <AccountMasterBenefitsSection />
      <AccountMasterModulesWithVideo />
      <AccountMasterScalableSolution />
      <AccountMasterTargetAudience />
      <AccountMasterWorkflow />
      <AccountMasterTrialSection />
      <Footer />
    </main>
  );
}
