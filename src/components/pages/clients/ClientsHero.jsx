import MarketingHero from "@/components/ui/MarketingHero";
import { clientsHero } from "@/config/heroes/marketing";

export default function ClientsHero() {
  return <MarketingHero {...clientsHero} />;
}
