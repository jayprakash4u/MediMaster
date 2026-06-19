import ServiceHero from "@/components/ui/ServiceHero";
import { serverManagementHero } from "@/lib/service-heroes";
import { serverManagementFloatingIcons } from "@/lib/service-floating-icons";

export default function ServerManagementHero() {
  return <ServiceHero {...serverManagementHero} floatingIcons={serverManagementFloatingIcons} />;
}
