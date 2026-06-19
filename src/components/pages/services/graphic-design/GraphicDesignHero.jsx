import ServiceHero from "@/components/ui/ServiceHero";
import { graphicDesignHero } from "@/config/heroes/service";
import { graphicDesignFloatingIcons } from "@/config/heroes/floating-icons";

export default function GraphicDesignHero() {
  return <ServiceHero {...graphicDesignHero} floatingIcons={graphicDesignFloatingIcons} />;
}
