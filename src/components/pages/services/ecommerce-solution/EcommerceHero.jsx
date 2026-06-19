import ServiceHero from "@/components/ui/ServiceHero";
import { ecommerceHero } from "@/config/heroes/service";
import { ecommerceFloatingIcons } from "@/config/heroes/floating-icons";

export default function EcommerceHero() {
  return <ServiceHero {...ecommerceHero} floatingIcons={ecommerceFloatingIcons} />;
}
