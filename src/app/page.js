import WelcomeSection from "@/components/pages/home/WelcomeSection";
import WhyToChooseSection from "@/components/pages/home/WhyToChooseSection";
import PharmacySection from "@/components/pages/home/PharmacySection";
import PathologySection from "@/components/pages/home/PathologySection";
import HospitalSection from "@/components/pages/home/HospitalSection";
import KeyFeatures from "@/components/pages/home/KeyFeatures";
import PlatformFeatures from "@/components/pages/home/PlatformFeatures";
import HMSTrialSection from "@/components/shared/HMSTrialSection";
import Hero from "@/components/pages/home/Hero";
import ClinicHeroSection from "@/components/pages/home/ClinicHeroSection";
import TechStack from "@/components/pages/home/TechStack";
import ServiceOfferings from "@/components/pages/home/ServiceOfferings";
import AllInOneHealthcareSolution from "@/components/pages/home/AllInOneHealthcareSolution";
import PackageSection from "@/components/shared/PackageSection";
import IndustryFocusSection from "@/components/pages/home/IndustryFocusSection";
import FeatureSection from "@/components/pages/home/FeatureSection";
import Testimonials from "@/components/shared/Testimonials";
import HealthcareIcons from "@/components/pages/home/HealthcareIcons";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function HomePage() {
  return (
    <>
      <main className="pb-20 md:pb-0">
        <Hero />
        <ClinicHeroSection />
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
