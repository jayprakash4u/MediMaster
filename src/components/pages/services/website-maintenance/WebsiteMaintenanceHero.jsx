import ServiceHero from "@/components/ui/ServiceHero";
import { websiteMaintenanceHero } from "@/lib/service-heroes";
import { websiteMaintenanceFloatingIcons } from "@/lib/service-floating-icons";

export default function WebsiteMaintenanceHero() {
  return (
    <ServiceHero {...websiteMaintenanceHero} floatingIcons={websiteMaintenanceFloatingIcons} />
  );
}
