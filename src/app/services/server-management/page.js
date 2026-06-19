"use client";

import ServerManagementHero from "@/components/pages/services/server-management/ServerManagementHero";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import ServerTypesSection from "@/components/pages/services/server-management/ServerTypesSection";

export default function ServerManagementPage() {
  return (
    <>
      <ServerManagementHero />
      <ServiceDetailLayout
        title="Server Management"
        description="End-to-end server infrastructure management — from setup and security to monitoring, backups, scaling, and DNS. We keep your systems fast, secure, and always online."
        imageSrc="/services/server-management/Server Setup & Configuration.jpg"
        imageAlt="Server Management"
        activeHref="/services/server-management"
      />
      <ServerTypesSection />
    </>
  );
}
