import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Front Desk",
  "OPD ( Out-Patient Department)",
  "IPD ( In-Patient Department)",
  "OT ( Operation Theatres) Management",
  "Insurance Management",
  "Facility Management",
  "Services Management",
  "Patient Management",
  "Appointment Scheduling",
  "Store Management",
  "Pharmacy Inventory & Sales Management",
  "Pregnancy Management",
];

const rightColumnModules = [
  "MLC (Medico-legal Cases)",
  "Death Report",
  "Ambulatory",
  "Pathology Labs",
  "Radiology Labs",
  "Dental Labs",
  "Account Management",
  "Payroll and Human Resource Management",
  "Patient and Staff Messaging System",
  "Business Analytics",
  "Master Data Management",
  "Application Security & Configuration",
];

export default function HMSModulesWithVideo() {
  return (
    <ProductModulesSection
      title="HMS (Hospital Management Software) Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="MediMaster Part 1 - Details of Lab Billing & Investigation"
    />
  );
}
