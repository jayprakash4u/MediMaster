import MarketingHero from "@/components/ui/MarketingHero";
import { contactHero } from "@/config/heroes/marketing";

export default function ContactHero() {
  return <MarketingHero {...contactHero} />;
}
