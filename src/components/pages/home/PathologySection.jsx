"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sampleTestManagement = [
  "1000+ tests & panels supported",
  "Track samples from collection to results",
  "Barcode labeling for full traceability",
  "Smart result entry with alerts & validation",
];

const reportingCompliance = [
  "Multi-branch lab management",
  "Branded, printable lab reports",
  "Home sample collection with SMS updates",
  "Audit-ready logs & compliance tracking",
  "Integrated with OPD, IPD & radiology",
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 text-teal-600 shrink-0 mt-[3px]"
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
);

export default function PathologySection() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const group1Ref = useRef(null);
  const group2Ref = useRef(null);
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

      const group1Items = itemRefs.current.slice(0, 4);
      const group2Items = itemRefs.current.slice(4, 9);

      gsap.from(group1Items, {
        scrollTrigger: {
          trigger: group1Ref.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        y: "100%",
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
      });

      gsap.from(group2Items, {
        scrollTrigger: {
          trigger: group2Ref.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        y: "100%",
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
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
              Pathology Lab Management
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Precision Lab Operations{" "}
            <span className="text-teal-600">Powered by Intelligence</span>
          </h2>

          {/* Group 1 */}
          <div className="mb-8 mt-6 group-wrapper" ref={group1Ref}>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Sample &amp; Test Management
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {sampleTestManagement.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 overflow-hidden">
                  <span ref={(el) => (itemRefs.current[i] = el)} className="reveal-mask inline-flex items-start gap-2.5 w-full">
                    <ArrowIcon />
                    <span className="text-sm lg:text-[15px] text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2 */}
          <div className="mb-8 group-wrapper" ref={group2Ref}>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Reporting &amp; Compliance
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {reportingCompliance.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 overflow-hidden">
                  <span ref={(el) => (itemRefs.current[sampleTestManagement.length + i] = el)} className="reveal-mask inline-flex items-start gap-2.5 w-full">
                    <ArrowIcon />
                    <span className="text-sm lg:text-[15px] text-slate-700 leading-relaxed">
                      {item}
                    </span>
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
          <div className="rounded-xl overflow-hidden border-2 border-teal-500 bg-slate-50">
            <Image
              src="/home/pathology-intro.jpg"
              alt="MediMaster Pathology Lab Management Interface"
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
