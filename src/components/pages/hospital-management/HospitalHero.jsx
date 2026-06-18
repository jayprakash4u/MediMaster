"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import HMSStatic from "@/components/pages/hospital-management/HMSOrbit";

const HIGHLIGHTS = [
  "OPD & IPD Management",
  "Pharmacy & Lab Integration",
  "Billing & Insurance",
  "Real-time Analytics",
];

const HERO_STATS = [
  { value: "500+", label: "Healthcare Facilities" },
  { value: "99.9%", label: "System Uptime" },
  { value: "24/7", label: "Expert Support" },
];

export default function HospitalHero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.9, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] overflow-hidden bg-slate-950 text-white lg:min-h-[90vh]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hospital-management/hospitalbg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_40%,rgba(20,184,166,0.25),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20 lg:min-h-[90vh]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div ref={contentRef}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                Hospital Management System
              </span>
            </div>

            <h1
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Complete Hospital{" "}
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Management
              </span>{" "}
              Solution
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Enterprise-grade HMS for OPD, IPD, pharmacy, pathology, billing, and HR — all
              orchestrated in one secure ecosystem built for modern healthcare teams.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#hms-trial"
                className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition hover:border-teal-400/50 hover:bg-white/10"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {HERO_STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div ref={visualRef} className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-teal-500/20 blur-3xl sm:h-80 sm:w-80" />
            </div>
            <div className="relative h-[360px] w-full max-w-[400px] sm:h-[400px]">
              <HMSStatic />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-12 w-full sm:h-16"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8FAFC"
            d="M0,32 C360,48 720,16 1080,32 C1260,40 1380,44 1440,32 L1440,48 L0,48 Z"
          />
        </svg>
      </div>
    </section>
  );
}
