"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import ContentWritingHero from "@/components/pages/services/content-writing/ContentWritingHero";
import ContentTypesSection from "@/components/pages/services/content-writing/ContentTypesSection";
import ContentWritingRoadmap from "@/components/pages/services/content-writing/ContentWritingRoadmap";

export default function ContentWritingPage() {
  return (
    <>
      <ContentWritingHero />
      <ServiceDetailLayout
        title="CONTENT WRITING"
        description="Engage your audience with compelling, high-quality content that drives results. From blog posts and web copy to technical documentation and marketing materials, our expert writers craft content that converts readers into customers."
        imageSrc="/services/shared/content writing.png"
        imageAlt="Content Writing"
        activeHref="/services/content-writing"
      />
      <ContentTypesSection />
      <ContentWritingRoadmap />
      <Footer />
    </>
  );
}
