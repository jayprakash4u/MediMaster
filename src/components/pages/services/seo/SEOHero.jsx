import ServiceHero from "@/components/ui/ServiceHero";
import { seoHero } from "@/config/heroes/service";
import { seoFloatingIcons } from "@/config/heroes/floating-icons";

export default function SEOHero() {
  return <ServiceHero {...seoHero} floatingIcons={seoFloatingIcons} />;
}
