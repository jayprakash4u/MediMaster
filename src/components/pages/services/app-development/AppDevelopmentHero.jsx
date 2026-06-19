import ServiceHero from "@/components/ui/ServiceHero";
import { appDevelopmentHero } from "@/config/heroes/service";
import { appDevelopmentFloatingIcons } from "@/config/heroes/floating-icons";

export default function AppDevelopmentHero() {
  return <ServiceHero {...appDevelopmentHero} floatingIcons={appDevelopmentFloatingIcons} />;
}
