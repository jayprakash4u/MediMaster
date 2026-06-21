"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HEADING } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  {
    value: 80,
    suffix: "+",
    label: "Team Members",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    value: 7,
    suffix: "+",
    label: "Years Of Experience",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    value: 400,
    suffix: "+",
    label: "Happy Clients",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function BusinessMetricsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".metrics-panel",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".metric-icon-wrap",
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.utils.toArray(".count-number").forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
        const obj = { count: 0 };

        gsap.to(obj, {
          count: targetValue,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.count).toString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-16 font-sans text-gray-600 antialiased"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="currentColor"
                className="text-teal-500"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-500" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Our Metrics
          </span>
        </div>

        <h2 className={`${HEADING.sectionDisplay.md} mb-12 text-navy-950`}>Success by Numbers</h2>

        <div className="metrics-panel w-full bg-teal-500/5 rounded-2xl border border-teal-500/10 shadow-[0_4px_30px_rgba(13,148,136,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 overflow-visible">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-6 py-10 relative group ${
                idx !== statsData.length - 1 ? "lg:border-r border-slate-200/50" : ""
              } ${idx % 2 === 0 ? "sm:border-r-0 lg:sm:border-r" : ""}`}
            >
              <div className="metric-icon-wrap relative -mt-16 mb-4 z-20">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-teal-400 to-cyan-500 shadow-md transform transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-teal-600 group-hover:text-teal-500 transition-colors">
                    {stat.icon}
                  </div>
                </div>
              </div>

              <div className="flex items-baseline justify-center text-navy-950 font-black tracking-tight text-3xl sm:text-4xl mb-1.5">
                <span className="count-number" data-target={stat.value}>
                  0
                </span>
                <span className="text-teal-600 ml-0.5 font-extrabold">{stat.suffix}</span>
              </div>

              <p className="text-xs sm:text-sm font-bold tracking-wide text-gray-500 group-hover:text-navy-900 transition-colors duration-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
