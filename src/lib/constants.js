export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "App Development", href: "/services/app-development" },
      {
        label: "System/Software Development",
        href: "/services/system-software-development",
      },
      { label: "UI/UX", href: "/services/ui-ux" },
      { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
      { label: "Social Media Marketing (SMM)", href: "/services/smm" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Content Writing", href: "/services/content-writing" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Hospital Management", href: "/products/medi-master" },
      { label: "Ramro Gadi", href: "/products/ramro-gadi" },
      { label: "MediFit", href: "/products/medifit" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY = {
  name: "ServicesPlus",
  description:
    "Comprehensive professional services for all your business needs.",
};
