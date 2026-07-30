"use client";

import { CalendarCheck, ClipboardList, FileText, Receipt, Package } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: CalendarCheck,
    title: "Book appointments & register patients",
    body: "Schedule patient visits with automated reminders and capture complete demographic and dental history for personalized care.",
  },
  {
    num: 2,
    icon: ClipboardList,
    title: "Examine & chart treatments",
    body: "Use digital tooth charting to document findings, create visual treatment plans, and attach clinical notes for each visit.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Plan & record procedures",
    body: "Plan dental procedures with ICD codes, attach before/after images, and maintain a complete treatment history for every patient.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Generate reports & prescriptions",
    body: "Create detailed clinical reports, prescriptions, and referral letters with customizable templates and digital signatures.",
  },
  {
    num: 5,
    icon: Receipt,
    title: "Process billing & insurance",
    body: "Generate accurate invoices, process insurance claims, manage installment payments, and track outstanding dues effortlessly.",
  },
  {
    num: 6,
    icon: Package,
    title: "Manage inventory & lab orders",
    body: "Track dental materials, lab work orders, and supplier deliveries with automated stock alerts and reorder notifications.",
  },
];

export default function DentalWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your dental clinic workflow"
      description="Our dental management platform connects practitioners, staff, and patients through a centralized system for appointments, treatment management, billing, and inventory. It ensures efficiency across all clinic operations."
      steps={steps}
    />
  );
}
