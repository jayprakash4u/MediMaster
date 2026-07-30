"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    name: "Hospital Management",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="10" width="40" height="27" rx="5" />
        <rect x="14" y="18" width="8" height="7" rx="1" />
        <rect x="32" y="18" width="8" height="7" rx="1" />
        <rect x="20" y="26" width="14" height="11" rx="1" />
        <line x1="27" y1="5" x2="27" y2="10" />
        <line x1="21" y1="7.5" x2="33" y2="7.5" />
      </svg>
    ),
    subtitle: "Hospital ERP",
  },
  {
    name: "Patient Portal",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 44 Q8 30 27 30 Q46 30 46 44" />
        <circle cx="27" cy="15" r="8" />
        <path d="M21 20 Q27 14 33 20 Q33 26 27 28 Q21 26 21 20Z" />
      </svg>
    ),
    subtitle: "Patient Experience",
  },
  {
    name: "E-Prescription",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="9" y="5" width="36" height="44" rx="4" />
        <text
          x="18"
          y="28"
          style={{
            fontSize: 14,
            fontWeight: 700,
            fill: "currentColor",
            fontFamily: "serif",
          }}
        >
          Rx
        </text>
        <line x1="15" y1="34" x2="39" y2="34" />
        <line x1="15" y1="12" x2="33" y2="12" />
      </svg>
    ),
    subtitle: "Digital Pharmacy",
  },
  {
    name: "Appointment Booking",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="10" width="40" height="36" rx="4" />
        <line x1="7" y1="18" x2="47" y2="18" />
        <line x1="15" y1="5" x2="15" y2="14" />
        <line x1="39" y1="5" x2="39" y2="14" />
        <polyline points="16,35 22,42 36,29" />
      </svg>
    ),
    subtitle: "Scheduling",
  },
  {
    name: "Telemedicine",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="14" width="30" height="22" rx="4" />
        <polyline points="34,19 49,12 49,28 34,23" />
        <circle cx="16" cy="25" r="3" fill="currentColor" />
      </svg>
    ),
    subtitle: "Virtual Care",
  },
  {
    name: "Analytics Dashboard",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="30" width="8" height="16" rx="2" />
        <rect x="23" y="18" width="8" height="28" rx="2" />
        <rect x="38" y="10" width="8" height="36" rx="2" />
        <polyline points="6,18 14,12 22,20 36,6 48,12" />
      </svg>
    ),
    subtitle: "Data & Insights",
  },
  {
    name: "Data Migration",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <ellipse cx="27" cy="12" rx="16" ry="5" />
        <path d="M11 12 Q11 24 27 24 Q43 24 43 12" />
        <path d="M11 19 Q11 30 27 30 Q43 30 43 19" />
        <line x1="27" y1="34" x2="27" y2="50" />
        <polyline points="20,43 27,50 34,43" />
      </svg>
    ),
    subtitle: "System Integration",
  },
  {
    name: "Medical Websites",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="5" y="8" width="44" height="30" rx="3" />
        <line x1="27" y1="38" x2="27" y2="48" />
        <line x1="15" y1="48" x2="39" y2="48" />
        <line x1="5" y1="15" x2="49" y2="15" />
      </svg>
    ),
    subtitle: "Web Development",
  },
  {
    name: "Responsive Sites",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <rect x="5" y="10" width="33" height="22" rx="2" />
        <rect x="40" y="14" width="9" height="17" rx="2" />
        <line x1="41" y1="23" x2="49" y2="23" />
        <line x1="17" y1="35" x2="17" y2="48" />
        <line x1="5" y1="48" x2="29" y2="48" />
      </svg>
    ),
    subtitle: "Multi-Platform",
  },
  {
    name: "Doctor Portfolio",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="27" cy="16" r="8" />
        <path d="M10 48 Q10 32 27 32 Q44 32 44 48" />
        <rect x="20" y="5" width="14" height="6" rx="2" />
      </svg>
    ),
    subtitle: "Personal Branding",
  },
  {
    name: "Mobile Apps",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="15" y="4" width="24" height="46" rx="4" />
        <line x1="15" y1="11" x2="39" y2="11" />
        <line x1="15" y1="34" x2="39" y2="34" />
        <circle cx="27" cy="45" r="2" fill="currentColor" />
        <line x1="27" y1="18" x2="27" y2="30" />
        <line x1="21" y1="24" x2="33" y2="24" />
      </svg>
    ),
    subtitle: "App Development",
  },
  {
    name: "Secure Platforms",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M27 4 L47 11 L47 25 Q47 41 27 48 Q7 41 7 25 L7 11 Z" />
        <rect x="19" y="25" width="16" height="10" rx="2" />
        <path d="M21 25 Q21 17 27 17 Q33 17 33 25" />
      </svg>
    ),
    subtitle: "HIPAA Compliant",
  },
  {
    name: "Digital Marketing",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="27" cy="27" r="18" />
        <polyline points="22,20 30,27 22,34" />
        <line x1="34" y1="18" x2="34" y2="32" />
        <circle cx="27" cy="27" r="6" />
      </svg>
    ),
    subtitle: "Online Growth",
  },
  {
    name: "Medical SEO",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="21" cy="21" r="12" />
        <line x1="31" y1="31" x2="48" y2="48" />
        <line x1="21" y1="26" x2="21" y2="14" />
        <polyline points="15,19 21,12 27,19" />
      </svg>
    ),
    subtitle: "Search Optimization",
  },
  {
    name: "PPC Campaigns",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="35" cy="24" r="12" />
        <text
          x="35"
          y="29"
          textAnchor="middle"
          style={{ fontSize: 13, fontWeight: 700, fill: "currentColor" }}
        >
          $
        </text>
        <line x1="10" y1="11" x2="18" y2="19" />
        <line x1="10" y1="24" x2="20" y2="24" />
        <line x1="10" y1="37" x2="18" y2="29" />
      </svg>
    ),
    subtitle: "Paid Advertising",
  },
  {
    name: "Social Media",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="26" cy="10" r="6" />
        <circle cx="9" cy="34" r="6" />
        <circle cx="45" cy="34" r="6" />
        <line x1="18" y1="15" x2="13" y2="30" />
        <line x1="34" y1="15" x2="39" y2="30" />
        <line x1="15" y1="34" x2="39" y2="34" />
      </svg>
    ),
    subtitle: "Social Strategy",
  },
  {
    name: "Reputation Mgmt",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M27 5 L30 17 L43 17 L33 24 L37 37 L27 29 L17 37 L21 24 L11 17 L24 17 Z" />
      </svg>
    ),
    subtitle: "Online Reputation",
  },
  {
    name: "PPC Campaigns",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="35" cy="24" r="12" />
        <text
          x="35"
          y="29"
          textAnchor="middle"
          style={{ fontSize: 13, fontWeight: 700, fill: "currentColor" }}
        >
          $
        </text>
        <line x1="10" y1="11" x2="18" y2="19" />
        <line x1="10" y1="24" x2="20" y2="24" />
        <line x1="10" y1="37" x2="18" y2="29" />
      </svg>
    ),
    subtitle: "Paid Advertising",
  },
  {
    name: "Social Media",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="26" cy="10" r="6" />
        <circle cx="9" cy="34" r="6" />
        <circle cx="45" cy="34" r="6" />
        <line x1="18" y1="15" x2="13" y2="30" />
        <line x1="34" y1="15" x2="39" y2="30" />
        <line x1="15" y1="34" x2="39" y2="34" />
      </svg>
    ),
    subtitle: "Social Strategy",
  },
  {
    name: "Reputation Mgmt",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M27 5 L30 17 L43 17 L33 24 L37 37 L27 29 L17 37 L21 24 L11 17 L24 17 Z" />
      </svg>
    ),
    subtitle: "Online Reputation",
  },
  {
    name: "Patient Education",
    icon: (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        className="w-8 h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 12 Q8 6 14 6 L27 8 L40 6 Q46 6 46 12 L46 38 Q46 48 40 48 L27 45 L14 48 Q8 48 8 38 Z" />
        <line x1="27" y1="8" x2="27" y2="45" />
        <path d="M17 22 Q20 18 23 22 Q23 26 17 28 Q11 26 11 22 Q11 18 17 22Z" />
      </svg>
    ),
    subtitle: "Patient Engagement",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 76%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <SectionHeader
          align="left"
          eyebrow="Digital Services"
          title="Healthcare &"
          highlight="Technology Services"
          description="End-to-end digital services for healthcare providers — from hospital software to websites, apps, and marketing."
          className="mb-8 max-w-none sm:mb-12"
        />
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:grid-cols-4"
        >
          {SERVICES.map((svc, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="service-card group card-surface flex flex-col items-center gap-2.5 p-3 text-center hover:-translate-y-1 sm:gap-4 sm:p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-500/25 bg-teal-50 transition-all duration-300 group-hover:scale-110 group-hover:border-teal-400/50 group-hover:bg-teal-100 sm:h-14 sm:w-14 sm:rounded-2xl [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-8 sm:[&>svg]:w-8">
                {svc.icon}
              </div>
              <div>
                <p className="text-xs font-bold leading-tight text-slate-900 sm:text-sm">
                  {svc.name}
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-teal-600/70 sm:text-xxs">
                  {svc.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
