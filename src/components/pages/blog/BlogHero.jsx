import MarketingHero from "@/components/ui/MarketingHero";
import { blogHero } from "@/lib/marketing-heroes";

export default function BlogHero() {
  return <MarketingHero {...blogHero} />;
}
