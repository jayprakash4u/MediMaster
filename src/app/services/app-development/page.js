"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import AppDevelopmentHero from "@/components/sections/AppDevelopmentHero";
import AppDevelopmentTypesSection from "@/components/sections/AppDevelopmentTypesSection";
import AppDevRoadmap from "@/components/sections/AppDevRoadmap";

export default function AppDevelopmentPage() {
  return (
    <>
      <AppDevelopmentHero />
      <ServiceDetailLayout
        title="APP DEVELOPMENT"
        description="Build powerful, scalable mobile applications that engage users and drive business growth. From concept to deployment across iOS and Android platforms, we create seamless, high-performance apps tailored to your unique requirements."
        imageSrc="/medimaster service/web development.png"
        imageAlt="App Development"
        activeHref="/services/app-development"
      />
      <AppDevelopmentTypesSection />
      <AppDevRoadmap />
      <Footer />
    </>
  );
}