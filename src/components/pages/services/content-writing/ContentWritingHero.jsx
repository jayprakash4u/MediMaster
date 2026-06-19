import ServiceHero from "@/components/ui/ServiceHero";
import { contentWritingHero } from "@/config/heroes/service";
import { contentWritingFloatingIcons } from "@/config/heroes/floating-icons";

export default function ContentWritingHero() {
  return <ServiceHero {...contentWritingHero} floatingIcons={contentWritingFloatingIcons} />;
}
