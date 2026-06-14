import Footer from "@/components/layout/Footer";
import RamroGadiBenefitsSection from "@/components/pages/ramro-gadi/RamroGadiBenefitsSection";
import RamroGadiAboutSection from "@/components/pages/ramro-gadi/RamroGadiAboutSection";
import PopularBrandsNepal from "@/components/pages/ramro-gadi/PopularBrandsNepal";
import HowItWorksSection from "@/components/pages/ramro-gadi/HowItWorksSection";
import HappyCustomersSection from "@/components/pages/ramro-gadi/HappyCustomersSection";
import Link from "next/link";
import RamroGaadiOrbit from "@/components/pages/ramro-gaadi/RamroGaadiOrbit";

const stats = [
  { value: "15K+", label: "Verified Listings" },
  { value: "5K+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "500+", label: "Verified Dealers" },
];

export default function RamroGadiPage() {
  return (
    <main>
      <section className="relative bg-navy-950 py-16 md:py-20 overflow-visible">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 1) 100%), url('/home/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <span className="inline-block text-teal-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Automotive Marketplace
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Buy & Sell Vehicles{" "}
              <span className="text-teal-400">With Confidence</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Nepal's most trusted automotive marketplace. Buy and sell vehicles
              with secure listings, certified inspection reports, and integrated
              financing tools — all in one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://ramrogaadi.com/"
                className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Ramro Gaadi Orbit Visualization */}
          <div className="relative h-[320px] md:h-[340px] w-full flex justify-center items-center -mt-4">
            <div className="w-full max-w-[340px] h-full">
              <RamroGaadiOrbit />
            </div>
          </div>
        </div>
      </section>

      <RamroGadiAboutSection />

      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-teal-500 mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PopularBrandsNepal />

      <RamroGadiBenefitsSection />

      <HowItWorksSection />

      <HappyCustomersSection />

      <Footer />
    </main>
  );
}
