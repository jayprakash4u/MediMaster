"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const maintenanceServices = [
  {
    id: 1,
    emoji: "🔐",
    category: "Security & Backup",
    tagline: "Keep your site safe and recoverable",
    color: "teal",
    image: "/services/Website%20maintainence/websitemaintenancecardsimg/security%20backup.jpg",
    features: [
      "Daily backups with fast restore",
      "Malware scanning & removal",
      "SSL monitoring & renewal",
      "Security patch management",
    ],
  },
  {
    id: 2,
    emoji: "⚡",
    category: "Performance Optimization",
    tagline: "Faster load, better experience",
    color: "aqua",
    image:
      "/services/Website%20maintainence/websitemaintenancecardsimg/performance%20optimization.gif",
    features: [
      "Page speed tuning",
      "Image & asset optimization",
      "Caching & CDN setup",
      "Database query optimization",
    ],
  },
  {
    id: 3,
    emoji: "🛠️",
    category: "Updates & Bug Fixes",
    tagline: "Keep everything current and stable",
    color: "teal",
    image:
      "/services/Website%20maintainence/websitemaintenancecardsimg/Updates%20&%20Bug%20Fixes.jpg",
    features: [
      "Core & plugin updates",
      "Compatibility checks",
      "Bug fixes & patches",
      "Version control & testing",
    ],
  },
  {
    id: 4,
    emoji: "📊",
    category: "Monitoring & Analytics",
    tagline: "Know how your site performs",
    color: "aqua",
    image:
      "/services/Website%20maintainence/websitemaintenancecardsimg/Monitoring%20&%20Analytics.jpg",
    features: [
      "Uptime & downtime alerts",
      "Traffic & behavior analytics",
      "Error log monitoring",
      "Performance reports",
    ],
  },
  {
    id: 5,
    emoji: "📞",
    category: "Technical Support",
    tagline: "Expert help whenever you need it",
    color: "teal",
    image: "/services/Website%20maintainence/websitemaintenancecardsimg/Technical%20Support.jpg",
    features: [
      "24/7 priority support",
      "Issue troubleshooting",
      "Configuration assistance",
      "Dedicated account manager",
    ],
  },
  {
    id: 6,
    emoji: "🔄",
    category: "Content Updates & Management",
    tagline: "Fresh content, always",
    color: "aqua",
    image:
      "/services/Website%20maintainence/websitemaintenancecardsimg/Content%20Updates%20&%20Management.jpg",
    features: [
      "Text & image updates",
      "Blog & news posting",
      "Page edits & restructuring",
      "Multilingual content support",
    ],
  },
  {
    id: 7,
    emoji: "🌐",
    category: "Hosting & Server Management",
    tagline: "Reliable infrastructure, always on",
    color: "teal",
    image:
      "/services/Website%20maintainence/websitemaintenancecardsimg/Hosting%20&%20Server%20Management.jpg",
    features: [
      "Server health monitoring",
      "Resource scaling",
      "Migration & deployment",
      "Managed cloud hosting",
    ],
  },
  {
    id: 8,
    emoji: "📈",
    category: "SEO Maintenance",
    tagline: "Stay ranked, stay visible",
    color: "aqua",
    image: "/services/Website%20maintainence/websitemaintenancecardsimg/SEO%20Maintenance.jpg",
    features: [
      "Technical SEO audits",
      "Meta & content updates",
      "Broken link fixes",
      "Search console management",
    ],
  },
  {
    id: 9,
    emoji: "🔌",
    category: "Plugin & Integration Management",
    tagline: "Seamless tools, working together",
    color: "teal",
    image:
      "/services/Website%20maintainence/websitemaintenancecardsimg/Plugin%20&%20Integration%20Management.jpg",
    features: [
      "Plugin updates & compatibility",
      "Third-party integrations",
      "API monitoring & fixes",
      "Custom workflow automation",
    ],
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
};

function MaintenanceCard({ item, index }) {
  const cardRef = useRef(null);
  const c = colorMap[item.color] || colorMap.teal;

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
          <Image src={item.image} alt={item.category} fill className="w-full h-full object-cover" />
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
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
              Image coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3 sm:gap-4">
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center text-xl sm:text-2xl ${c.icon} transition-transform duration-300 group-hover:scale-110 bg-slate-50`}
          >
            {item.emoji}
          </div>
          <div>
            <p
              className={`text-[0.625rem] sm:text-xxs font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}
            >
              Maintenance
            </p>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {item.category}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 italic">{item.tagline}</p>
          </div>
        </div>

        <div className={`h-px bg-gradient-to-r ${c.line} to-transparent`} />

        <ul className="space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`} />
              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MaintenanceCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    emoji: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

MaintenanceTypesSection.propTypes = {};

export default function MaintenanceTypesSection() {
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
    <section ref={sectionRef} className="relative bg-white py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <div ref={subheadRef} className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-5 h-px sm:w-6 bg-teal-600" />
            <span className="text-[0.625rem] sm:text-xxs font-black tracking-[0.35em] text-teal-600 uppercase">
              What We Cover
            </span>
            <span className="w-5 h-px sm:w-6 bg-teal-600" />
          </div>

          <h2
            ref={headerRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            Website{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Maintenance
            </span>{" "}
            Services
          </h2>

          <p
            ref={descRef}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed"
          >
            Comprehensive care for your website — from security and performance to content and SEO,
            all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {maintenanceServices.map((item, i) => (
            <MaintenanceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
