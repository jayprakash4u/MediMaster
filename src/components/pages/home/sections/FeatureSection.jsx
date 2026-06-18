"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Development",
    desc: "Highly functional & visually appealing websites tailored to capture attention and scale seamlessly.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "App Development",
    desc: "Innovative and responsive cross-platform mobile apps engineered for fluid interaction.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 002-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "System/Software Dev",
    desc: "Enterprise-grade automation systems and backend software tailored to optimize operations.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Engineering",
    desc: "Polished user experience wireframes and user-centric flows engineered for effortless clarity.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10m-5-5h10" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    desc: "Data-driven organic architecture layout modifications to elevate domain visibility and capture leads.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Premium Email Hosting",
    desc: "Secure, custom-domain corporate mailing infrastructure to protect business communication pipelines.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Scalable Web Hosting",
    desc: "High-performance enterprise environments delivering low latency and verified uptime execution.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Modern Web Design",
    desc: "Minimalist, responsive web canvases mapped thoughtfully around established identity guidelines.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
];

export default function FeatureSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        gsap.from(cardsRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? "top 85%" : "top 72%", // Fires earlier on small phone screens
            toggleActions: "play none none reverse",
          },
          y: isMobile ? 20 : 30, // Subtle lift effect on mobile viewport execution
          duration: isMobile ? 0.5 : 0.8,
          stagger: isMobile ? 0.05 : 0.08,
          ease: "power2.out",
        });
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF9F6] py-16 md:py-28 px-6 sm:px-12 lg:px-16 font-sans antialiased overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- SECTION INTRO HEADER --- */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              Capabilities
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Digital Architecture Built For <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Sustainable Growth
            </span>
          </h2>
        </div>

        {/* --- HIGH-END MINIMALIST CARD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {services.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative rounded-2xl p-6 sm:p-7 bg-white border-2 border-slate-200 transition-all duration-300 ease-in-out flex flex-col justify-between hover:shadow-xl hover:shadow-teal-100/50"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 sm:group-hover:bg-teal-500 sm:group-hover:border-teal-500 sm:group-hover:text-white sm:group-hover:scale-105 shadow-sm">
                  <span className="sm:group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3
                    className="text-lg font-extrabold tracking-tight text-slate-900 transition-colors duration-200"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-600 transition-colors duration-300">
                <span>View Details</span>
                <svg
                  className="w-3.5 h-3.5 transform transition-all duration-300 sm:group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
