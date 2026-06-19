import MarketingHero from "@/components/ui/MarketingHero";
import { portfolioHero } from "@/config/heroes/marketing";

export default function PortfolioHero() {
  return <MarketingHero {...portfolioHero} />;
}
