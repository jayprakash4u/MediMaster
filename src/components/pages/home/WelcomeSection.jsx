"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const systemArchitecture = [
  "Simple yet comprehensive Cloud-based Hospital Management Software",
  "No hardware or software installation required (Runs directly in your favorite browser)",
  "Designed for standalone Pathology Labs, Radiology/Imaging Labs, and Pharmacies operating independently from hospitals",
  "Native multi-platform accessibility: Dedicated Apps for Android Mobiles, Android Tablets, iPhones, and iPads",
];

const managementOperations = [
  "Manage multiple hospital & clinical branches remotely from any place in the world",
  "Detailed patient prescriptions and clinical reports with completely customized brand printing",
  "Automated transactional SMS communication channels for each definitive step in the healthcare workflow",
  "Advanced business intelligence tracking to review real-time staff performance, trends, and predictive forecasts",
  "Engineered for improved customer interactions, resulting in vastly increased patient satisfaction",
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-teal-600 shrink-0 mt-[3px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageWrapRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(itemRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 lg:py-24 font-sans">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

        {/* ── LEFT — checklist content ── */}
        <div className="flex-1 min-w-0">

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              Platform Overview
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Platform Architecture &amp;{" "}
            <span className="text-teal-600">Core Capabilities</span>
          </h2>

          {/* Group 1 */}
          <div className="mb-8 mt-6">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              System &amp; Architecture
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {systemArchitecture.map((item, i) => (
                <li
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className="flex items-start gap-2.5"
                >
                  <CheckIcon />
                  <span className="text-sm lg:text-[15px] text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2 */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Management &amp; Operations
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {managementOperations.map((item, i) => (
                <li
                  key={i}
                  ref={(el) => (itemRefs.current[systemArchitecture.length + i] = el)}
                  className="flex items-start gap-2.5"
                >
                  <CheckIcon />
                  <span className="text-sm lg:text-[15px] text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 border border-teal-600 rounded-full px-5 py-2 hover:bg-teal-50 transition-colors">
            Learn more
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* ── RIGHT — static image ── */}
        <div ref={imageWrapRef} className="w-full lg:w-[420px] shrink-0">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            <Image
              src="/home/description.png"
              alt="MediMaster Platform Overview"
              width={840}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
