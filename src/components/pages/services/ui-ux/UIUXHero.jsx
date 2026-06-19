import ServiceHero from "@/components/ui/ServiceHero";
import { uiUxHero } from "@/lib/service-heroes";
import { uiUxFloatingIcons } from "@/lib/service-floating-icons";

export default function UIUXHero() {
  return <ServiceHero {...uiUxHero} floatingIcons={uiUxFloatingIcons} />;
}
