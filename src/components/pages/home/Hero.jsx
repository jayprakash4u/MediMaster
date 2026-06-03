"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Hospitals", value: "500+" },
    { label: "Reports", value: "1M+" },
    { label: "Support", value: "24/7" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center bg-navy-950 overflow-hidden z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%), url('/home/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fluid Tech for <br />
            <span className="text-teal-400">Modern Healthcare</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
            Precision-engineered systems that move as fast as modern medicine.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"
            >
              Explore Solutions
            </Link>
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{stats[currentStat].value}</p>
                <p className="text-xs text-gray-300 uppercase tracking-wider">{stats[currentStat].label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Footer Line */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
        <svg
          className="relative block w-full h-[80px]"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <path
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
