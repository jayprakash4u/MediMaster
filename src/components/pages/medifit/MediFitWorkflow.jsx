"use client";

import { Activity, HeartPulse, Users, Monitor, Video, ShieldCheck } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: Activity,
    title: "Collect health data & vitals",
    body: "Integrate wearable devices, EHR systems, and manual entry to build comprehensive health profiles with vital signs and lifestyle data.",
  },
  {
    num: 2,
    icon: HeartPulse,
    title: "AI-powered health risk scoring",
    body: "Run predictive analytics on collected data to identify health risks, flag anomalies, and generate personalized risk assessments.",
  },
  {
    num: 3,
    icon: Users,
    title: "Generate personalized care plans",
    body: "Create tailored wellness plans including diet, exercise, medication reminders, and scheduled checkups based on individual profiles.",
  },
  {
    num: 4,
    icon: Monitor,
    title: "Monitor progress & adherence",
    body: "Track patient adherence to care plans, monitor progress metrics, and send automated reminders for medications and appointments.",
  },
  {
    num: 5,
    icon: Video,
    title: "Enable telemedicine consultations",
    body: "Facilitate virtual doctor consultations, prescription management, and follow-up scheduling directly within the platform.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Generate health reports & insights",
    body: "Produce comprehensive health reports, trend analysis, and actionable insights for patients, doctors, and caregivers.",
  },
];

export default function MediFitWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your health analytics workflow"
      description="Our MediFit platform connects patients, healthcare providers, and caregivers through a centralized system for health monitoring, analytics, and proactive care management across all touchpoints."
      steps={steps}
    />
  );
}
