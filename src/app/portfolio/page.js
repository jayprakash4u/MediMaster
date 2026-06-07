import GallerySection from "@/components/pages/portfolio/GallerySection";
import PortfolioSection from "@/components/pages/portfolio/PortfolioSection";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <>
      <main>
        <PortfolioSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
