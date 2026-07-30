import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Automated Invoicing & Billing",
  "GST & Tax Management",
  "Expense Tracking & Receipts",
  "Bank Reconciliation",
  "Purchase Order & Vendor Bills",
];

const rightColumnModules = [
  "Multi-branch Accounting",
  "Payroll & HR Integration",
  "Financial Reporting & Analytics",
  "Budgeting & Forecasting",
  "Asset & Inventory Accounting",
];

export default function AccountingModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Accounting Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      showVideo={false}
    />
  );
}
