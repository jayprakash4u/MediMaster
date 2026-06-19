import MarketingHero from "@/components/ui/MarketingHero";
import { clientsHero } from "@/lib/marketing-heroes";

export default function ClientsHero() {
  return <MarketingHero {...clientsHero} />;
}
