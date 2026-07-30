"use client";

import { HelpCircle, MessageSquare, ShieldCheck, BarChart3 } from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const steps = [
  {
    num: 1,
    icon: HelpCircle,
    title: "Customer submits a ticket",
    body: "Customer creates a support request via email, chat, WhatsApp, or portal. System auto-categorizes and prioritizes based on content and SLA rules.",
  },
  {
    num: 2,
    icon: MessageSquare,
    title: "Ticket routed to the right agent",
    body: "Intelligent routing assigns the ticket to the most available or specialized agent. Notifications sent instantly via email or in-app alerts.",
  },
  {
    num: 3,
    icon: ShieldCheck,
    title: "Agent resolves & communicates",
    body: "Agent works on the issue, updates the customer with status changes, and uses canned responses or macros for faster replies.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Analyze & improve support",
    body: "Track resolution times, CSAT scores, and agent performance. Use insights to improve processes and prevent recurring issues.",
  },
];

export default function SupportTicketingWorkflow() {
  return (
    <ProductWorkflowSection
      title="Streamline your support ticketing workflow"
      description="Our support ticketing platform connects customers, support agents, and managers through a centralized system for ticket management, routing, resolution, and continuous improvement."
      steps={steps}
    />
  );
}
