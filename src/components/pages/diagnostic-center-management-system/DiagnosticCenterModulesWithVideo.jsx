import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Test Catalog & Panel Management",
  "Sample Registration & Barcode Tracking",
  "Home Collection Scheduling",
  "Result Entry & Validation",
  "Critical Value Alerts & Escalation",
  "Branded Report Generation",
];

const rightColumnModules = [
  "Multi-Branch Lab Management",
  "NABL Compliance & QC Logs",
  "Doctor Remarks & Digital Signatures",
  "SMS/WhatsApp Report Delivery",
  "Reagent & Inventory Control",
  "Revenue Analytics Dashboard",
];

export default function DiagnosticCenterModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Diagnostic Center Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Diagnostic Center Management Software — Full Demo"
    />
  );
}
