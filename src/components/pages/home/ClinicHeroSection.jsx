"use client";

import React, { useEffect, useRef } from "react";
import { Check, ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  "Streamlined patient registration & EMR management",
  "Appointment scheduling & doctor availability tracking",
  "Integrated pharmacy & prescription management",
  "Lab orders, results & diagnostic reporting",
  "Billing, insurance & claim automation",
  "Real-time dashboards & compliance-ready reports",
];

const STATS = [
  { value: "500+", label: "Clinics" },
  { value: "99.9%", label: "Uptime" },
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
      className="relative w-full overflow-hidden bg-white font-sans"
    >
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-[420px] h-[420px]
                      rounded-full bg-teal-50 opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef} className="flex flex-col gap-7">
            <div
              className="inline-flex items-center gap-2 self-start bg-teal-50 border border-teal-100
                            rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-600">
                For Healthcare &amp; Clinics
              </span>
            </div>

            <div>
              <h1
                className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Smarter healthcare management <br />
                <span className="text-teal-600">starts here.</span>
              </h1>
              <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed max-w-lg">
                A complete software suite for clinics, pharmacies, pathology labs &
                hospitals — digitize patient records, appointments, billing &
                reports in one secure platform built for modern healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-500
                                   flex items-center justify-center shadow-sm shadow-teal-200"
                  >
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <p className="text-sm text-slate-700 leading-snug">{feat}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                className="inline-flex items-center justify-center gap-2
                                 bg-teal-600 hover:bg-teal-700 active:scale-[0.98]
                                 text-white font-semibold text-sm px-7 py-3.5
                                 rounded-full shadow-lg shadow-teal-600/20 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                Book a Demo
              </button>
              <button
                className="inline-flex items-center justify-center gap-2
                                 border border-slate-300 hover:border-teal-400
                                 hover:text-teal-600 text-slate-600 font-medium
                                 text-sm px-7 py-3.5 rounded-full transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-1 border-t border-slate-100">
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
              <div className="w-px h-10 bg-slate-100" />
              <p className="text-xs text-slate-400 leading-relaxed max-w-[180px]">
                Trusted by clinics &amp; hospitals across Nepal
              </p>
            </div>
          </div>

          <div
            ref={rightRef}
            className="relative flex items-center justify-center"
          >
            <div
              className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden
                            bg-slate-100 border border-slate-200 shadow-xl shadow-slate-200/60"
            >
              <Image
                src="/home/description.png"
                alt="Healthcare Software Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div
              className="absolute -bottom-5 -left-5 bg-[#0f2460] text-white
                            rounded-2xl px-5 py-4 shadow-2xl shadow-blue-900/30 z-10
                            flex items-center gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center
                              justify-center text-2xl"
              >
                🏥
              </div>
              <div>
                <p className="text-xl font-extrabold leading-none">All-in-One</p>
                <p className="text-[10px] opacity-75 mt-1 leading-tight">
                  Healthcare <br /> Software Suite
                </p>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 bg-white border border-slate-100
                            rounded-2xl px-4 py-3 shadow-lg z-10 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-lg">
                ⭐
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900 leading-none">
                  4.9 / 5
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
