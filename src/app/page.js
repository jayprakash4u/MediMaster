import WhyToChooseSection from "@/components/pages/home/sections/WhyToChooseSection";
import PharmacySection from "@/components/pages/home/sections/PharmacySection";
import PathologySection from "@/components/pages/home/sections/PathologySection";
import HospitalSection from "@/components/pages/home/sections/HospitalSection";
import HMSTrialSection from "@/components/pages/home/sections/HMSTrialSection";
import Hero from "@/components/pages/home/sections/Hero";
import ClinicHeroSection from "@/components/pages/home/sections/ClinicHeroSection";
import StatsSection from "@/components/pages/home/sections/StatsSection";
import FeatureSection from "@/components/pages/home/sections/FeatureSection";
import WhyMediMaster from "@/components/pages/home/sections/WhyMediMaster";
import LatestBlogs from "@/components/pages/home/sections/LatestBlogs";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <StatsSection />
        <ClinicHeroSection />
        <PharmacySection />
        <PathologySection />
        <HospitalSection />
        <WhyMediMaster />
        <HMSTrialSection />
        <WhyToChooseSection />
      </main>
      <LatestBlogs />
      <FeatureSection />
    </>
  );
}
