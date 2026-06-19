import ServiceHero from "@/components/ui/ServiceHero";
import { itOutsourcingHero } from "@/config/heroes/service";
import { itOutsourcingFloatingIcons } from "@/config/heroes/floating-icons";

export default function ITOutsourcingHero() {
  return <ServiceHero {...itOutsourcingHero} floatingIcons={itOutsourcingFloatingIcons} />;
}
