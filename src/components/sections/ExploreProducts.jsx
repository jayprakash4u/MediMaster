"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { products } from "@/lib/products";

// Register GSAP outside the component to prevent re-registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// products imported from src/lib/products.js

export default function ExploreProducts() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        cardsRef.current,
        {
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header removed — use page-level heading on /products index */}

        {/* Semantic list for products */}
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const slug = product.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={product.name}
                ref={(el) => (cardsRef.current[index] = el)}
                role="listitem"
              >
                <Link
                  href={`/products/${slug}`}
                  aria-label={`View ${product.name} details`}
                  className="group block h-full bg-slate-50 border border-slate-100 rounded-[1.25rem] p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:border-teal-500/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-4 focus:ring-teal-100"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <div
                          className="w-6 h-6 rounded-full border-4"
                          style={{ borderColor: product.iconColor }}
                        />
                      </div>

                      <span className="text-[10px] font-black py-1 px-3 bg-slate-200/50 text-slate-600 rounded-full uppercase tracking-widest">
                        {product.tag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-teal-600 uppercase tracking-tight">
                      {product.stats}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 hidden md:inline">Learn more</span>
                      <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-teal-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
