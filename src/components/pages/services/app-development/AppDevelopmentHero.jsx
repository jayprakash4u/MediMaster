import ServiceHero from "@/components/ui/ServiceHero";
import { appDevelopmentHero } from "@/lib/service-heroes";
import { appDevelopmentFloatingIcons } from "@/lib/service-floating-icons";

export default function AppDevelopmentHero() {
  return <ServiceHero {...appDevelopmentHero} floatingIcons={appDevelopmentFloatingIcons} />;
}
