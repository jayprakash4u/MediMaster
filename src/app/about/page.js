import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/pages/about/AboutHero";
import BusinessMetricsSection from "@/components/pages/about/BusinessMetricsSection";
import AboutImageSplitSection from "@/components/pages/about/AboutImageSplitSection";
import MissionVisionSection from "@/components/pages/about/MissionVisionSection";
import CompanyWorkingSteps from "@/components/pages/about/CompanyWorkingSteps";
import InnovationWheelSection from "@/components/pages/about/InnovationWheelSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <BusinessMetricsSection />
      <AboutImageSplitSection />
      <MissionVisionSection />
      <CompanyWorkingSteps />
      <InnovationWheelSection />
      <Footer />
    </main>
  );
}
