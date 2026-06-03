"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import AppDevelopmentHero from "@/components/pages/services/app-development/AppDevelopmentHero";
import AppDevelopmentTypesSection from "@/components/pages/services/app-development/AppDevelopmentTypesSection";
import AppDevRoadmap from "@/components/pages/services/app-development/AppDevRoadmap";

export default function AppDevelopmentPage() {
  return (
    <>
      <AppDevelopmentHero />
      <ServiceDetailLayout
        title="APP DEVELOPMENT"
        description="Build powerful, scalable mobile applications that engage users and drive business growth. From concept to deployment across iOS and Android platforms, we create seamless, high-performance apps tailored to your unique requirements."
        imageSrc="/services/shared/web development.png"
        imageAlt="App Development"
        activeHref="/services/app-development"
      />
      <AppDevelopmentTypesSection />
      <AppDevRoadmap />
      <Footer />
    </>
  );
}
