import ServicePageLayout from "@/components/pages/services/shared/ServicePageLayout";
import { serverManagementPage } from "@/config/sections/service-pages";

export default function ServerManagementPage() {
  return <ServicePageLayout {...serverManagementPage} />;
}
