import WelcomeSection from "@/components/pages/home/sections/WelcomeSection";
import WhyToChooseSection from "@/components/pages/home/sections/WhyToChooseSection";
import PharmacySection from "@/components/pages/home/sections/PharmacySection";
import PathologySection from "@/components/pages/home/sections/PathologySection";
import HospitalSection from "@/components/pages/home/sections/HospitalSection";
import KeyFeatures from "@/components/pages/home/sections/KeyFeatures";
import PlatformFeatures from "@/components/pages/home/sections/PlatformFeatures";
import HMSTrialSection from "@/components/pages/home/sections/HMSTrialSection";
import Hero from "@/components/pages/home/sections/Hero";
import ClinicHeroSection from "@/components/pages/home/sections/ClinicHeroSection";
import StatsSection from "@/components/pages/home/sections/StatsSection";
import TechStack from "@/components/pages/home/sections/TechStack";
import ServiceOfferings from "@/components/pages/home/sections/ServiceOfferings";
import PackageSection from "@/components/shared/PackageSection";
import IndustryFocusSection from "@/components/pages/home/sections/IndustryFocusSection";
import FeatureSection from "@/components/pages/home/sections/FeatureSection";
import WhyGoodX from "@/components/pages/home/sections/WhyGoodX";
import LatestBlogs from "@/components/pages/home/sections/LatestBlogs";
import HomeTestimonials from "@/components/shared/Testimonials";
import HealthcareIcons from "@/components/pages/home/sections/HealthcareIcons";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function HomePage() {
  return (
    <>
      <main className="pb-20 md:pb-0">
        <Hero />
        <ClinicHeroSection />
        <StatsSection />
        <PharmacySection />
        <PathologySection />
        <HospitalSection />
        <WhyGoodX />
        <HMSTrialSection />
        <WhyToChooseSection />
      </main>
      <LatestBlogs />
      <FeatureSection />
      <Footer />
      <MobileBottomNav />
    </>
  );
}
