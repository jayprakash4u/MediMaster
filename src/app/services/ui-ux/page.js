"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import UIUXHero from "@/components/pages/services/ui-ux/UIUXHero";
import UIUXTypesSection from "@/components/pages/services/ui-ux/UIUXTypesSection";
import UIUXRoadmap from "@/components/pages/services/ui-ux/UIUXRoadmap";

export default function UIUXPage() {
  return (
    <>
      <UIUXHero />
      <ServiceDetailLayout
        title="UI/UX DESIGN"
        description="Design intuitive, engaging, and user-centered digital experiences that drive conversions and delight users. From wireframes to interactive prototypes, we craft seamless interfaces that align with your business goals and user needs."
        imageSrc="/brand/ui-ux.jpg"
        imageAlt="UI/UX Design"
        activeHref="/services/ui-ux"
      />
      <UIUXTypesSection />
      <UIUXRoadmap />
      <Footer />
    </>
  );
}
