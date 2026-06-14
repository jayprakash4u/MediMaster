"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const softwareTypes = [
  {
    id: 1,
    emoji: "🖥️",
    category: "Desktop Applications",
    tagline: "Native performance on every OS",
    color: "teal",
    image: "/services/system-software/desktop application.jpg",
    features: [
      "Windows, macOS, Linux support",
      "Electron & Qt frameworks",
      "Cross-platform deployment",
      "Offline-first architecture",
    ],
    examples: "Productivity tools, design software, data analysis apps",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="21" x2="22" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="18" cy="12" r="1" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "⚙️",
    category: "Backend Services",
    tagline: "Scalable server-side solutions",
    color: "aqua",
    image: "/services/system-software/backend services.jpg",
    features: [
      "REST & GraphQL APIs",
      "Microservices architecture",
      "Database integration",
      "Real-time processing",
    ],
    examples: "API services, data pipelines, authentication systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 3,
    emoji: "🏢",
    category: "Enterprise Software",
    tagline: "Enterprise-grade solutions",
    color: "navy",
    image: "/services/system-software/entripse application.jpg",
    features: [
      "ERP & CRM systems",
      "Custom workflow automation",
      "Single sign-on (SSO)",
      "Role-based access control",
    ],
    examples: "Internal tools, management systems, business platforms",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "🔧",
    category: "Embedded Systems",
    tagline: "Software for hardware devices",
    color: "teal",
    image: "/services/system-software/embeded system.jpg",
    features: [
      "IoT device programming",
      "Firmware development",
      "Real-time operating systems",
      "Hardware integration",
    ],
    examples: "IoT devices, industrial controllers, smart appliances",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 18C15.866 18 19 14.866 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 14.866 8.13401 18 12 18Z" />
        <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "🗄️",
    category: "Database Systems",
    tagline: "Data management at scale",
    color: "aqua",
    image: "/services/system-software/databse system.jpg",
    features: [
      "SQL & NoSQL databases",
      "Performance optimization",
      "Data migration & ETL",
      "Backup & recovery systems",
    ],
    examples: "Data warehouses, real-time analytics, reporting systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "🌐",
    category: "API Development",
    tagline: "Seamless integration solutions",
    color: "navy",
    image: "/services/system-software/api develpment.jpg",
    features: [
      "RESTful service design",
      "GraphQL implementations",
      "Third-party integrations",
      "Documentation & testing",
    ],
    examples: "Payment gateways, social logins, cloud services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <path d="M16 18a4 4 0 1 0-8 0" />
        <path d="M12 14V8" />
        <circle cx="12" cy="4" r="2" />
        <path d="M8 10h.01M16 10h.01" />
      </svg>
    ),
  },
];

const colorMap = {
  teal: {
    icon: "bg-teal-600/10 border-teal-600/20 text-teal-600",
    badge: "bg-teal-600/10 text-teal-600 border border-teal-600/20",
    bullet: "bg-teal-600",
    glow: "hover:shadow-[0_8px_40px_rgba(20,184,166,0.15)]",
    border: "hover:border-teal-600/40",
    tag: "text-teal-600",
    line: "from-teal-600/40",
  },
  aqua: {
    icon: "bg-cyan-600/10 border-cyan-600/20 text-cyan-600",
    badge: "bg-cyan-600/10 text-cyan-600 border border-cyan-600/20",
    bullet: "bg-cyan-600",
    glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.15)]",
    border: "hover:border-cyan-600/40",
    tag: "text-cyan-600",
    line: "from-cyan-600/40",
  },
  navy: {
    icon: "bg-navy-600/10 border-navy-600/20 text-navy-600",
    badge: "bg-navy-600/10 text-navy-600 border border-navy-600/20",
    bullet: "bg-navy-600",
    glow: "hover:shadow-[0_8px_40px_rgba(25,55,109,0.15)]",
    border: "hover:border-navy-600/40",
    tag: "text-navy-600",
    line: "from-navy-600/40",
  },
};

function SoftwareCard({ item, index }) {
  const cardRef = useRef(null);
  const c = colorMap[item.color];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: (index % 3) * 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`
        group relative flex flex-col
        bg-white border border-slate-200 rounded-2xl overflow-hidden
        transition-all duration-300
        ${c.glow} ${c.border}
      `}
    >
      <div className={`h-[2px] w-full bg-gradient-to-r ${c.line} to-transparent`} />

      <div className="relative w-full h-36 sm:h-40 md:h-44 bg-slate-50 border-b border-slate-200 flex items-center justify-center overflow-hidden">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.category} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase">
              Image coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3 sm:gap-4">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <div
            className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}
          >
            {item.icon}
          </div>
          <div>
            <p
              className={`text-[10px] sm:text-xxs font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}
            >
              {item.emoji}
            </p>
            <h3
              className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {item.category}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 italic">{item.tagline}</p>
          </div>
        </div>

        <div className={`h-px bg-gradient-to-r ${c.line} to-transparent`} />

        <ul className="space-y-1.5 sm:space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-2.5">
              <span
                className={`mt-[4px] sm:mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`}
              />
              <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2.5 sm:pt-3 border-t border-slate-200">
          <p className="text-[10px] sm:text-xxs text-slate-500 uppercase tracking-widest font-semibold mb-1">
            Examples
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 italic">{item.examples}</p>
        </div>
      </div>
    </div>
  );
}

SoftwareCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    emoji: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    examples: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

SystemSoftwareTypesSection.propTypes = {};

export default function SystemSoftwareTypesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const subheadRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        subheadRef.current,
        { opacity: 0, y: -16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: subheadRef.current, start: "top 88%" },
        }
      );
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
        }
      );
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: { trigger: descRef.current, start: "top 88%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-12 sm:py-14 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <div ref={subheadRef} className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-7 h-2.5 sm:w-8 sm:h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              Our Expertise
            </span>
          </div>

          <h2
            ref={headerRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Software <span className="text-teal-600">We Build</span>
          </h2>

          <p
            ref={descRef}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            From desktop applications to enterprise backend systems, we deliver robust software
            solutions engineered for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {softwareTypes.map((item, i) => (
            <SoftwareCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
