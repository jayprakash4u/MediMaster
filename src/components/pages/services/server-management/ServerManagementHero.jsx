import ServiceHero from "@/components/ui/ServiceHero";
import { serverManagementHero } from "@/config/heroes/service";
import { serverManagementFloatingIcons } from "@/config/heroes/floating-icons";

export default function ServerManagementHero() {
  return <ServiceHero {...serverManagementHero} floatingIcons={serverManagementFloatingIcons} />;
}
