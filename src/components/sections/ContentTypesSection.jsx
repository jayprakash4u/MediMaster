"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contentTypes = [
  {
    id: 1,
    emoji: "📰",
    category: "Blog Writing",
    tagline: "Informative articles that engage",
    color: "teal",
    image: "/content writing/blog writing.jpg",
    features: [
      "SEO-optimized content",
      "Research-based writing",
      "Engaging headlines",
      "Expert editing",
    ],
    examples: "Industry insights, how-to guides, thought leadership",
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
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "🛍️",
    category: "Product Copy",
    tagline: "Persuasive product descriptions",
    color: "aqua",
    image: "/content writing/product copywriting.jpg",
    features: [
      "Feature-benefit mapping",
      "Conversion-focused copy",
      "SEO product content",
      "Multichannel optimization",
    ],
    examples: "E-commerce listings, catalog descriptions, specification sheets",
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
        <path d="M6 2L6 22M6 2L2 6V12L6 16L10 12V6L6 2Z" />
        <path d="M6 16L10 20L14 16" />
      </svg>
    ),
  },
  {
    id: 3,
    emoji: "🌐",
    category: "Website Copy",
    tagline: "Conversion-driven web content",
    color: "navy",
    image: "/content writing/website copywriting.jpg",
    features: [
      "Homepage messaging",
      "Landing page copy",
      "About us pages",
      "Value proposition writing",
    ],
    examples: "Corporate websites, SaaS pages, service descriptions",
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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "📚",
    category: "Technical Writing",
    tagline: "Complex made simple",
    color: "teal",
    image: "/content writing/blog writing.jpg",
    features: [
      "User manuals",
      "API documentation",
      "White papers",
      "Process documentation",
    ],
    examples: "Software docs, compliance guides, technical specifications",
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
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "📢",
    category: "Marketing Copy",
    tagline: "High-converting ad content",
    color: "aqua",
    image: "/content writing/marketing copywritg.jpg",
    features: [
      "Ad campaign copy",
      "Email newsletters",
      "Sales page content",
      "Call-to-action writing",
    ],
    examples: "PPC ads, email sequences, promotional campaigns",
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "🎯",
    category: "Social Media Content",
    tagline: "Platform-specific messaging",
    color: "navy",
    image: "/content writing/social media desing.jpg",
    features: [
      "Post captions",
      "Story content",
      "Hashtag strategies",
      "Community engagement",
    ],
    examples: "Daily posts, campaign content, brand voice development",
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
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 5 2 9c-1.6-.2-3-.4-4 .1A10.66 10.66 0 0 1 21 4a10.66 10.66 0 0 1 2 10c0 5.5-3.5 10-10 10H6a4 4 0 0 0 0 0" />
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

function ContentCard({ item, index }) {
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

export default function ContentTypesSection() {
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
            Content{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Services
            </span>
          </h2>

          <p
            ref={descRef}
            className="mt-3 text-sm text-slate-600 leading-relaxed"
          >
            From blog posts to technical docs, we create content that educates,
            engages, and converts your target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentTypes.map((item, i) => (
            <ContentCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}