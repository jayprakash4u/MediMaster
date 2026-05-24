"use client";

import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import GraphicDesignHero from "@/components/sections/GraphicDesignHero";
import DesignServicesSection from "@/components/sections/DesignServicesSection";

export default function GraphicDesignPage() {
  return (
    <>
      <GraphicDesignHero />
      <ServiceDetailLayout
        title="GRAPHIC DESIGN"
        description="Create stunning visuals that communicate your brand story — from logos, brand identities, and marketing materials to UI mockups, illustrations, and print-ready designs crafted with precision and creativity."
        imageSrc="/graphic design.png"
        imageAlt="Graphic Design"
        activeHref="/services/graphic-design"
      />
      <DesignServicesSection />

      <Footer />
    </>
  );
}
