import ClientsHero from "@/components/pages/clients/ClientsHero";
import ClientsGrid from "@/components/pages/clients/ClientsGrid";
import CityUserMap from "@/components/pages/clients/CityUserMap";
import Footer from "@/components/layout/Footer";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientsGrid />
      <CityUserMap />
      <Footer />
    </>
  );
}