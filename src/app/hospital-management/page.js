import Footer from "@/components/layout/Footer";
import Link from "next/link";
import HMSStatic from "@/components/sections/HMSOrbit";
import HMSCrossLayout from "@/components/sections/HMSCrossLayout";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhatOurUsersSay from "@/components/sections/WhatOurUsersSay";

export default function HospitalManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-navy-950 py-16 md:py-20 overflow-visible">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 1) 100%), url('/medimasterhomehero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <span className="inline-block text-teal-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Hospital Management System
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Hospital{" "}
              <span className="text-teal-400">Management</span> Solution
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Enterprise-grade Hospital, Pharmacy & Pathology management
              orchestrated in one ecosystem. Streamline operations, enhance
              patient care, and grow your practice with intelligent automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?product=medi-master"
                className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"
              >
                Request Demo
              </Link>
              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-transparent border border-slate-400 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* HMS Static Visualization Wrapper */}
          <div className="relative h-[240px] md:h-[280px] w-full flex justify-center items-center -mt-4">
            <div className="w-full max-w-[300px] h-full">
              <HMSStatic />
            </div>
          </div>
        </div>
      </section>

      {/* HMS Cross Layout Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <HMSCrossLayout />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* What Our Users Say Section */}
      <WhatOurUsersSay />

      <Footer />
    </main>
  );
}
