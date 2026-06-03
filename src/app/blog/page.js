import BlogHero from "@/components/pages/blog/BlogHero";
import BlogGrid from "@/components/pages/blog/BlogGrid";
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
