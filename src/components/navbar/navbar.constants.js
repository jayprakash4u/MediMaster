import { NAV_LINKS } from "@/lib/constants";

export const PRODUCTS_LEFT_COLUMN = [
  "Hospital Management",
  "Pharmacy Management",
  "Pathology Management",
  "Patient Management System",
  "Dental Clinic Management System",
  "Polyclinic Management System",
  "Diagnostic Center Management System",
  "Medical Billing Management System",
  "Accounting Software",
];

export const SERVICES_DEVELOPMENT = [
  "Website Development",
  "App Development",
  "System / Software Development",
  "E-commerce Solution",
  "UI / UX Design",
  "Graphics Designing",
  "Website Maintenance",
];

export const SERVICES_DIGITAL = [
  "Search Engine Optimization (SEO)",
  "Social Media Marketing (SMM)",
  "Digital Marketing",
  "Content Writing",
  "Server Management",
  "IT Outsourcing",
];

export const createNavbarLinks = () => [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: NAV_LINKS.find((link) => link.label === "Services")?.children || [],
  },
  {
    label: "Products",
    href: "/products",
    children: NAV_LINKS.find((link) => link.label === "Products")?.children || [],
  },
  {
    label: "Company",
    href: "#",
    children: NAV_LINKS.find((link) => link.label === "Company")?.children || [],
  },
  { label: "Support", href: "/support" },
];
