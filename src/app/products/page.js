import ProductShowcase from "@/components/pages/products/ProductShowcase";
import { products } from "@/config/products";

export const metadata = {
  title: "Products — MediMaster",
  description: "Explore our enterprise healthcare products and solutions.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductShowcase allProducts={products} />
    </main>
  );
}
