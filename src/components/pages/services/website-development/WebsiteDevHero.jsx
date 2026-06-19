import ServiceHero from "@/components/ui/ServiceHero";
import { websiteDevHero } from "@/config/heroes/service";
import { websiteDevFloatingIcons } from "@/config/heroes/floating-icons";

export default function WebsiteDevHero() {
  return <ServiceHero {...websiteDevHero} floatingIcons={websiteDevFloatingIcons} />;
}
