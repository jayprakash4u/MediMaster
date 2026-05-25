import ClientsHero from "@/components/sections/ClientsHero";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function ClientsPage() {
  return (
    <>
      <main>
        <ClientsHero />
        <section id="clients-testimonials" className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Testimonials />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
