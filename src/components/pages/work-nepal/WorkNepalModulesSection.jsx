import ProductModulesSection from "@/components/pages/products/shared/ProductModulesSection";

const leftColumnModules = [
  "Verified Job Listings",
  "AI-Powered Job Matching",
  "Direct Recruiter Messaging",
  "Real-Time Application Tracking",
  "Resume Builder & Templates",
  "Salary Insights & Market Data",
];

const rightColumnModules = [
  "Interview Scheduling & Reminders",
  "Career Coaching & Assessments",
  "Multi-Industry Job Categories",
  "Company Culture Ratings",
  "Skill Gap Analysis",
  "Job Alert Notifications",
];

export default function WorkNepalModulesSection() {
  return (
    <ProductModulesSection
      title="Work Nepal Job Platform Modules"
      leftModules={leftColumnModules}
      rightModules={rightColumnModules}
      showVideo={false}
      align="left"
      id="worknepal-modules"
      iconClassName="text-teal-600"
    />
  );
}
