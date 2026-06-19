import ServiceHero from "@/components/ui/ServiceHero";
import { graphicDesignHero } from "@/lib/service-heroes";
import { graphicDesignFloatingIcons } from "@/lib/service-floating-icons";

export default function GraphicDesignHero() {
  return <ServiceHero {...graphicDesignHero} floatingIcons={graphicDesignFloatingIcons} />;
}
