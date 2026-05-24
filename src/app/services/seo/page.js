"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import SEOHero from "@/components/sections/SEOHero";

export default function SEOPage() {
  return (
    <>
      <SEOHero />
      <ServiceDetailLayout
        title="SEARCH ENGINE OPTIMIZATION"
        description="Boost your website's visibility in search results with our comprehensive SEO strategies. From keyword research and content optimization to technical SEO audits and link building, we help you rank higher and drive organic traffic to your business."
        imageSrc="/medimaster service/Search Engine Optimization (SEO).png"
        imageAlt="SEO"
        activeHref="/services/seo"
      />
      <Footer />
    </>
  );
}