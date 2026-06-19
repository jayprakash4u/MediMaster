import ServiceHero from "@/components/ui/ServiceHero";
import { websiteDevHero } from "@/lib/service-heroes";
import { websiteDevFloatingIcons } from "@/lib/service-floating-icons";

export default function WebsiteDevHero() {
  return <ServiceHero {...websiteDevHero} floatingIcons={websiteDevFloatingIcons} />;
}
