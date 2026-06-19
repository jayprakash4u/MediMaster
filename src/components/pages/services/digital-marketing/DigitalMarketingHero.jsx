import ServiceHero from "@/components/ui/ServiceHero";
import { digitalMarketingHero } from "@/lib/service-heroes";
import { digitalMarketingFloatingIcons } from "@/lib/service-floating-icons";

export default function DigitalMarketingHero() {
  return <ServiceHero {...digitalMarketingHero} floatingIcons={digitalMarketingFloatingIcons} />;
}
