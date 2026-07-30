import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Patient Registration & Demographics",
  "Medical History & Allergy Tracking",
  "Appointment Scheduling & Reminders",
  "Visit Notes & Clinical Documentation",
  "Prescription & Medication Tracking",
  "Insurance & Eligibility Verification",
];

const rightColumnModules = [
  "Billing & Invoice Generation",
  "Payment Plans & Installments",
  "Patient Portal & Communication",
  "Lab & Radiology Integration",
  "Reports & Analytics Dashboard",
  "Multi-Location Support",
];

export default function PatientModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Patient Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Patient Management Software — Full Demo"
    />
  );
}
