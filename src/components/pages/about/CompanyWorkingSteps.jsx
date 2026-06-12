"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const workingSteps = [
  {
    title: "Discovery & Architecture",
    description:
      "Deep dive into technical requirements, user personas, and data architectures to map clean interface flows.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Minimal Design",
    description:
      "Engineering wireframes and humanized layouts built for clarity, high conversion rates, and fast navigation pacing.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
        />
      </svg>
    ),
  },
  {
    title: "Full-Stack Development",
    description:
      "Writing ultra-performant, optimized front-end components seamlessly integrated with powerful backend frameworks.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Optimization & Launch",
    description:
      "Strict latency screening, responsive rendering diagnostics, and full functional alignment testing before delivery.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export default function CompanyWorkingSteps() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".main-hub-circle", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".step-node-item", {
        scale: 0,
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".step-content-text", {
        opacity: 0,
        x: 30,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-12 md:py-16 font-sans text-gray-600 antialiased overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="#14B8A6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="#14B8A6" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Our Process
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900 mb-12"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          How We <span className="text-teal-600">Work</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 min-h-[300px]">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
            <div className="main-hub-circle relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-teal-500/10 flex items-center justify-center p-4 shadow-[0_15px_40px_-10px_rgba(13,148,136,0.2)] border border-teal-500/20">
              <div className="w-full h-full rounded-full bg-white flex flex-col justify-center items-center text-center p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-100">
                <span className="text-xxs uppercase tracking-[0.25em] text-teal-600 font-black mb-1">
                  Our Process
                </span>
                <h3 className="text-xl font-black text-navy-950 tracking-tight leading-tight">
                  How We Work
                </h3>
                <p className="text-xxs text-gray-400 font-medium mt-2 leading-relaxed max-w-[180px]">
                  From structural assessment to high-fidelity deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-8 lg:space-y-4 relative pl-4 lg:pl-12">
            {workingSteps.map((step, idx) => (
              <div key={idx} className="flex items-start relative group">
                <div className="hidden lg:block absolute left-[36px] w-[140px] pointer-events-none">
                  {idx === 0 && (
                    <div className="h-[50px] w-full border-t-2 border-l-2 border-teal-500/30 rounded-tl-[40px] transform translate-y-9 -translate-x-[110px]" />
                  )}
                  {idx === 1 && (
                    <div className="h-[2px] w-[95px] border-t-2 border-dashed border-teal-500/40 transform translate-y-9 -translate-x-[95px]" />
                  )}
                  {idx === 2 && (
                    <div className="h-[2px] w-[95px] border-t-2 border-dashed border-teal-500/40 transform translate-y-9 -translate-x-[95px]" />
                  )}
                  {idx === 4 ||
                    (idx === workingSteps.length - 1 && (
                      <div className="h-[50px] w-full border-b-2 border-l-2 border-teal-500/30 rounded-bl-[40px] transform -translate-y-[14px] -translate-x-[110px]" />
                    ))}
                </div>

                <div className="step-node-item relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-teal-500/10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                    <div className="w-full h-full rounded-full bg-white border border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-navy-950 group-hover:text-teal-500 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                </div>

                <div className="step-content-text ml-6 sm:ml-8 pt-2 flex-1 relative max-w-md">
                  <h4 className="text-base sm:text-lg font-extrabold text-navy-950 tracking-tight mb-1 group-hover:text-teal-600 transition-colors duration-200">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                    {step.description}
                  </p>

                  <div className="w-1/3 h-[1px] bg-gradient-to-r from-teal-500/30 to-transparent mt-3 transition-all duration-300 group-hover:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
