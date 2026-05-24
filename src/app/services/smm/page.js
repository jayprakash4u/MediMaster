"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import SMMHero from "@/components/sections/SMMHero";

export default function SMMPage() {
  return (
    <>
      <SMMHero />
      <ServiceDetailLayout
        title="SOCIAL MEDIA MARKETING"
        description="Build your brand presence and engage with your audience across social platforms. From content creation and community management to paid advertising campaigns, we drive growth and meaningful connections for your business."
        imageSrc="/socialmediamarketing.png"
        imageAlt="Social Media Marketing"
        activeHref="/services/smm"
      />
      <Footer />
    </>
  );
}