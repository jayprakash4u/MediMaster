import ServiceHero from "@/components/ui/ServiceHero";
import { systemSoftwareHero } from "@/config/heroes/service";
import { systemSoftwareFloatingIcons } from "@/config/heroes/floating-icons";

export default function SystemSoftwareHero() {
  return <ServiceHero {...systemSoftwareHero} floatingIcons={systemSoftwareFloatingIcons} />;
}
