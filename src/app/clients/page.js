import ClientsHero from "@/components/pages/clients/ClientsHero";
import ClientsGrid from "@/components/pages/clients/ClientsGrid";
import CityUserMap from "@/components/pages/clients/CityUserMap";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientsGrid />
      <CityUserMap />
    </>
  );
}
