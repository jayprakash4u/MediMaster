import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/AboutHero";
import BusinessMetricsSection from "@/components/sections/BusinessMetricsSection";
import AboutImageSplitSection from "@/components/sections/AboutImageSplitSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import CompanyWorkingSteps from "@/components/sections/CompanyWorkingSteps";
import InnovationWheelSection from "@/components/sections/InnovationWheelSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <BusinessMetricsSection />
      <AboutImageSplitSection />
      <MissionVisionSection />
      <CompanyWorkingSteps />
      <InnovationWheelSection />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
