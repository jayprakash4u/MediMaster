import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Student Admission & Registration",
  "Class & Section Management",
  "Attendance Tracking (Biometric/RFID)",
  "Examination & Grading System",
  "Report Card Generation",
  "Homework & Assignment Management",
];

const rightColumnModules = [
  "Fee Management & Online Payments",
  "Library Management System",
  "Transport & Route Tracking",
  "Hostel & Boarding Management",
  "Parent-Teacher Communication",
  "Analytics & School Performance",
];

export default function SchoolModulesWithVideo() {
  return (
    <ProductModulesSection
      title="School Management Software Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      videoTitle="School Management Software — Full Demo"
    />
  );
}
