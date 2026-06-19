"use client";

import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import SystemSoftwareHero from "@/components/pages/services/system-software-development/SystemSoftwareHero";
import SystemSoftwareTypesSection from "@/components/pages/services/system-software-development/SystemSoftwareTypesSection";
import SystemSoftwareRoadmap from "@/components/pages/services/system-software-development/SystemSoftwareRoadmap";

export default function SystemSoftwareDevelopmentPage() {
  return (
    <>
      <SystemSoftwareHero />
      <ServiceDetailLayout
        title="SYSTEM / SOFTWARE DEVELOPMENT"
        description="At Medimaster, we engineer robust, scalable, and high-performance software systems tailored to your business needs. From desktop applications and backend services to enterprise-grade platforms and embedded solutions, our expert team delivers comprehensive software development services using cutting-edge technologies and industry best practices."
        imageSrc="/services/system-software/softwaredeveloplayout.jpg"
        imageAlt="System Software Development"
        activeHref="/services/system-software-development"
      />
      <SystemSoftwareTypesSection />
      <SystemSoftwareRoadmap />
    </>
  );
}
