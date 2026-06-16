"use client";

import React, { useEffect, useRef } from "react";
import { Check, PhoneCall, Star } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  "Streamlined patient registration & EMR management",
  "Appointment scheduling & doctor availability tracking",
  "Integrated pharmacy & prescription management",
  "Lab orders, results & diagnostic reporting",
  "Billing, insurance & claim automation",
  "Real-time dashboards & compliance-ready reports",
];

export default function ClinicHeroSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        x: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-neutral-50 py-12 sm:py-16 md:py-24 lg:py-28 font-sans antialiased overflow-hidden relative"
    >
      {/* Background Decorative Accent Ring */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-teal-50 opacity-60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ── LEFT COLUMN: CONTENT & FEATURES LIST ─────────────────────────── */}
        <div ref={leftRef} className="lg:col-span-6 space-y-6 lg:pr-6 order-2 lg:order-1">
          <div className="space-y-3">
            <h1
              className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight leading-[1.15] lg:leading-[1.12]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Smarter healthcare management <br />
              <span className="text-teal-600">starts here.</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal max-w-xl">
            A complete software suite for clinics, pharmacies, pathology labs & hospitals — digitize
            patient records, appointments, billing & reports in one secure platform built for modern
            healthcare.
          </p>

          {/* Structured Verification List Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
            {FEATURES.map((feat, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-gray-700 font-medium">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-500 shadow-inner">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              className="inline-flex items-center justify-center gap-2
                         bg-teal-600 hover:bg-teal-700 active:scale-[0.98]
                         text-white font-bold text-sm px-7 py-3.5 w-full sm:w-auto
                         rounded-md shadow-md shadow-teal-600/10 transition-all uppercase tracking-wide"
            >
              <PhoneCall className="w-4 h-4" />
              Book a Demo
            </button>
          </div>
        </div>

        {/* ── RIGHT COLUMN: ASYMMETRICAL OVERLAPPING IMAGES LAYOUT ─────────── */}
        {/* Adjusted scaling heights from mobile through desktop viewports */}
        <div
          ref={rightRef}
          className="lg:col-span-6 relative w-full max-w-lg lg:max-w-none mx-auto h-[350px] xs:h-[420px] sm:h-[500px] md:h-[550px] lg:h-[520px] xl:h-[580px] order-1 lg:order-2 mb-6 lg:mb-0"
        >
          {/* 1. Decorative Accent Frame */}
          <div className="absolute top-0 left-2 sm:left-4 w-14 h-14 sm:w-20 sm:h-20 border-t-4 border-l-4 border-teal-600 rounded-tl-2xl pointer-events-none z-0" />

          {/* 2. Background Dot Matrix Pattern */}
          <div className="absolute bottom-4 left-0 grid grid-cols-6 gap-1.5 sm:gap-2 opacity-40 z-0 select-none">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gray-400" />
            ))}
          </div>

          {/* 3. PRIMARY OVERLAPPING IMAGE (Main Dashboard View) */}
          {/* Shifted padding slightly and altered borders to look polished on mobile devices */}
          <div className="absolute top-4 left-6 sm:top-8 sm:left-12 w-[76%] h-[72%] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg bg-slate-100">
            <Image
              src="/home/doctor home img1.jpg"
              alt="Primary Healthcare Software Dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* 4. SECONDARY OVERLAPPING IMAGE (Lower right profile/interface view) */}
          <div className="absolute bottom-6 right-2 sm:bottom-12 sm:right-4 w-[54%] h-[52%] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-neutral-50 shadow-xl bg-slate-200">
            <Image
              src="/home/description.png"
              alt="Secondary Interface View"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
              priority
            />
          </div>

          {/* 5. FLOATING ALL-IN-ONE OVERLAY BADGE */}
          {/* Reduced component and font layout structure cleanly for narrower screens */}
          <div className="absolute bottom-10 left-2 sm:bottom-16 sm:left-6 bg-[#0F1F4D] text-white rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-5 sm:py-4 shadow-xl z-10 flex items-center gap-2.5 sm:gap-4 select-none">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
              🏥
            </div>
            <div>
              <p className="text-sm sm:text-lg font-black leading-none tracking-tight">
                All-in-One
              </p>
              <span className="text-xxs sm:text-xxs opacity-75 mt-0.5 sm:mt-1 leading-tight font-medium uppercase tracking-wider">
                Healthcare <br /> Software Suite
              </span>
            </div>
          </div>

          {/* 6. FLOATING RATING BADGE */}
          {/* Scaled dimensions from w-18 to w-26 to prevent overlapping image textures on mobile devices */}
          <div className="absolute top-[18%] right-[4%] sm:top-[28%] sm:right-[16%] transform translate-x-1/4 sm:translate-x-1/2 z-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 p-0.5 shadow-xl flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[14px] sm:rounded-[22px] flex flex-col items-center justify-center text-center p-1.5 sm:p-2 select-none">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md bg-teal-50 flex items-center justify-center mb-0.5 sm:mb-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 fill-teal-600" />
                </div>
                <span className="text-xs sm:text-base font-black tracking-tight text-slate-900 leading-none">
                  4.9 / 5
                </span>
                <span className="text-xxs sm:text-xxs font-extrabold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                  User Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
