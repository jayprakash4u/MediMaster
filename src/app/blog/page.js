import BlogHero from "@/components/sections/BlogHero";
import BlogGrid from "@/components/sections/BlogGrid";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <>
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
