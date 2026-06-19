import ServiceHero from "@/components/ui/ServiceHero";
import { websiteMaintenanceHero } from "@/config/heroes/service";
import { websiteMaintenanceFloatingIcons } from "@/config/heroes/floating-icons";

export default function WebsiteMaintenanceHero() {
  return (
    <ServiceHero {...websiteMaintenanceHero} floatingIcons={websiteMaintenanceFloatingIcons} />
  );
}
