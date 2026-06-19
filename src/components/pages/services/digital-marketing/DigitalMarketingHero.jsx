import ServiceHero from "@/components/ui/ServiceHero";
import { digitalMarketingHero } from "@/config/heroes/service";
import { digitalMarketingFloatingIcons } from "@/config/heroes/floating-icons";

export default function DigitalMarketingHero() {
  return <ServiceHero {...digitalMarketingHero} floatingIcons={digitalMarketingFloatingIcons} />;
}
