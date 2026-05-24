export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "App Development", href: "/services?tab=app-development" },
      { label: "System/Software Development", href: "/services?tab=software-development" },
      { label: "UI/UX", href: "/services?tab=ui-ux" },
      { label: "Search Engine Optimization (SEO)", href: "/services?tab=seo" },
      { label: "Social Media Marketing (SMM)", href: "/services?tab=smm" },
      { label: "Graphic Design", href: "/services?tab=graphic-design" },
      { label: "Content Writing", href: "/services?tab=content-writing" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY = {
  name: "ServicesPlus",
  description: "Comprehensive professional services for all your business needs.",
};