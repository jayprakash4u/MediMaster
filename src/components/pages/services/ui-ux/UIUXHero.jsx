import ServiceHero from "@/components/ui/ServiceHero";
import { uiUxHero } from "@/config/heroes/service";
import { uiUxFloatingIcons } from "@/config/heroes/floating-icons";

export default function UIUXHero() {
  return <ServiceHero {...uiUxHero} floatingIcons={uiUxFloatingIcons} />;
}
