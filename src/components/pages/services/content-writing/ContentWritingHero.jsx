import ServiceHero from "@/components/ui/ServiceHero";
import { contentWritingHero } from "@/lib/service-heroes";
import { contentWritingFloatingIcons } from "@/lib/service-floating-icons";

export default function ContentWritingHero() {
  return <ServiceHero {...contentWritingHero} floatingIcons={contentWritingFloatingIcons} />;
}
