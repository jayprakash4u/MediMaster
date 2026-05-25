"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import UIUXHero from "@/components/sections/UIUXHero";
import UIUXTypesSection from "@/components/sections/UIUXTypesSection";
import UIUXRoadmap from "@/components/sections/UIUXRoadmap";

export default function UIUXPage() {
  return (
    <>
      <UIUXHero />
      <ServiceDetailLayout
        title="UI/UX DESIGN"
        description="Design intuitive, engaging, and user-centered digital experiences that drive conversions and delight users. From wireframes to interactive prototypes, we craft seamless interfaces that align with your business goals and user needs."
        imageSrc="/ui ux.jpg"
        imageAlt="UI/UX Design"
        activeHref="/services/ui-ux"
      />
      <UIUXTypesSection />
      <UIUXRoadmap />
      <Footer />
    </>
  );
}