import PortfolioHero from "@/components/pages/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/pages/portfolio/PortfolioGrid";
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
