import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Predictive Health Scoring & Risk Assessment",
  "Personalized Care Pathway Generation",
  "Real-Time Wearable Device Integration",
  "Telemedicine & Virtual Consultation Hub",
  "OPD (Out-Patient Department)",
  "IPD (In-Patient Department)",
  "Patient Management",
  "Appointment Scheduling",
  "Pharmacy Inventory & Sales Management",
];

const rightColumnModules = [
  "Family Health Dashboard & Records",
  "Medication Adherence Tracking",
  "Lifestyle & Wellness Recommendations",
  "Health Report Generation & Sharing",
  "Pathology Labs",
  "Radiology Labs",
  "Business Analytics",
  "Application Security & Configuration",
  "Patient and Staff Messaging System",
];

export default function MediFitModulesWithVideo() {
  return (
    <ProductModulesSection
      title="MediFit Platform Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="MediFit Platform — Full Demo"
    />
  );
}
