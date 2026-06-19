"use client";

import WebsiteDevHero from "@/components/pages/services/website-development/WebsiteDevHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import WebsiteTypesSection from "@/components/pages/services/website-development/WebsiteTypesSection";
import WebDevRoadmap from "@/components/pages/services/website-development/WebDevRoadmap";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <WebsiteDevHero />
      <ServiceDetailLayout
        title="Website Development Services"
        description="At Medimaster, we offer comprehensive website development services designed to create dynamic, user-friendly, and visually appealing websites that meet your healthcare business needs. In a digital-first world, having a robust online presence is essential for success. Our expert team utilizes the latest technologies and best practices to deliver tailored solutions that enhance user experience and drive engagement."
        imageSrc="/services/shared/website-development-detail.jpg"
        imageAlt="Website Development Service"
        activeHref="/services/website-development"
      />
      <WebsiteTypesSection />
      <WebDevRoadmap />
    </>
  );
}
