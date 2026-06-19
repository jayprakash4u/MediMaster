"use client";

import DigitalMarketingHero from "@/components/pages/services/digital-marketing/DigitalMarketingHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import DigitalMarketingTypesSection from "@/components/pages/services/digital-marketing/DigitalMarketingTypesSection";

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingHero />
      <ServiceDetailLayout
        title="DIGITAL MARKETING"
        description="Drive growth and maximize your online presence with our full-spectrum digital marketing services. From SEO and social media to paid ads, email campaigns, and analytics, we build data-driven strategies that deliver measurable results for your business."
        imageSrc="/services/digital-marketing/d1.jpg"
        imageAlt="Digital Marketing"
        activeHref="/services/digital-marketing"
      />
      <DigitalMarketingTypesSection />
    </>
  );
}
