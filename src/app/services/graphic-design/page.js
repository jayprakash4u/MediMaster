"use client";

import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import GraphicDesignHero from "@/components/pages/services/graphic-design/GraphicDesignHero";
import DesignServicesSection from "@/components/pages/services/graphic-design/DesignServicesSection";
import GraphicDesignRoadmap from "@/components/pages/services/graphic-design/GraphicDesignRoadmap";

export default function GraphicDesignPage() {
  return (
    <>
      <GraphicDesignHero />
      <ServiceDetailLayout
        title="GRAPHIC DESIGN"
        description="Create stunning visuals that communicate your brand story — from logos, brand identities, and marketing materials to UI mockups, illustrations, and print-ready designs crafted with precision and creativity."
        imageSrc="/brand/graphic-design.png"
        imageAlt="Graphic Design"
        activeHref="/services/graphic-design"
      />
      <DesignServicesSection />
      <GraphicDesignRoadmap />
    </>
  );
}
