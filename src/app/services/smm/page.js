"use client";

import SMMHero from "@/components/pages/services/smm/SMMHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import SMMTypesSection from "@/components/pages/services/smm/SMMTypesSection";
import SMMRoadmap from "@/components/pages/services/smm/SMMRoadmap";

export default function SMMPage() {
  return (
    <>
      <SMMHero />
      <ServiceDetailLayout
        title="SOCIAL MEDIA MARKETING"
        description="Build your brand presence and engage with your audience across social platforms. From content creation and community management to paid advertising campaigns, we drive growth and meaningful connections for your business."
        imageSrc="/services/smm/social media m.jpg"
        imageAlt="Social Media Marketing"
        activeHref="/services/smm"
      />
      <SMMTypesSection />
      <SMMRoadmap />
    </>
  );
}
