"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const smmTypes = [
  {
    id: 1,
    emoji: "📘",
    category: "Facebook Marketing",
    tagline: "Connect with your audience",
    color: "teal",
    image: "/socialmedia marketing/facebook marketing.jpg",
    features: [
      "Page optimization",
      "Content calendar",
      "Community management",
      "Paid ad campaigns",
    ],
    examples: "Brand awareness, lead generation, event promotion",
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H5a4 4 0 0 0-4 4v2" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "📸",
    category: "Instagram Marketing",
    tagline: "Visual storytelling platform",
    color: "aqua",
    image: "/socialmedia marketing/instagram marketing.jpg",
    features: [
      "Story strategy",
      "Reel content",
      "Hashtag optimization",
      "Shopping integration",
    ],
    examples: "Product showcases, brand stories, influencer collaborations",
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
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 3,
    emoji: "🔗",
    category: "LinkedIn Marketing",
    tagline: "Professional network growth",
    color: "navy",
    image: "/socialmedia marketing/linkedin marketing.jpg",
    features: [
      "Company page setup",
      "Thought leadership",
      "Lead generation forms",
      "Sponsored content",
    ],
    examples: "B2B marketing, recruitment, industry networking",
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "🎥",
    category: "YouTube Marketing",
    tagline: "Video-first content strategy",
    color: "teal",
    image: "/socialmedia marketing/youtube marketing.jpg",
    features: [
      "Channel optimization",
      "Video SEO",
      "Thumbnail design",
      "Subscriber growth",
    ],
    examples: "Tutorials, product demos, brand storytelling",
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
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "💬",
    category: "Twitter/X Marketing",
    tagline: "Real-time engagement",
    color: "aqua",
    image: "/socialmedia marketing/twitter marketing.jpg",
    features: [
      "Tweet strategy",
      "Thread campaigns",
      "Hashtag trends",
      "Community building",
    ],
    examples: "News updates, customer service, brand voice",
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
  {
    id: 6,
    emoji: "📊",
    category: "Analytics & Reporting",
    tagline: "Data-driven strategy",
    color: "navy",
    image: "/socialmedia marketing/Analytics & Reporting.jpg",
    features: [
      "Performance tracking",
      "ROI measurement",
      "Audience insights",
      "Monthly reports",
    ],
    examples: "Campaign analysis, competitor benchmarking, strategy refinement",
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
        <line x1="12" y1="20" x2="12" y2="14" />
        <line x1="6" y1="20" x2="6" y2="4" />
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

function SMMCard({ item, index }) {
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

export default function SMMTypesSection() {
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
            Social Media{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Services
            </span>
          </h2>

          <p
            ref={descRef}
            className="mt-3 text-sm text-slate-600 leading-relaxed"
          >
            From strategy to analytics, we manage and grow your presence across
            all major social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {smmTypes.map((item, i) => (
            <SMMCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
