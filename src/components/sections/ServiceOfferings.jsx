"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicePoints = [
  {
    title: "Cloud-based HMS",
    description: "Simple yet comprehensive — no server setup needed.",
    icon: (
      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 003 15z" />
    ),
  },
  {
    title: "Browser-only access",
    description: "Zero installation. Works from any browser instantly.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "Multi-lab & pharmacy",
    description: "Built for pathology, radiology, and independent pharmacies.",
    icon: (
      <>
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        <path d="M9 12h6M12 9v6" />
      </>
    ),
  },
  {
    title: "Android & iOS apps",
    description: "Native apps for phones, tablets, and iPads.",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  {
    title: "Custom invoicing",
    description: "Print reports & invoices with your own branding.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </>
    ),
  },
  {
    title: "Multi-branch management",
    description: "Manage all branches remotely from anywhere in the world.",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: "Patient reports",
    description: "Detailed prescriptions with customizable printing options.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M9 13h6M9 17h4M14 2v6h6" />
      </>
    ),
  },
  {
    title: "Client relations",
    description: "Simplified interactions that boost customer satisfaction.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    title: "Business analytics",
    description: "Track staff performance, trends, and forecasts on-demand.",
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
  },
  {
    title: "Automated SMS",
    description: "Auto-communication at every step of the healthcare process.",
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  },
];

export default function ServiceOfferings() {
  const sectionRef = useRef(null);
  const imgContainerRef = useRef(null);
  const imgInnerRef = useRef(null);
  const scrollTween = useRef(null);
  const retryCount = useRef(0);

  const startAutoScroll = () => {
    if (!imgContainerRef.current || !imgInnerRef.current) return;
    const container = imgContainerRef.current;
    const inner = imgInnerRef.current;
    const overflow = inner.scrollHeight - container.clientHeight;
    if (overflow <= 10) {
      if (retryCount.current < 8) {
        retryCount.current += 1;
        window.setTimeout(startAutoScroll, 250);
      }
      return;
    }
    retryCount.current = 0;
    if (scrollTween.current) scrollTween.current.kill();
    scrollTween.current = gsap.to(inner, {
      y: -Math.abs(overflow),
      duration: Math.min(Math.max(0.6 + overflow / 800, 0.6), 5),
      ease: "power2.out",
      overwrite: true,
    });
  };

  const resetAutoScroll = () => {
    if (scrollTween.current) scrollTween.current.kill();
    if (imgInnerRef.current) gsap.set(imgInnerRef.current, { y: 0 });
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 20%",
        onEnter: startAutoScroll,
        onEnterBack: startAutoScroll,
        onLeave: resetAutoScroll,
        onLeaveBack: resetAutoScroll,
      });
    }, sectionRef);
    return () => {
      ctx.revert();
      resetAutoScroll();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-teal-500 font-bold text-[11px] tracking-widest uppercase block mb-3">
            What we offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Software products &amp;{" "}
            <span className="text-teal-500">service offerings</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
            Everything your healthcare facility needs — from cloud
            infrastructure to mobile apps — in one unified platform.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — feature grid + CTA */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {servicePoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 rounded-xl px-4 py-3.5 transition-all duration-150 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-[15px] h-[15px] text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      {pt.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-600 text-slate-800 leading-tight mb-0.5">
                      {pt.title}
                    </p>
                    <p className="text-[11.5px] text-slate-500 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="/learn-more"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors duration-150"
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 18l6-6-6-6"
                  />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="text-[13px] font-semibold text-teal-500 border-b border-teal-200 pb-px hover:text-teal-600 hover:border-teal-400 transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right — screenshot card */}
          <div>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="h-[3px] w-full bg-teal-400" />
              <div
                ref={imgContainerRef}
                className="h-[380px] bg-slate-50 overflow-hidden relative"
              >
                <div ref={imgInnerRef} className="w-full">
                  <Image
                    src="/medimaster.png"
                    alt="MediMaster Platform Screenshot"
                    width={920}
                    height={2000}
                    className="object-contain w-full"
                    priority
                    onLoad={() => startAutoScroll()}
                  />
                </div>
              </div>
              <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-[12px] text-slate-500">
                    Live cloud platform
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-0.5">
                  v3.0 · 2025
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 003 15z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-800">
                  100% cloud — no installation
                </p>
                <p className="text-[11.5px] text-slate-400">
                  Any browser, any device, anywhere in the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
