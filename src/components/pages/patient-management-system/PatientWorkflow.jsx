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
    title: "Register patients & capture history",
    body: "Register new patients with comprehensive demographics, medical history, allergies, and insurance details for complete profiles.",
  },
  {
    num: 2,
    icon: Stethoscope,
    title: "Schedule appointments & visits",
    body: "Book appointments across departments and providers with automated reminders, reducing no-shows and improving patient flow.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Conduct consultations & record notes",
    body: "Document clinical encounters with structured notes, attach images, and update treatment plans seamlessly.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Generate prescriptions & referrals",
    body: "Create electronic prescriptions, specialist referrals, and clinical reports with customizable templates and digital signatures.",
  },
  {
    num: 5,
    icon: Receipt,
    title: "Process billing & insurance",
    body: "Generate accurate invoices, verify insurance eligibility, process claims, and manage payment plans effortlessly.",
  },
  {
    num: 6,
    icon: Package,
    title: "Manage follow-ups & reviews",
    body: "Schedule follow-up appointments, track patient outcomes, and collect feedback to continuously improve care quality.",
  },
];

export default function PatientWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your patient management workflow"
      description="Our patient management platform connects front desk, clinical staff, and billing teams through a centralized system for registration, appointments, care documentation, and payment processing."
      steps={steps}
    />
  );
}
