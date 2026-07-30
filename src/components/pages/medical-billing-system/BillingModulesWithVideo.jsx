import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Claim Generation & TPA Reconciliation",
  "GST-Compliant Invoicing",
  "Multi-Channel Payment Processing",
  "Insurance Authorization Workflows",
  "Patient Ledger Management",
  "Revenue Analytics Dashboard",
];

const rightColumnModules = [
  "Cash & Credit Billing",
  "Installment & Package Management",
  "Audit Trail & Compliance Reports",
  "Receivables Aging Reports",
  "Integration with OPD/IPD",
  "Multi-Branch Billing Support",
];

export default function BillingModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Medical Billing System Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Medical Billing System — Full Demo"
    />
  );
}
