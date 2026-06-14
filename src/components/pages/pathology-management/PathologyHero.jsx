'use client';

import Link from "next/link";
import PathologyStatic from "@/components/pages/pathology-management/PathologyStatic";

export default function PathologyHero() {
  return (
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
            Pathology Lab Management System
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white" style={{ fontFamily: "'Georgia', serif" }}>
            Complete Pathology{" "}
            <span className="text-teal-400">Lab Management</span> Solution
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
            Enterprise-grade Pathology Lab Management with intelligent sample tracking, 
            automated reporting, and NABL compliance. Streamline operations, ensure 
            accurate diagnostics, and grow your laboratory practice.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#pathology-trial"
              className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Pathology Static Visualization Wrapper */}
        <div className="relative h-[320px] md:h-[340px] w-full flex justify-center items-center -mt-4">
          <div className="w-full max-w-[340px] h-full">
            <PathologyStatic />
          </div>
        </div>
      </div>
    </section>
  );
}
