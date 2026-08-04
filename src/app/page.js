import WhyToChooseSection from "@/components/pages/home/sections/WhyToChooseSection";
import IntegratedPlatformSection from "@/components/pages/home/sections/IntegratedPlatformSection";
import HealthcareServicesSection from "@/components/pages/home/sections/HealthcareServicesSection";
import HMSTrialSection from "@/components/pages/home/sections/HMSTrialSection";
import Hero from "@/components/pages/home/sections/Hero";
import StatsSection from "@/components/pages/home/sections/StatsSection";
import FeatureSection from "@/components/pages/home/sections/FeatureSection";
import ClientMessagesSection from "@/components/pages/home/sections/ClientMessagesSection";
import LatestBlogs from "@/components/pages/home/sections/LatestBlogs";

export default function HomePage() {
  return (
    <>
      <main className="home-medical-flow">
        <Hero />
        <StatsSection />
        <IntegratedPlatformSection />
        <ClientMessagesSection />
        <HealthcareServicesSection />
        <HMSTrialSection />
        <WhyToChooseSection />
      </main>
      <LatestBlogs />
      <FeatureSection />
    </>
  );
}
