import Footer from "@/components/layout/Footer";
import WorkNepalHero from "@/components/pages/work-nepal/WorkNepalHero";
import WorkNepalAboutSection from "@/components/pages/work-nepal/WorkNepalAboutSection";
import WorkNepalBenefitsSection from "@/components/pages/work-nepal/WorkNepalBenefitsSection";
import TopCompaniesNepal from "@/components/pages/work-nepal/TopCompaniesNepal";
import WorkNepalModulesSection from "@/components/pages/work-nepal/WorkNepalModulesSection";
import WorkNepalWorkflow from "@/components/pages/work-nepal/WorkNepalWorkflow";
import JobSeekerReviews from "@/components/pages/work-nepal/JobSeekerReviews";
import Link from "next/link";

export default function WorkNepalPage() {
  return (
    <main>
      <WorkNepalHero />
      <WorkNepalAboutSection />

      <TopCompaniesNepal />

      <WorkNepalBenefitsSection />

      <WorkNepalModulesSection />

      <WorkNepalWorkflow />

      <JobSeekerReviews />

      <Footer />
    </main>
  );
}
