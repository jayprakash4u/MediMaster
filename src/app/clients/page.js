import ClientsHero from "@/components/pages/clients/ClientsHero";
import ClientsGrid from "@/components/pages/clients/ClientsGrid";
import CityUserMap from "@/components/pages/clients/CityUserMap";

export default function ClientsPage() {
  return (
    <main>
      <ClientsHero />
      <ClientsGrid />
      <CityUserMap />
    </main>
  );
}
