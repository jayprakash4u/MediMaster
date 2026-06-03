"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const designTypes = [
  {
    id: 1,
    emoji: "🎨",
    category: "Branding & Identity Design",
    tagline: "Define your brand personality",
    color: "teal",
    image: "/graphic-design/branding.jpg",
    features: [
      "Logo design & typography",
      "Brand style guides & rules",
      "Business cards & letterheads",
      "Company profile layout design",
    ],
    examples: "Corporate identities, startups, rebranding packages",
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
        <path d="M12 8C14.2091 8 16 6.20914 16 4" />
        <path d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z" />
        <path d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z" />
        <path d="M16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11Z" />
        <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "📱",
    category: "Social Media Design",
    tagline: "Thumb-stopping social feeds",
    color: "aqua",
    image: "/graphic-design/social-media.jpg",
    features: [
      "Facebook & Instagram posts",
      "LinkedIn background banners",
      "High-CTR YouTube thumbnails",
      "Conversion-focused social ads",
    ],
    examples: "Grid layouts, ad creatives, campaign banners",
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
    id: 3,
    emoji: "🌐",
    category: "Website UI/UX Design",
    tagline: "Intuitive interface interfaces",
    color: "navy",
    image: "/graphic-design/uiux.jpg",
    features: [
      "Figma high-fidelity mockups",
      "Landing page visual wireframes",
      "SaaS dashboard UI design",
      "Interactive component prototypes",
    ],
    examples: "App interfaces, system web designs, wireframes",
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
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="12" cy="6" r="1" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "🛒",
    category: "E-commerce Design",
    tagline: "Visuals configured to sell",
    color: "teal",
    image: "/graphic-design/ecommerce.jpg",
    features: [
      "Conversion product banners",
      "Commercial product image editing",
      "Seasonal sales layout posters",
      "Marketplace product listing sheets",
    ],
    examples: "Amazon stores, Shopify banners, advertising cards",
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
    id: 5,
    emoji: "📢",
    category: "Marketing & Advertisements",
    tagline: "Command consumer attention",
    color: "aqua",
    image: "/graphic-design/marketing.jpg",
    features: [
      "Event posters & hand flyers",
      "Tri-fold corporate brochures",
      "Business presentation pamphlets",
      "Large hoarding & billboard layouts",
    ],
    examples: "Outdoor advertisements, offline corporate collateral",
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
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "📦",
    category: "Packaging Design",
    tagline: "Unboxing experiences that matter",
    color: "navy",
    image: "/graphic-design/packaging.jpg",
    features: [
      "Structural product box design",
      "Die-cut label configurations",
      "Can & bottle layout graphics",
      "Consumer food-grade packaging",
    ],
    examples: "FMCG box designs, cosmetic labels, luxury packaging",
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 7,
    emoji: "🎬",
    category: "Motion Graphics & Animation",
    tagline: "Bring your content to life",
    color: "teal",
    image: "/graphic-design/motion-graphics.jpg",
    features: [
      "Dynamic animated web ads",
      "Branded intro/outro videos",
      "Corporate explainer transitions",
      "2D kinetic logo animation",
    ],
    examples: "Social media video clips, digital signage screens",
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
    id: 8,
    emoji: "🎥",
    category: "Video Editing Services",
    tagline: "Crafting narratives that hook",
    color: "aqua",
    image: "/graphic-design/video-editing.jpg",
    features: [
      "High-tempo promotional edits",
      "Vlog & YouTube episodic edits",
      "Polished corporate presentations",
      "Short-form Reels & TikTok formats",
    ],
    examples: "Commercial promos, podcast cuts, social loops",
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
        <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
        <rect x="6" y="9" width="4" height="6" />
        <rect x="14" y="9" width="4" height="6" />
      </svg>
    ),
  },
  {
    id: 9,
    emoji: "🖨️",
    category: "Print Media Design",
    tagline: "Flawless physical presentation layouts",
    color: "navy",
    image: "/graphic-design/print-media.jpg",
    features: [
      "Magazine editorial grids",
      "Newspaper commercial display ads",
      "Corporate security ID cards",
      "Premium wedding/event invitations",
    ],
    examples: "Print publications, office stationery matrices",
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
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
  {
    id: 10,
    emoji: "🏫",
    category: "Educational Design",
    tagline: "Simplify learning parameters visually",
    color: "teal",
    image: "/graphic-design/educational.jpg",
    features: [
      "Campus promotional banners",
      "Academic performance metrics templates",
      "Official certificate matrices",
      "Structured data infographics",
    ],
    examples: "School prospectus sheets, interactive online study assets",
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
  {
    id: 11,
    emoji: "🏥",
    category: "Healthcare Graphics",
    tagline: "Empathetic, clear, clinical branding",
    color: "aqua",
    image: "/graphic-design/healthcare.jpg",
    features: [
      "Medical center identity guidelines",
      "Patient information brochures",
      "Clinical informational updates",
      "Awareness strategy campaigns",
    ],
    examples: "Wellness guides, clinic flyers, pharmaceutical catalogs",
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
    id: 12,
    emoji: "📊",
    category: "Infographic Design",
    tagline: "Convert raw details into narratives",
    color: "navy",
    image: "/graphic-design/infographic.jpg",
    features: [
      "Complex data visualizations",
      "Annual stakeholder reports",
      "Internal operations flow charts",
      "Statistical advertising layouts",
    ],
    examples: "Investor decks, whitepaper breakdowns, performance reviews",
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
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 13,
    emoji: "🎮",
    category: "Game & Digital Art",
    tagline: "Build immersive virtual properties",
    color: "teal",
    image: "/graphic-design/digital-art.jpg",
    features: [
      "Heads-Up display (HUD) styling",
      "Digital character configurations",
      "Creative NFT digital art matrix",
      "Stylized environmental concept frames",
    ],
    examples: "Gaming asset components, digital collectable packs",
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
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <path d="M6 12h4M8 10v4M15 11h.01M18 13h.01" />
      </svg>
    ),
  },
  {
    id: 14,
    emoji: "🧠",
    category: "3D Design & Visualization",
    tagline: "Generate hyper-real physical assets",
    color: "aqua",
    image: "/graphic-design/3d-design.jpg",
    features: [
      "Photorealistic product rendering",
      "3D commercial interior blueprints",
      "Architectural dimension walk-throughs",
      "High-fidelity digital layout mockups",
    ],
    examples: "Industrial packaging mockups, spatial visualizations",
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="12 22 12 12 21 7" />
        <polyline points="12 12 3 7" />
      </svg>
    ),
  },
  {
    id: 15,
    emoji: "🪄",
    category: "AI-Based Creative Design",
    tagline: "Modern generation frameworks applied",
    color: "navy",
    image: "/graphic-design/ai-creative.jpg",
    features: [
      "Advanced neural imagery generation",
      "Automated high-res restoration",
      "Conceptual generative design lines",
      "Iterative trend-adhering visual prints",
    ],
    examples: "Concept design workflows, ultra-rapid asset deployment",
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
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

const colorMap = {
  teal: {
    icon: "bg-teal-600/10 border-teal-600/20 text-teal-600",
    bullet: "bg-teal-600",
    glow: "hover:shadow-[0_8px_40px_rgba(20,184,166,0.15)]",
    border: "hover:border-teal-600/40",
    tag: "text-teal-600",
    line: "from-teal-600/40",
  },
  aqua: {
    icon: "bg-cyan-600/10 border-cyan-600/20 text-cyan-600",
    bullet: "bg-cyan-600",
    glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.15)]",
    border: "hover:border-cyan-600/40",
    tag: "text-cyan-600",
    line: "from-cyan-600/40",
  },
  navy: {
    icon: "bg-navy-600/10 border-navy-600/20 text-navy-600",
    bullet: "bg-navy-600",
    glow: "hover:shadow-[0_8px_40px_rgba(25,55,109,0.15)]",
    border: "hover:border-navy-600/40",
    tag: "text-navy-600",
    line: "from-navy-600/40",
  },
};

function DesignCard({ item, index }) {
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
          start: "top 90%",
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
        {item.image ? (
          <img
            src={item.image}
            alt={item.category}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
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
            <span className="text-xs font-medium tracking-wider uppercase">
              Image coming soon
            </span>
          </div>
        )}
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
              {item.emoji} {item.color} Studio
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
            Deliverables
          </p>
          <p className="text-xs text-slate-500 italic">{item.examples}</p>
        </div>
      </div>
    </div>
  );
}

export default function DesignServicesSection() {
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
      className="relative bg-white py-20 overflow-hidden"
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
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div ref={subheadRef} className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-teal-600" />
            <span className="text-[10px] font-black tracking-[0.35em] text-teal-600 uppercase">
              Creative Capabilities
            </span>
            <span className="w-6 h-px bg-teal-600" />
          </div>

          <h2
            ref={headerRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight"
          >
            Design Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              We Offer
            </span>
          </h2>

          <p
            ref={descRef}
            className="mt-3 text-sm text-slate-600 leading-relaxed"
          >
            From comprehensive brand design architectures to production-grade 3D
            renders — we engineer impactful visual content built to elevate
            corporate communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designTypes.map((item, i) => (
            <DesignCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
