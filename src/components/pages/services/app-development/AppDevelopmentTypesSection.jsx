"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const appTypes = [
  {
    id: 1,
    emoji: "📱",
    category: "Native iOS Apps",
    tagline: "Optimized for Apple ecosystem",
    color: "teal",
    image: "/services/app-development/native ios app.jpg",
    features: [
      "SwiftUI & UIKit development",
      "App Store deployment",
      "Performance optimization",
      "iOS-specific UI/UX",
    ],
    examples: "iPhone apps, iPad productivity tools, Apple Watch extensions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <path d="M9 6h6M9 10h6M9 14h3" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "🤖",
    category: "Native Android Apps",
    tagline: "Built for Google Play",
    color: "aqua",
    image: "/services/app-development/native android apps.jpg",
    features: [
      "Kotlin & Jetpack Compose",
      "Google Play deployment",
      "Material Design guidelines",
      "Android performance tuning",
    ],
    examples: "Android phones, tablets, wearables, Android TV apps",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-8-4a2 2 0 0 0-2 0l-8 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l8 4a2 2 0 0 0 2 0l8-4A2 2 0 0 0 21 16z" />
        <line x1="12" y1="22" x2="12" y2="12" />
        <path d="M3.27 6.96 12 12.01 20.73 6.96" />
      </svg>
    ),
  },
  {
    id: 3,
    emoji: "🔗",
    category: "Cross-Platform Apps",
    tagline: "One codebase, multiple platforms",
    color: "navy",
    image: "/services/app-development/cross platfrom apps.jpg",
    features: [
      "React Native development",
      "Flutter framework",
      "Single codebase maintenance",
      "Faster time-to-market",
    ],
    examples: "Social media apps, e-commerce mobile apps, SaaS platforms",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "🏥",
    category: "Healthcare Apps",
    tagline: "HIPAA-compliant solutions",
    color: "teal",
    image: "/services/app-development/healthcare apps.jpg",
    features: [
      "Patient records management",
      "Telemedicine integration",
      "Appointment scheduling",
      "Medical device connectivity",
    ],
    examples: "Patient portals, telehealth apps, medical record systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "🛒",
    category: "E-commerce Apps",
    tagline: "Mobile commerce solutions",
    color: "aqua",
    image: "/services/app-development/e-commerce apps.jpg",
    features: [
      "Product catalogs",
      "Secure payment gateways",
      "Order tracking",
      "Push notifications",
    ],
    examples: "Retail apps, marketplace apps, B2B ordering platforms",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "🏫",
    category: "Educational Apps",
    tagline: "Learning on the go",
    color: "navy",
    image: "/services/app-development/educational apps.jpg",
    features: [
      "Interactive quizzes",
      "Video streaming",
      "Progress tracking",
      "Offline content access",
    ],
    examples: "E-learning platforms, student portals, training apps",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
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

function AppCard({ item, index }) {
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

      <div className="relative w-full h-40 sm:h-44 md:h-48 bg-slate-50 border-b border-slate-200 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <Image src={item.image} alt={item.category} fill className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-[0.65rem] sm:text-xs md:text-sm font-medium tracking-wider uppercase">
              Image coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3 sm:gap-4">
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}
          >
            {item.icon}
          </div>
          <div>
            <p
              className={`text-[0.65rem] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}
            >
              {item.emoji}
            </p>
            <h3 className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200">
              {item.category}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 mt-0.5 italic">
              {item.tagline}
            </p>
          </div>
        </div>

        <div className={`h-px bg-gradient-to-r ${c.line} to-transparent`} />

        <ul className="space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`} />
              <span className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-slate-200">
          <p className="text-[0.65rem] sm:text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">
            Examples
          </p>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 italic">{item.examples}</p>
        </div>
      </div>
    </div>
  );
}

AppCard.propTypes = {
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

AppDevelopmentTypesSection.propTypes = {};

export default function AppDevelopmentTypesSection() {
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
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          <div ref={subheadRef} className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path
                  d="M0 5h20"
                  stroke="currentColor"
                  className="text-teal-600"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-600" />
              </svg>
            </div>
            <span className="text-[0.65rem] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-teal-600">
              Our Expertise
            </span>
          </div>

          <h2
            ref={headerRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
          >
            Apps <span className="text-teal-600">We Build</span>
          </h2>

          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            From concept to deployment, we create mobile applications that deliver exceptional user
            experiences across iOS and Android platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {appTypes.map((item, i) => (
            <AppCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
