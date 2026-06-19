export const SUPPORT_STATS = [
  { value: "24/7", label: "Support availability" },
  { value: "<1 hr", label: "Critical incidents" },
  { value: "<24 hrs", label: "General inquiries" },
  { value: "Local", label: "Nepal-based team" },
];

export const SUPPORT_CHANNELS = [
  {
    id: "email",
    title: "Email",
    description: "Send us a message anytime. We typically reply within a few hours.",
    links: [
      {
        label: "Sales",
        href: "mailto:sales@medimaster.com.np",
        value: "sales@medimaster.com.np",
      },
      {
        label: "Support",
        href: "mailto:support@medimaster.com.np",
        value: "support@medimaster.com.np",
      },
    ],
  },
  {
    id: "phone",
    title: "Phone",
    description: "Speak with our team for onboarding help or urgent assistance.",
    links: [
      { label: "Sales", href: "tel:+9779802109001", value: "+977-9802109001" },
      { label: "Support", href: "tel:+9779851005516", value: "+977-9851005516" },
    ],
  },
  {
    id: "chat",
    title: "Live Chat",
    description: "Connect instantly via Skype for quick troubleshooting and answers.",
    links: [
      {
        label: "Skype",
        href: "skype:support@medimaster.com.np?chat",
        value: "support@medimaster.com.np",
      },
    ],
    action: {
      label: "Start Chat",
      href: "skype:support@medimaster.com.np?chat",
    },
  },
];

export const SUPPORT_SLA = [
  { label: "Critical system failures", response: "Under 1 hour" },
  { label: "General support requests", response: "Within 24 hours" },
  { label: "Sales & demo inquiries", response: "Same business day" },
];
