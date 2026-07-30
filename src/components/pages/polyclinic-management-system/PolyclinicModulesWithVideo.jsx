import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Multi-Specialty Appointment Scheduling",
  "Centralized Patient Registration & Records",
  "Department-wise Consultations & Referrals",
  "Integrated Pharmacy & Inventory",
  "Lab & Radiology Request Management",
  "Unified Billing & Insurance Claims",
];

const rightColumnModules = [
  "Staff Rostering & Resource Allocation",
  "Room & Equipment Scheduling",
  "Patient Feedback & Satisfaction Tracking",
  "Multi-Location Clinic Support",
  "Analytics & Revenue Reports",
  "HIPAA & Regulatory Compliance",
];

export default function PolyclinicModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Polyclinic Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Polyclinic Management Software — Full Demo"
    />
  );
}
