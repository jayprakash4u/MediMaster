import Footer from "@/components/layout/Footer";
import ProductShowcase from "@/components/pages/products/ProductShowcase";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products — MediMaster",
  description: "Explore our enterprise healthcare products and solutions.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Our Products
          </h1>
          <p className="text-slate-600 max-w-2xl mb-8">
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
