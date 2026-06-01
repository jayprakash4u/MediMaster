export const products = [
  {
    name: "MediMaster",
    tag: "Hospital ERP",
    description:
      "Enterprise-grade Hospital, Pharmacy & Pathology management orchestrated in one ecosystem.",
    stats: "200+ Modules",
    iconColor: "#0D9488",
    features: [
      "Simple yet comprehensive Cloud based Hospital Management Software.",
      "No hardware or software installation required. Works from your favourite browser.",
      "Designed for use in Pathology Labs, Radiology/Imaging Labs, Pharmacies which operate independently from Hospitals.",
      "Android App for Mobiles",
      "iOS App for iPhones",
      "Android App for Tablets",
      "iOS App for iPads",
      "Printed invoices, reports directly from App or website",
    ],
    cta: {
      learnMore: "/hospital-management",
      requestDemo: "/contact?product=medi-master",
    },
    image: "/products screenshot/medimaster.png",
    href: "/hospital-management",
  },
  {
    name: "Cutis Path Lab",
    tag: "Diagnostics",
    description:
      "LIMS-compliant laboratory automation. Precision tracking from sample collection to digital report.",
    stats: "Real-time Sync",
    iconColor: "#1E1B4B",
    features: [
      "Sample lifecycle tracking",
      "Automated report generation",
      "Interfaces for analyzers and LIS",
    ],
    cta: {
      learnMore: "/products/cutis-path-lab",
      requestDemo: "/contact?product=cutis-path-lab",
    },
    href: "/products/cutis-path-lab",
  },
  {
    name: "MediFit",
    tag: "Wellness",
    description:
      "Bridging the gap between clinical data and patient wellness through predictive health analytics.",
    stats: "AI Insights",
    iconColor: "#0891B2",
    features: [
      "Predictive health scoring",
      "Personalized care pathways",
      "Patient engagement portal",
    ],
    cta: {
      learnMore: "/medifit",
      requestDemo: "/contact?product=medifit",
    },
    href: "/medifit",
  },
  {
    name: "WorkNepal",
    tag: "Jobs & Hiring",
    description:
      "Employer and job-seeker platform connecting Nepal's workforce with verified opportunities and employers.",
    stats: "100k+ Listings",
    iconColor: "#F59E0B",
    features: [
      "Employer dashboards and job postings",
      "Candidate matching and filtering",
      "Resume builder and application tracking",
    ],
    cta: {
      learnMore: "/products/worknepal",
      requestDemo: "/contact?product=worknepal",
    },
    image: "/products screenshot/worknepal.png",
    href: "/products/worknepal",
  },
  {
    name: "Ramro Gadi",
    tag: "Automotive Marketplace",
    description:
      "Buy and sell vehicles with secure listings, inspection reports, and integrated financing tools.",
    stats: "Trusted Listings",
    iconColor: "#EF4444",
    features: [
      "Verified vehicle listings",
      "Secure payments & escrow",
      "Inspection reports and financing options",
    ],
    cta: {
      learnMore: "/ramro-gadi",
      requestDemo: "/contact?product=ramro-gadi",
    },
    href: "/ramro-gadi",
  },
];

export function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
