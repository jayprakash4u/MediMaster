import MarketingHero from "@/components/ui/MarketingHero";
import { blogHero } from "@/config/heroes/marketing";

export default function BlogHero() {
  return <MarketingHero {...blogHero} />;
}
