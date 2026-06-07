"use client";

import Footer from "@/components/layout/Footer";
import WebsiteMaintenanceHero from "@/components/pages/services/website-maintenance/WebsiteMaintenanceHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import MaintenanceTypesSection from "@/components/pages/services/website-maintenance/MaintenanceTypesSection";

export default function WebsiteMaintenancePage() {
  return (
    <>
      <WebsiteMaintenanceHero />
      <ServiceDetailLayout
        title="Website Maintenance"
        description="Keep your healthcare website secure, up-to-date, and always available. Our website maintenance service ensures reliable hosting performance, security updates, backups, and technical support so your online presence stays professional and patient-ready."
        imageSrc="/services/Website%20maintainence/mentaincne%20image.jpg"
        imageAlt="Website Maintenance"
        activeHref="/services/website-maintenance"
      />
      <MaintenanceTypesSection />
      <Footer />
    </>
  );
}
