export const CONTACT_STATS = [
  { value: "<24 hrs", label: "Response time" },
  { value: "24/7", label: "Emergency support" },
  { value: "Kathmandu", label: "Office location" },
  { value: "Nepal", label: "Nationwide service" },
];

export const CONTACT_CHANNELS = [
  {
    id: "email",
    title: "Email",
    links: [
      {
        label: "Sales",
        href: "mailto:sales@medimaster.com.np",
        value: "sales@medimaster.com.np",
      },
      {
        label: "General",
        href: "mailto:info@medimaster.com.np",
        value: "info@medimaster.com.np",
      },
    ],
  },
  {
    id: "phone",
    title: "Phone",
    links: [
      { label: "Sales", href: "tel:+9779802109001", value: "+977-9802109001" },
      { label: "Support", href: "tel:+9779851005516", value: "+977-9851005516" },
    ],
  },
  {
    id: "office",
    title: "Office",
    links: [{ label: "Address", href: "#", value: "Kathmandu, Bagmati, Nepal" }],
  },
];

export const WORKING_HOURS = [
  { days: "Sun – Fri", hours: "7:00 AM – 7:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 2:00 PM" },
  { days: "Emergency", hours: "24/7", highlight: true },
];
