import WelcomeSection from "@/components/sections/WelcomeSection";
import WhyToChooseSection from "@/components/sections/WhyToChooseSection";
import PharmacySection from "@/components/sections/PharmacySection";
import PathologySection from "@/components/sections/PathologySection";
import HospitalSection from "@/components/sections/HospitalSection";
import KeyFeatures from "@/components/sections/KeyFeatures";
import PlatformFeatures from "@/components/sections/PlatformFeatures";
import HMSTrialSection from "@/components/sections/HMSTrialSection";
import Hero from "@/components/sections/Hero";
import ClinicHeroSection from "@/components/sections/ClinicHeroSection";
import TechStack from "@/components/sections/TechStack";
import ServiceOfferings from "@/components/sections/ServiceOfferings";
import AllInOneHealthcareSolution from "@/components/sections/AllInOneHealthcareSolution";
import PackageSection from "@/components/sections/PackageSection";
import IndustryFocusSection from "@/components/sections/IndustryFocusSection";
import FeatureSection from "@/components/sections/FeatureSection";
import Testimonials from "@/components/sections/Testimonials";
import HealthcareIcons from "@/components/sections/HealthcareIcons";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function HomePage() {
  return (
    <>
      <main className="pb-20 md:pb-0">
        <Hero />
        <ClinicHeroSection />
        <WelcomeSection />
        <PharmacySection />
        <PathologySection />
        <HospitalSection />
        <HMSTrialSection />
        <KeyFeatures />
        <WhyToChooseSection />
        <FeatureSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
