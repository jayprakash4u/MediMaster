import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Test Catalog & Panel Management",
  "Sample Registration & Tracking",
  "Barcode-Based Sample Handling",
  "Result Entry & Validation",
  "Report Generation & Printing",
  "Home Collection Scheduling",
];

const rightColumnModules = [
  "Multi-Lab Branch Support",
  "Doctor Remarks & Signatures",
  "Quality Control (QC) Logs",
  "NABL Compliance Reporting",
  "SMS/Email Notifications",
  "Lab Analytics Dashboard",
];

export default function PathologyModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Pathology Lab Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Pathology Lab Management Software — Full Demo"
    />
  );
}
