"use client";

import {
  CalendarCheck,
  Stethoscope,
  ClipboardList,
  FileText,
  Receipt,
  Package,
} from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: CalendarCheck,
    title: "Book appointments across specialties",
    body: "Schedule patient visits across multiple specialties with unified calendar view and automated reminders for all departments.",
  },
  {
    num: 2,
    icon: Stethoscope,
    title: "Consult & refer patients",
    body: "Enable seamless referrals between specialists, maintain shared medical records, and coordinate care plans across departments.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Manage treatments & procedures",
    body: "Record treatments, procedures, and prescriptions with full history tracking and department-specific workflows.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Generate reports & prescriptions",
    body: "Create unified patient reports, specialist referrals, and prescriptions with customizable templates and digital signatures.",
  },
  {
    num: 5,
    icon: Receipt,
    title: "Process unified billing",
    body: "Generate consolidated invoices across specialties, process insurance claims, and track outstanding payments centrally.",
  },
  {
    num: 6,
    icon: Package,
    title: "Manage inventory & resources",
    body: "Track shared medical supplies, equipment scheduling, and resource allocation across all clinic departments.",
  },
];

export default function PolyclinicWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your polyclinic workflow"
      description="Our polyclinic management platform connects multiple specialties, staff, and patients through a centralized system for appointments, referrals, billing, and resource management across all departments."
      steps={steps}
    />
  );
}
