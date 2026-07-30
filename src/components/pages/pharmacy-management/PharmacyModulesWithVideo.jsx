import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Stock & Inventory Management",
  "Purchase & Supplier Management",
  "Batch & Expiry Tracking",
  "Automated Billing & GST",
  "Point of Sale (POS)",
  "Sales Return & Credit Note",
];

const rightColumnModules = [
  "Multi-Store / Branch Support",
  "Daily / Monthly Sales Reports",
  "Pharmacy Store Dashboard",
  "Staff Management",
  "Customer / Patient History",
  "Medicine Category & Company Wise Reports",
];

export default function PharmacyModulesWithVideo() {
  return (
    <ProductModulesSection
      title="Pharmacy Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="Pharmacy Management Software — Full Demo"
    />
  );
}
