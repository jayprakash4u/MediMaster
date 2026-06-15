"use client";
import Link from "next/link";
import { HEADING, FONT_FAMILY, BODY, COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

const LEFT_SIDE_PRODUCTS = [
  "MediMaster",
  "Cutis Path Lab",
  "Patient Management System",
  "Dental Clinic Management",
  "Polyclinic Management System",
  "Diagnostic Center Management System",
  "Medical Billing System",
  "Account Master",
  "Accounting Software",
];

export default function ProductShowcase({ allProducts }) {
  const leftProducts = allProducts.filter((p) => LEFT_SIDE_PRODUCTS.includes(p.name));
  const rightProducts = allProducts.filter((p) => !LEFT_SIDE_PRODUCTS.includes(p.name));

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  const ProductItem = ({ product }) => {
    const slug = slugify(product.name);
    return (
      <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
        <h3
          className={`${HEADING.h3} ${TEXT_COLOR.primary}`}
          style={{ fontFamily: FONT_FAMILY.serif }}
        >
          {product.name}
        </h3>
        <p className={`${COMPONENT_STYLES.label} text-teal-600 mt-1 mb-3`}>{product.tag}</p>
        <p className={`text-slate-600 ${BODY.small} mb-4 line-clamp-3`}>{product.description}</p>
        <ul className="list-none text-slate-700 mb-4 space-y-1">
          {product.features?.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full shrink-0 mt-1.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link
            href={`/products/${slug}`}
            className="inline-block bg-teal-600 text-white px-3 py-1.5 rounded-md font-medium hover:bg-teal-700 text-sm"
          >
            Learn More
          </Link>
          <Link
            href={`/contact?product=${slug}`}
            className="inline-block border border-slate-200 px-3 py-1.5 rounded-md text-slate-700 hover:bg-slate-50 text-sm"
          >
            Request Demo
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className={`${HEADING.h1} text-slate-900`}
            style={{ fontFamily: FONT_FAMILY.display }}
          >
            Our Products
          </h1>
          <p className={`${COMPONENT_STYLES.bodyText} max-w-2xl mb-8`}>
            Explore the suite of products we deliver for hospitals, labs and wellness teams. Click
            any product to see details and integrations.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {leftProducts.map((product) => (
                <ProductItem key={product.name} product={product} />
              ))}
            </div>
            <div className="space-y-6">
              {rightProducts.map((product) => (
                <ProductItem key={product.name} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
