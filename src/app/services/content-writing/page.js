"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import ContentWritingHero from "@/components/sections/ContentWritingHero";

export default function ContentWritingPage() {
  return (
    <>
      <ContentWritingHero />
      <ServiceDetailLayout
        title="CONTENT WRITING"
        description="Engage your audience with compelling, high-quality content that drives results. From blog posts and web copy to technical documentation and marketing materials, our expert writers craft content that converts readers into customers."
        imageSrc="/medimaster service/content writing.png"
        imageAlt="Content Writing"
        activeHref="/services/content-writing"
      />
      <Footer />
    </>
  );
}