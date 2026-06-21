import ServicePageLayout from "@/components/pages/services/shared/ServicePageLayout";
import { websiteMaintenancePage } from "@/config/sections/service-pages";

export default function WebsiteMaintenancePage() {
  return <ServicePageLayout {...websiteMaintenancePage} />;
}
