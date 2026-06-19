import ServiceHero from "@/components/ui/ServiceHero";
import { systemSoftwareHero } from "@/lib/service-heroes";
import { systemSoftwareFloatingIcons } from "@/lib/service-floating-icons";

export default function SystemSoftwareHero() {
  return <ServiceHero {...systemSoftwareHero} floatingIcons={systemSoftwareFloatingIcons} />;
}
