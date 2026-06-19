import ProductHero from "@/components/ui/ProductHero";
import SupportTicketingOrbit from "@/components/pages/support-ticketing-system/SupportTicketingOrbit";
import { supportTicketingHero } from "@/lib/product-heroes";

export default function SupportTicketingHero() {
  return <ProductHero {...supportTicketingHero} visual={<SupportTicketingOrbit />} />;
}
