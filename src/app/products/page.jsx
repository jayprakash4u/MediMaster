import Footer from "@/components/layout/Footer";
import ProductShowcase from "@/components/pages/products/ProductShowcase";
import { products } from "@/lib/products";
import { HEADING, FONT_FAMILY, COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

export const metadata = {
  title: "Products — MediMaster",
  description: "Explore our enterprise healthcare products and solutions.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className={`${HEADING.h1} text-slate-900`} style={{ fontFamily: FONT_FAMILY.display }}>
            Our Products
          </h1>
          <p className={`${COMPONENT_STYLES.bodyText} max-w-2xl mb-8`}>
            Explore the suite of products we deliver for hospitals, labs and
            wellness teams. Click any product to see details and integrations.
          </p>
        </div>
      </section>

      {/* Showcase all products in alternating sections */}
      {products.map((p, i) => (
        <ProductShowcase key={p.name} product={p} index={i} />
      ))}

      <Footer />
    </main>
  );
}
