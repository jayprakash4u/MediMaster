import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Ticket Creation & Auto-Categorization",
  "Multi-Channel Inbox (Email, Chat, WhatsApp)",
  "SLA Management & Escalation Rules",
  "Agent Assignment & Load Balancing",
  "Canned Responses & Macro Support",
  "Customer Portal & Self-Service",
];

const rightColumnModules = [
  "Real-Time Analytics & Reporting",
  "Knowledge Base & FAQ Management",
  "Team Collaboration & Internal Notes",
  "Customer Satisfaction Surveys (CSAT)",
  "Third-Party App Integrations",
  "Mobile App for Support Agents",
];

export default function SupportTicketingModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Support Ticketing System Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Support Ticketing System — Full Demo"
    />
  );
}
