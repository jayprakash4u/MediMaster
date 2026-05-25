"use client";

import Footer from "@/components/layout/Footer";
import SMMHero from "@/components/sections/SMMHero";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import SMMTypesSection from "@/components/sections/SMMTypesSection";
import SMMRoadmap from "@/components/sections/SMMRoadmap";

export default function SMMPage() {
  return (
    <>
      <SMMHero />
      <ServiceDetailLayout
        title="SOCIAL MEDIA MARKETING"
        description="Build your brand presence and engage with your audience across social platforms. From content creation and community management to paid advertising campaigns, we drive growth and meaningful connections for your business."
        imageSrc="/socialmedia marketing/social media m.jpg"
        imageAlt="Social Media Marketing"
        activeHref="/services/smm"
      />
      <SMMTypesSection />
      <SMMRoadmap />
      <Footer />
    </>
  );
}