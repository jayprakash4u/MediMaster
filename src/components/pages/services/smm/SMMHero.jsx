import ServiceHero from "@/components/ui/ServiceHero";
import { smmHero } from "@/lib/service-heroes";
import { smmFloatingIcons } from "@/lib/service-floating-icons";

export default function SMMHero() {
  return <ServiceHero {...smmHero} floatingIcons={smmFloatingIcons} />;
}
