"use client";

import EcommerceHero from "@/components/pages/services/ecommerce-solution/EcommerceHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import EcommerceTypesSection from "@/components/pages/services/ecommerce-solution/EcommerceTypesSection";

export default function EcommerceSolutionPage() {
  return (
    <>
      <EcommerceHero />
      <ServiceDetailLayout
        title="E-COMMERCE SOLUTION SERVICES"
        description="Build and scale your online store with our comprehensive e-commerce solutions. From custom development to multi-vendor marketplaces, we deliver secure, scalable platforms that drive sales and growth."
        imageSrc="/services/Ecommerce/layouimage.png"
        imageAlt="E-Commerce Solution"
        activeHref="/services/ecommerce-solution"
      />
      <EcommerceTypesSection />
    </>
  );
}
