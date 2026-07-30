"use client";

import { BookOpen, Users, CalendarCheck, FileText, CreditCard, MessageSquare } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: BookOpen,
    title: "Register students & manage admissions",
    body: "Streamline student admission with digital registration, document collection, and automated class allocation based on merit and availability.",
  },
  {
    num: 2,
    icon: Users,
    title: "Assign teachers & create schedules",
    body: "Assign teachers to classes and subjects, generate timetables, and manage substitute arrangements with intelligent scheduling.",
  },
  {
    num: 3,
    icon: CalendarCheck,
    title: "Track attendance & performance",
    body: "Monitor daily attendance via biometric or manual entry, track student performance, and generate progress reports automatically.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Conduct exams & publish results",
    body: "Create exam schedules, manage grading, auto-calculate results, and publish report cards with customizable templates.",
  },
  {
    num: 5,
    icon: CreditCard,
    title: "Manage fees & payments",
    body: "Generate fee invoices, track payments, send reminders for dues, and manage scholarships or discounts with complete transparency.",
  },
  {
    num: 6,
    icon: MessageSquare,
    title: "Communicate with parents",
    body: "Send SMS and app notifications for attendance, results, events, and fee reminders. Keep parents engaged with real-time updates.",
  },
];

export default function SchoolWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your school management workflow"
      description="Our school management platform connects administrators, teachers, students, and parents through a centralized system for admissions, attendance, examinations, and communication across all departments."
      steps={steps}
    />
  );
}
