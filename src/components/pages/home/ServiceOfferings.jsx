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

  const handleMouseEnter = () => {
    if (!imgContainerRef.current || !imgInnerRef.current) return;
    const container = imgContainerRef.current;
    const inner = imgInnerRef.current;
    const overflow = inner.scrollHeight - container.clientHeight;
    if (overflow <= 10) return;
    if (scrollTween.current) scrollTween.current.kill();
    scrollTween.current = gsap.to(inner, {
      y: -Math.abs(overflow),
      duration: Math.min(Math.max(0.6 + overflow / 800, 0.6), 5),
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    if (scrollTween.current) scrollTween.current.kill();
    if (imgInnerRef.current) gsap.to(imgInnerRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: true,
    });
  };

  useEffect(() => {
    return () => {
      if (scrollTween.current) scrollTween.current.kill();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // No scroll-triggered auto-scroll; image only animates on hover
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              What We Offer
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Software products &amp; <span style={{ color: "#14B8A6" }}>service offerings</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — feature grid + CTA */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {servicePoints.map((pt, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "12px",
                      padding: "16px",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                      boxShadow: "0 1px 3px rgba(16,24,40,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#14B8A6";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(20,184,166,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(16,24,40,0.06)";
                    }}
                  >
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#F0FDFE",
                      border: "1px solid #CCFDF5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <svg
                        className="w-4 h-4"
                        style={{ color: "#14B8A6" }}
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
                      <p style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#0F172A",
                        lineHeight: "1.4",
                        marginBottom: "2px",
                      }}>
                        {pt.title}
                      </p>
                      <p style={{
                        fontSize: "12px",
                        color: "#64748B",
                        lineHeight: "1.6",
                      }}>
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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div ref={imgInnerRef} className="w-full">
                  <Image
                    src="/home/logo.png"
                    alt="MediMaster Platform Screenshot"
                    width={920}
                    height={2000}
                    className="object-contain w-full"
                    priority
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
