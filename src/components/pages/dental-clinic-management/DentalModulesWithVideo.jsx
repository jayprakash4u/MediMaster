import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Patient Registration & Records",
  "Appointment Scheduling & Reminders",
  "Digital Tooth Charting",
  "Treatment Planning & History",
  "Dental Procedures & ICD Codes",
  "Billing & Insurance Claims",
];

const rightColumnModules = [
  "Supply & Inventory Management",
  "Lab Case & Case Tracking",
  "Staff Management & Scheduling",
  "Patient Communication Portal",
  "Analytics & Revenue Reports",
  "Multi-Clinic Branch Support",
];

export default function DentalModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Dental Clinic Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Dental Clinic Management Software — Full Demo"
    />
  );
}
