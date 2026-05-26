import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import MetricsCounterSection from "@/components/sections/MetricsCounterSection";
import ServiceOfferings from "@/components/sections/ServiceOfferings";
import HealthcareServicesSlider from "@/components/sections/HealthcareServicesSlider";
import IndustryFocusSection from "@/components/sections/IndustryFocusSection";
import FeatureSection from "@/components/sections/FeatureSection";
import ExploreProducts from "@/components/sections/ExploreProducts";
import Testimonials from "@/components/sections/Testimonials";
import HealthcareIcons from "@/components/sections/HealthcareIcons";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function HomePage() {
  return (
    <>
      <main className="pb-20 md:pb-0">
        <Hero />
        <TechStack />
        <MetricsCounterSection />
        <ServiceOfferings />
        <HealthcareServicesSlider />
        <IndustryFocusSection />
        <FeatureSection />
        <ExploreProducts />
        <Testimonials />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
