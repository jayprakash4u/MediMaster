"use client";

import { ClipboardPlus, Microscope, FileText, BarChart3, Bell, ShieldCheck } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: ClipboardPlus,
    title: "Register samples & patients",
    body: "Register patient samples with unique barcodes and capture all necessary demographic and clinical information for accurate tracking.",
  },
  {
    num: 2,
    icon: Microscope,
    title: "Collect and process samples",
    body: "Track sample collection, assign test panels, and monitor processing status with real-time updates across all lab stations.",
  },
  {
    num: 3,
    icon: FileText,
    title: "Enter test results",
    body: "Record test results with automated validation against normal ranges, flag critical values, and add doctor remarks seamlessly.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Generate reports",
    body: "Create comprehensive, branded lab reports with customizable templates, digital signatures, and automated delivery to doctors.",
  },
  {
    num: 5,
    icon: Bell,
    title: "Notify critical results",
    body: "Automatically alert doctors and patients about critical findings, abnormal results, and report availability via SMS or email.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Audit & compliance",
    body: "Maintain detailed audit trails, QC logs, and accreditation-ready documentation for regulatory compliance.",
  },
];

export default function PathologyWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your pathology lab workflow"
      description="LinkHMS connects lab technicians, pathologists, and clinicians through a centralized solution for sample management, test processing, and result reporting. It ensures accuracy and efficiency across all diagnostic operations."
      steps={steps}
    />
  );
}
