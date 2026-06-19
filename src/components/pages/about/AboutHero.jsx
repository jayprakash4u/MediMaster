import MarketingHero from "@/components/ui/MarketingHero";
import { aboutHero } from "@/config/heroes/marketing";

export default function AboutHero() {
  return <MarketingHero {...aboutHero} />;
}
