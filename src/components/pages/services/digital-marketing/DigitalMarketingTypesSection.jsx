"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const digitalMarketingServices = [
  {
    id: 1,
    emoji: "🔍",
    category: "Search Engine Optimization (SEO)",
    tagline: "Rank higher, get found",
    color: "teal",
    image: "/services/digital-marketing/Search Engine Optimization (SEO).jpg",
    features: [
      "On-page & off-page SEO",
      "Keyword research & strategy",
      "Technical SEO audits",
      "Link building & authority",
    ],
    examples: "Google rankings, organic traffic growth, local SEO",
  },
  {
    id: 2,
    emoji: "📱",
    category: "Social Media Marketing",
    tagline: "Engage your audience",
    color: "aqua",
    image: "/services/digital-marketing/Social Media Marketing.jpg",
    features: [
      "Platform-specific strategies",
      "Content creation & scheduling",
      "Community management",
      "Social advertising campaigns",
    ],
    examples: "Facebook, Instagram, LinkedIn, Twitter/X, TikTok",
  },
  {
    id: 3,
    emoji: "💰",
    category: "Paid Ads & PPC Campaigns",
    tagline: "Instant targeted traffic",
    color: "teal",
    image: "/services/digital-marketing/Paid Ads & PPC Campaigns.jpg",
    features: [
      "Google Ads management",
      "Facebook & Instagram ads",
      "Retargeting campaigns",
      "Budget optimization & A/B testing",
    ],
    examples: "Search ads, display networks, shopping campaigns",
  },
  {
    id: 4,
    emoji: "✍️",
    category: "Content Marketing",
    tagline: "Content that converts",
    color: "aqua",
    image: "/services/digital-marketing/Content Marketing.jpg",
    features: [
      "Blog writing & strategy",
      "Copywriting for web & ads",
      "Infographic & visual content",
      "Content distribution",
    ],
    examples: "Blog posts, landing pages, ad copy, newsletters",
  },
  {
    id: 5,
    emoji: "📧",
    category: "Email Marketing",
    tagline: "Nurture leads & retain",
    color: "teal",
    image: "/services/digital-marketing/Email Marketing.jpg",
    features: [
      "Email campaign design",
      "Automated drip sequences",
      "List segmentation",
      "A/B testing & analytics",
    ],
    examples: "Newsletters, promotional campaigns, welcome series",
  },
  {
    id: 6,
    emoji: "🎯",
    category: "Lead Generation & Conversion",
    tagline: "Turn visitors into customers",
    color: "aqua",
    image: "/services/digital-marketing/Lead Generation & Conversion.jpg",
    features: [
      "Landing page optimization",
      "CTA strategy & design",
      "Lead magnet creation",
      "Conversion rate optimization",
    ],
    examples: "Form optimization, pop-ups, exit-intent capture",
  },
  {
    id: 7,
    emoji: "📊",
    category: "Analytics & Performance Tracking",
    tagline: "Data-driven decisions",
    color: "teal",
    image: "/services/digital-marketing/Analytics & Performance Tracking.jpg",
    features: [
      "Google Analytics setup",
      "Custom dashboard creation",
      "KPI tracking & reporting",
      "Competitor benchmarking",
    ],
    examples: "Traffic analysis, conversion tracking, ROI reports",
  },
  {
    id: 8,
    emoji: "🤝",
    category: "Influencer & Brand Marketing",
    tagline: "Amplify your reach",
    color: "aqua",
    image: "/services/digital-marketing/Influencer & Brand Marketing.jpg",
    features: [
      "Influencer identification",
      "Campaign collaboration",
      "Brand partnership management",
      "User-generated content",
    ],
    examples: "Micro-influencers, brand ambassadors, reviews",
  },
  {
    id: 9,
    emoji: "🛒",
    category: "E-commerce Marketing",
    tagline: "Sell more online",
    color: "teal",
    image: "/services/digital-marketing/E-commerce Marketing.jpg",
    features: [
      "Product listing optimization",
      "Shopping ads & feeds",
      "Abandoned cart recovery",
      "Customer retention strategy",
    ],
    examples: "Shopify, WooCommerce, Amazon, Flipkart",
  },
  {
    id: 10,
    emoji: "🎥",
    category: "Video & Creative Marketing",
    tagline: "Capture attention",
    color: "aqua",
    image: "/services/digital-marketing/Video & Creative Marketing.gif",
    features: [
      "Promotional video production",
      "YouTube & Reels content",
      "Motion graphics & animation",
      "Creative ad design",
    ],
    examples: "Product demos, brand films, social reels, ads",
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

function MarketingCard({ item, index }) {
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

      <div className="relative w-full h-32 sm:h-40 md:h-44 bg-slate-50 border-b border-slate-200 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.category} className="w-full h-full object-cover" />
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
            <span className="text-xs font-medium tracking-wider uppercase">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}
          >
            <span className="text-xl">{item.emoji}</span>
          </div>
          <div>
            <p className={`text-xxs font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}>
              Marketing
            </p>
            <h3
              className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {item.category}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 italic">{item.tagline}</p>
          </div>
        </div>

        <div className={`h-px bg-gradient-to-r ${c.line} to-transparent`} />

        <ul className="space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`} />
              <span className="text-xs text-slate-600 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-slate-200">
          <p className="text-xxs text-slate-500 uppercase tracking-widest font-semibold mb-1">
            Examples
          </p>
          <p className="text-xs text-slate-500 italic">{item.examples}</p>
        </div>
      </div>
    </div>
  );
}

export default function DigitalMarketingTypesSection() {
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
    <section ref={sectionRef} className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div ref={subheadRef} className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              Our Expertise
            </span>
          </div>

          <h2
            ref={headerRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Digital <span className="text-teal-600">Marketing</span> Services
          </h2>

          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            From SEO and social media to paid ads, email campaigns, and analytics — we build
            data-driven strategies that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {digitalMarketingServices.map((item, i) => (
            <MarketingCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
