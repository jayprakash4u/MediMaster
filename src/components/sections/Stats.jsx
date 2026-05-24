"use client";

import { useEffect, useRef } from "react";

// --- REFINED PREMIUM CUSTOM SVGS ---
const ClipboardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect
      x="8"
      y="2"
      width="8"
      height="4"
      rx="1"
      ry="1"
      className="fill-current/10"
    />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

const NetworkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
    <path d="M18 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2" />
    <circle cx="8" cy="12" r="2" className="fill-current/20" />
  </svg>
);

const ActivityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const SupportIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const metrics = [
  {
    id: "projects",
    value: "500+",
    label: "Projects Delivered",
    caption: "Successful live system deployments.",
    icon: <ClipboardIcon />,
  },
  {
    id: "partners",
    value: "100+",
    label: "Healthcare Partners",
    caption: "Trusted by medical institutions.",
    icon: <NetworkIcon />,
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "System Uptime",
    caption: "Mission-critical reliability matrix.",
    icon: <ActivityIcon />,
  },
  {
    id: "support",
    value: "24/7",
    label: "Expert Support",
    caption: "Continuous engineering oversight.",
    icon: <SupportIcon />,
  },
];

export default function Stats() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx;
    const initAnimations = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Subtle staggered fade-up for each metric node item block
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }, containerRef);
    };

    initAnimations();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-20 lg:py-28 font-sans border-y border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Subtle, Professional Structural Header Layout */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-teal-600" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-700">
              Enterprise Performance
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>
        </div>

        {/* Clean Line-Separated Stats Grid Frame */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0 border-t border-slate-100 pt-12">
          {metrics.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="group flex flex-col justify-between pl-0 pr-4 sm:pl-6 lg:pl-8 lg:pr-8 first:pl-0 border-l-0 sm:border-l sm:first:border-l-0 border-slate-100"
            >
              <div>
                {/* Micro Animated Icon Box */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-teal-600 transition-all duration-300 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:scale-105">
                  {item.icon}
                </div>

                {/* Main Stat Number */}
                <div className="mt-5 flex items-baseline text-5xl font-black tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors duration-300">
                  {item.value}
                </div>

                {/* Label Title Text Description */}
                <h3 className="mt-3 text-base font-bold text-slate-800 tracking-tight">
                  {item.label}
                </h3>
              </div>

              {/* Secondary Context Caption Paragraph */}
              <p className="mt-2 text-sm leading-relaxed text-slate-500 max-w-xs">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
