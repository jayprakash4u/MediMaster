import ServiceHero from "@/components/ui/ServiceHero";
import { smmHero } from "@/config/heroes/service";
import { smmFloatingIcons } from "@/config/heroes/floating-icons";

export default function SMMHero() {
  return <ServiceHero {...smmHero} floatingIcons={smmFloatingIcons} />;
}
