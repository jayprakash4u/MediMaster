"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ECGBackground from "@/components/sections/ECGBackground";

export default function AboutHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, rotation: -14 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.1,
          ease: "back.out(1.7)",
          delay: 0.25,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[38vh] lg:min-h-[44vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white"
    >
      <ECGBackground />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18)_0,_transparent_38%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.14)_0,_transparent_45%)]" />

      <div className="relative z-10 container mx-auto px-6 py-6 lg:py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center gap-6 lg:items-start lg:text-left">
          <div
            ref={badgeRef}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-300/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          >
            <span className="text-4xl font-black text-teal-300">M</span>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-300/80">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              MediMaster
            </h1>
            <p className="max-w-3xl text-sm sm:text-base leading-7 text-slate-300">
              Transforming healthcare through precision-engineered technology
              solutions that make clinics, labs, and care providers
              future-ready.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-xl shadow-teal-400/20 transition hover:bg-teal-300"
            >
              Work with us
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <path
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            fill="#FBFCFD"
          />
        </svg>
      </div>
    </section>
  );
}
