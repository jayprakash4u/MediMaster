"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP outside the component to prevent re-registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    name: "MediMaster",
    tag: "Hospital ERP",
    description:
      "Enterprise-grade Hospital, Pharmacy & Pathology management orchestrated in one ecosystem.",
    stats: "200+ Modules",
    iconColor: "#0D9488",
  },
  {
    name: "Cutis Path Lab",
    tag: "Diagnostics",
    description:
      "LIMS-compliant laboratory automation. Precision tracking from sample collection to digital report.",
    stats: "Real-time Sync",
    iconColor: "#1E1B4B",
  },
  {
    name: "MediFit",
    tag: "Wellness",
    description:
      "Bridging the gap between clinical data and patient wellness through predictive health analytics.",
    stats: "AI Insights",
    iconColor: "#0891B2",
  },
];

export default function ExploreProducts() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Kill any existing triggers to prevent memory leaks or double-renders
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.fromTo(
        ".product-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // Starts animation earlier
          },
        },
      );

      // 2. Cards Reveal - Using fromTo for absolute visibility
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="product-header mb-16 space-y-4 opacity-0">
          {" "}
          {/* Start at 0 for GSAP */}
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-teal-500"></div>
            <span className="text-teal-600 font-bold tracking-[0.2em] text-[10px] uppercase">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            Next-Generation <br />
            <span className="font-bold">Medical Infrastructure.</span>
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group opacity-0 bg-slate-50 border border-slate-100 rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 hover:bg-white hover:border-teal-500/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  {/* Modern Minimal Icon Placeholder */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <div
                      className="w-6 h-6 rounded-full border-4"
                      style={{ borderColor: product.iconColor }}
                    />
                  </div>
                  <span className="text-[9px] font-black py-1 px-3 bg-slate-200/50 text-slate-600 rounded-full uppercase tracking-widest">
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-[11px] font-bold text-teal-600 uppercase tracking-tight">
                  {product.stats}
                </span>

                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-teal-600 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
