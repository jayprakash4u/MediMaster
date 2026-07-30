"use client";

import { DollarSign, FileText, CreditCard, BarChart3, Users, Receipt } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: DollarSign,
    title: "Create invoices & track expenses",
    body: "Generate GST-compliant invoices, track receipts, and categorize expenses automatically to maintain clean books.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Automate tax calculations",
    body: "Apply dynamic tax slabs, generate TDS/TCS reports, and stay audit-ready with automatic statutory filings.",
  },
  {
    num: 3,
    icon: CreditCard,
    title: "Reconcile bank transactions",
    body: "Match bank statements with ledger entries, flag discrepancies, and ensure accurate cash flow tracking.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Analyze financial performance",
    body: "View P&L, balance sheets, and margin analytics. Gain visibility into revenue, expenses, and profitability.",
  },
  {
    num: 5,
    icon: Users,
    title: "Process payroll & compliance",
    body: "Run payroll connected to attendance data, manage PF/ESI deductions, and ensure statutory compliance.",
  },
  {
    num: 6,
    icon: Receipt,
    title: "Generate statutory reports",
    body: "Export finalized reports for GST, income tax, and audit purposes. Maintain complete audit trails.",
  },
];

export default function AccountingWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your accounting workflow"
      description="Our accounting platform connects finance, operations, and compliance teams through a centralized system for invoicing, reconciliation, reporting, and statutory filings across all departments."
      steps={steps}
    />
  );
}
