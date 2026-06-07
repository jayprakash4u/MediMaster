import Footer from "@/components/layout/Footer";
import WorkNepalAboutSection from "@/components/pages/work-nepal/WorkNepalAboutSection";
import WorkNepalBenefitsSection from "@/components/pages/work-nepal/WorkNepalBenefitsSection";
import WorkNepalModulesSection from "@/components/pages/work-nepal/WorkNepalModulesSection";
import WorkNepalWorkflow from "@/components/pages/work-nepal/WorkNepalWorkflow";
import TopCompaniesNepal from "@/components/pages/work-nepal/TopCompaniesNepal";
import JobSeekerReviews from "@/components/pages/work-nepal/JobSeekerReviews";
import Link from "next/link";

export default function WorkNepalPage() {
  return (
    <main>
      <section className="relative bg-navy-950 py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 1) 100%), url('/home/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-teal-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Job Marketplace
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Next{" "}
              <span className="text-teal-400">Dream Job</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Nepal's trusted job platform connecting top employers with talented professionals. Explore verified listings and advance your career.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-transparent border border-slate-400 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WorkNepalAboutSection />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex flex-wrap gap-3">
          <a href="#worknepal-about" className="text-sm text-teal-600 font-medium">About</a>
          <a href="#worknepal-benefits" className="text-sm text-teal-600 font-medium">Benefits</a>
          <a href="#worknepal-modules" className="text-sm text-teal-600 font-medium">Modules</a>
          <a href="#worknepal-workflow" className="text-sm text-teal-600 font-medium">How It Works</a>
          <a href="#worknepal-top-companies" className="text-sm text-teal-600 font-medium">Top Companies</a>
          <a href="#worknepal-reviews" className="text-sm text-teal-600 font-medium">Reviews</a>
        </nav>
      </div>

      <WorkNepalBenefitsSection />
      <WorkNepalModulesSection />
      <WorkNepalWorkflow />
      <TopCompaniesNepal />
      <JobSeekerReviews />

      <Footer />
    </main>
  );
}
