import MarketingHero from "@/components/ui/MarketingHero";
import { aboutHero } from "@/lib/marketing-heroes";

export default function AboutHero() {
  return <MarketingHero {...aboutHero} />;
}
