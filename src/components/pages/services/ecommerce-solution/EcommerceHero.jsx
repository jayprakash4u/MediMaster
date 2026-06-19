import ServiceHero from "@/components/ui/ServiceHero";
import { ecommerceHero } from "@/lib/service-heroes";
import { ecommerceFloatingIcons } from "@/lib/service-floating-icons";

export default function EcommerceHero() {
  return <ServiceHero {...ecommerceHero} floatingIcons={ecommerceFloatingIcons} />;
}
