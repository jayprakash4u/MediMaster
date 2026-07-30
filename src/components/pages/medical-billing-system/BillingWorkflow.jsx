"use client";

import { FileText, CreditCard, Receipt, BarChart3, Send, ShieldCheck } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: FileText,
    title: "Register patients & services",
    body: "Register patient details and capture all billable services during OPD, IPD, or lab visits.",
  },
  {
    num: 2,
    icon: CreditCard,
    title: "Generate invoices",
    body: "Create GST-compliant invoices with automated tax calculations and multi-payment channel support.",
  },
  {
    num: 3,
    icon: Receipt,
    title: "Process insurance claims",
    body: "Generate insurance and TPA claims with validation rules, authorization workflows and digital documentation.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Track collections",
    body: "Monitor real-time revenue, aging reports, and receivables with automated follow-up reminders.",
  },
  {
    num: 5,
    icon: Send,
    title: "Send alerts & notifications",
    body: "Automatically notify patients about outstanding balances and payment deadlines via SMS or email.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Audit & compliance",
    body: "Maintain detailed audit trails, QC logs, and compliance-ready documentation for financial audits.",
  },
];

export default function BillingWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your billing workflow"
      description="MediMaster connects billing staff, finance teams, and insurance providers through a centralized solution for invoice generation, claims processing, and revenue tracking. It ensures accuracy and efficiency across all billing operations."
      steps={steps}
    />
  );
}
