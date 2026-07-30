"use client";

import { Monitor, Layers, FileText, RefreshCw, Search, SlidersHorizontal } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: Monitor,
    title: "Upload pharmacy inventory",
    body: "Import a complete list of medicine and stock items into the system with a specially structured CSV/Excel file or add items within the pharmacy module.",
  },
  {
    num: 2,
    icon: Layers,
    title: "Manage medicine stock",
    body: "Track stock levels, update quantities, and manage new items to keep accurate and up-to-date medicine statuses shared with practitioners.",
  },
  {
    num: 3,
    icon: FileText,
    title: "Receive prescriptions",
    body: "Get digital prescriptions from doctors instantly transmitted to the pharmacy module, where pharmacists can view patients' prescribed medicine and stock availability.",
  },
  {
    num: 4,
    icon: RefreshCw,
    title: "Create invoices",
    body: "Generate a detailed bill for the pharmacy order based on a patient's prescription, which includes a listing of each item, its quantity, unit price, and total cost for payment processing and financial reporting.",
  },
  {
    num: 5,
    icon: Search,
    title: "Manage prescriptions",
    body: "Track and update the progress of each prescription from the moment it's received to the point it's completed. It involves real-time status monitoring across all staff.",
  },
  {
    num: 6,
    icon: SlidersHorizontal,
    title: "Control inventory stock",
    body: "Maintain optimal stock levels through accurate monitoring and timely adjustments. Sales statistics help to control required stock quantities and procurement decisions.",
  },
];

export default function PharmacyWorkflow() {
  return (
    <ProductWorkflowSection
      title="Organize your pharmacy management workflow"
      description="LinkHMS helps to connect doctors, pharmacists, and administrative staff through a centralized solution for real-time prescription processing, inventory tracking, and billing. It covers efficiency and accuracy across varying clinical and pharmacy operations."
      steps={steps}
    />
  );
}
