"use client";

import Footer from "@/components/layout/Footer";
import ITOutsourcingHero from "@/components/pages/services/it-outsourcing/ITOutsourcingHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import ITOutsourcingTypesSection from "@/components/pages/services/it-outsourcing/ITOutsourcingTypesSection";

export default function ITOutsourcingPage() {
  return (
    <>
      <ITOutsourcingHero />
      <ServiceDetailLayout
        title="IT Outsourcing"
        description="Leverage our end-to-end IT outsourcing services to reduce costs, improve efficiency, and focus on your core business. From infrastructure management to dedicated support teams, we handle your technology needs so you can scale with confidence."
        imageSrc="/services/IT%20Outsourcing/layoutimg.png"
        imageAlt="IT Outsourcing"
        activeHref="/services/it-outsourcing"
      />
      <ITOutsourcingTypesSection />
      <Footer />
    </>
  );
}
