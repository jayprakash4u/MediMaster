import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <>
      <main>
        <PortfolioHero />
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
