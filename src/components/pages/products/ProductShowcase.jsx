import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

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
      <div className="card-surface p-6">
        <h3 className={`${HEADING.h3} ${TEXT_COLOR.primary}`}>{product.name}</h3>
        <p className={`${COMPONENT_STYLES.label} mt-1 mb-3 ${TEXT_COLOR.teal}`}>{product.tag}</p>
        <p className={`${BODY.small} mb-4 line-clamp-3 ${TEXT_COLOR.muted}`}>
          {product.description}
        </p>
        <ul className="mb-4 list-none space-y-1 text-slate-700">
          {product.features?.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Button href={`/products/${slug}`} variant="primary" className="px-3 py-1.5 text-sm">
            Learn More
          </Button>
          <Button
            href={`/contact?product=${slug}`}
            variant="outline"
            className="px-3 py-1.5 text-sm"
          >
            Request Demo
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="section-shell bg-gray-50">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            align="left"
            as="h1"
            title="Our Products"
            description="Explore the suite of products we deliver for hospitals, labs and wellness teams. Click any product to see details and integrations."
            className="mb-8 max-w-none"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
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
