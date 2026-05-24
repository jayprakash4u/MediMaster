"use client";

import Footer from "@/components/layout/Footer";
import WebsiteDevHero from "@/components/sections/WebsiteDevHero";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import WebsiteTypesSection from "@/components/sections/WebsiteTypesSection";
import WebDevRoadmap from "@/components/sections/WebDevRoadmap";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <WebsiteDevHero />
      <ServiceDetailLayout
        title="Website Development Services"
        description="At Medimaster, we offer comprehensive website development services designed to create dynamic, user-friendly, and visually appealing websites that meet your healthcare business needs. In a digital-first world, having a robust online presence is essential for success. Our expert team utilizes the latest technologies and best practices to deliver tailored solutions that enhance user experience and drive engagement."
        imageSrc="/medimaster service/website-development-detail.jpg"
        imageAlt="Website Development Service"
        activeHref="/services/website-development"
      />
      <WebsiteTypesSection />
      <WebDevRoadmap />
      <Footer />
    </>
  );
}