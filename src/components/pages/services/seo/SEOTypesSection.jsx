"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const seoTypes = [
  {
    id: 1,
    emoji: "🔍",
    category: "Keyword Research",
    tagline: "Find the right search terms",
    color: "teal",
    image: "/services/seo/keyword reasearch.jpg",
    features: [
      "Keyword analysis & planning",
      "Search intent mapping",
      "Competitor keyword analysis",
      "Long-tail optimization",
    ],
    examples: "Product keywords, local SEO terms, industry jargon",
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "📝",
    category: "Content Optimization",
    tagline: "Content that ranks",
    color: "aqua",
    image: "/services/seo/content optimization.jpg",
    features: [
      "On-page SEO optimization",
      "Meta tags & descriptions",
      "Header structure improvement",
      "Internal linking strategy",
    ],
    examples: "Blog posts, landing pages, product descriptions",
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
  },
  {
    id: 3,
    emoji: "⚙️",
    category: "Technical SEO",
    tagline: "Optimize site infrastructure",
    color: "navy",
    image: "/services/seo/technical seo.jpg",
    features: [
      "Site speed optimization",
      "Schema markup implementation",
      "XML sitemap generation",
      "Crawl error fixing",
    ],
    examples: "Page speed fixes, structured data, indexing issues",
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "🔗",
    category: "Link Building",
    tagline: "Build authoritative backlinks",
    color: "teal",
    image: "/services/seo/link building.jpg",
    features: [
      "Guest posting campaigns",
      "Resource page link building",
      "Broken link recovery",
      "Influencer outreach",
    ],
    examples: "Editorial links, directory submissions, PR outreach",
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
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "📊",
    category: "Local SEO",
    tagline: "Rank in local searches",
    color: "aqua",
    image: "/services/seo/local seo.jpg",
    features: [
      "Google My Business setup",
      "Local citation building",
      "Review management",
      "Map pack optimization",
    ],
    examples: "Local businesses, service areas, multi-location chains",
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "📈",
    category: "SEO Analytics",
    tagline: "Track and measure success",
    color: "navy",
    image: "/services/seo/seo analytics.jpg",
    features: [
      "Rank tracking reports",
      "Traffic analysis",
      "Conversion monitoring",
      "Competitor analysis",
    ],
    examples: "Monthly reports, KPI dashboards, performance audits",
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
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="6" y1="20" x2="6" y2="14" />
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

function SEOCard({ item, index }) {
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
      },
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
      <div
        className={`h-[2px] w-full bg-gradient-to-r ${c.line} to-transparent`}
      />

      <div className="relative w-full h-44 bg-slate-50 border-b border-slate-200 flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.category}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}
          >
            {item.icon}
          </div>
          <div>
            <p
              className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}
            >
              {item.emoji}
            </p>
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              {item.category}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 italic">
              {item.tagline}
            </p>
          </div>
        </div>

        <div className={`h-px bg-gradient-to-r ${c.line} to-transparent`} />

        <ul className="space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`}
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-slate-200">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">
            Examples
          </p>
          <p className="text-xs text-slate-500 italic">{item.examples}</p>
        </div>
      </div>
    </div>
  );
}

export default function SEOTypesSection() {
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
        },
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
        },
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
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div ref={subheadRef} className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-teal-600" />
            <span className="text-[10px] font-black tracking-[0.35em] text-teal-600 uppercase">
              Our Expertise
            </span>
            <span className="w-6 h-px bg-teal-600" />
          </div>

          <h2
            ref={headerRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight"
          >
            SEO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Services
            </span>
          </h2>

          <p
            ref={descRef}
            className="mt-3 text-sm text-slate-600 leading-relaxed"
          >
            From keyword research to analytics, we implement data-driven SEO
            strategies that boost your rankings and drive qualified traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {seoTypes.map((item, i) => (
            <SEOCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}