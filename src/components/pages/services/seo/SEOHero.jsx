import ServiceHero from "@/components/ui/ServiceHero";
import { seoHero } from "@/lib/service-heroes";
import { seoFloatingIcons } from "@/lib/service-floating-icons";

export default function SEOHero() {
  return <ServiceHero {...seoHero} floatingIcons={seoFloatingIcons} />;
}
