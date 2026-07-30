import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { BODY, COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

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
  const products = [
    ...allProducts.filter((p) => LEFT_SIDE_PRODUCTS.includes(p.name)),
    ...allProducts.filter((p) => !LEFT_SIDE_PRODUCTS.includes(p.name)),
  ];

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="section-shell bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          as="h1"
          size="sm"
          title="Our Products"
          description="Explore the suite of products we deliver for hospitals, labs and wellness teams. Click any product to see details and integrations."
          className="mb-6 max-w-none sm:mb-8"
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-6">
          {products.map((product) => {
            const slug = slugify(product.name);

            return (
              <article
                key={product.name}
                className="card-surface-sm flex h-full flex-col p-3.5 sm:p-4"
              >
                <h3 className="card-title line-clamp-2">{product.name}</h3>
                <p className={`${COMPONENT_STYLES.label} mt-1 ${TEXT_COLOR.teal}`}>{product.tag}</p>
                <p className={`${BODY.caption} mt-2 line-clamp-2 flex-1 ${TEXT_COLOR.muted}`}>
                  {product.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {product.features?.slice(0, 2).map((feature) => (
                    <li key={feature} className="product-feature-text flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Button
                    href={`/products/${slug}`}
                    variant="primary"
                    className="w-full rounded-full px-3 py-2 text-xs sm:w-auto sm:text-sm"
                  >
                    Learn More
                  </Button>
                  <Button
                    href={`/contact?product=${slug}`}
                    variant="outline"
                    className="w-full rounded-full px-3 py-2 text-xs sm:w-auto sm:text-sm"
                  >
                    Request Demo
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
