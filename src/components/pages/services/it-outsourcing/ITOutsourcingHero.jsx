import ServiceHero from "@/components/ui/ServiceHero";
import { itOutsourcingHero } from "@/lib/service-heroes";
import { itOutsourcingFloatingIcons } from "@/lib/service-floating-icons";

export default function ITOutsourcingHero() {
  return <ServiceHero {...itOutsourcingHero} floatingIcons={itOutsourcingFloatingIcons} />;
}
