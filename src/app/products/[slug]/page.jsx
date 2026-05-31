import Footer from "@/components/layout/Footer";
import { products, slugify } from "@/lib/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const product = products.find((p) => slugify(p.name) === params.slug);
  if (!product) return { title: "Product" };
  return {
    title: `${product.name} — MediMaster`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => slugify(p.name) === params.slug);
  if (!product) return notFound();

  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-slate-600 mb-6">{product.tag}</p>
          <p className="text-slate-700 mb-8">{product.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Key stats</h3>
              <p className="text-teal-600 font-bold">{product.stats}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Integrations</h3>
              <p className="text-slate-600">EHR, HL7, FHIR, Payment Gateways</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
