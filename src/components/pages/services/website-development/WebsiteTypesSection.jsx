"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const websiteTypes = [
  {
    id: 1,
    emoji: "🛒",
    category: "E-commerce Website",
    tagline: "Sell products online, 24/7",
    color: "teal",
    image: "/services/website-development/ecommerce.jpg",
    features: [
      "Online product selling platform",
      "Cart & payment gateway",
      "Order tracking system",
      "Admin panel & analytics",
    ],
    examples: "Amazon-style stores, local shopping sites",
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
    id: 2,
    emoji: "🏥",
    category: "Hospital / Healthcare Website",
    tagline: "Smarter patient care, online",
    color: "aqua",
    image: "/services/website-development/hospitaland healthcare.png",
    features: [
      "Appointment booking system",
      "Doctor listing & profiles",
      "Patient management (ERP)",
      "Medical records & reports",
    ],
    examples: "Clinic portals, hospital management systems",
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
    id: 3,
    emoji: "🎓",
    category: "School / College Website",
    tagline: "Digitize your institution",
    color: "navy",
    image: "/services/website-development/school and college.jpg",
    features: [
      "Admission system",
      "Student portal & dashboard",
      "Notice board & results",
      "School ERP system",
    ],
    examples: "University portals, school management systems",
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
    id: 4,
    emoji: "🏢",
    category: "Corporate / Business Website",
    tagline: "Your brand's digital home",
    color: "teal",
    image: "/services/website-development/bussiness.jpg",
    features: [
      "Company portfolio website",
      "Services showcase",
      "Inquiry & contact system",
      "Branding-focused design",
    ],
    examples: "Agency sites, consulting firms, startups",
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
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "💼",
    category: "Job Portal Website",
    tagline: "Connect talent with opportunity",
    color: "aqua",
    image: "/services/website-development/job portal.jpg",
    features: [
      "Job posting & searching",
      "Resume upload & management",
      "Employer dashboard",
      "LinkedIn-style systems",
    ],
    examples: "Job boards, recruitment platforms, HR portals",
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
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "🏨",
    category: "Hotel / Restaurant Website",
    tagline: "Bookings made effortless",
    color: "navy",
    image: "/services/website-development/hotel and resturant.jpg",
    features: [
      "Table & room booking",
      "Menu display & gallery",
      "Online reservation system",
      "Review & rating management",
    ],
    examples: "Hotel chains, restaurants, resorts, cafes",
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
        <path d="M3 22V12a9 9 0 0118 0v10" />
        <path d="M2 22h20M8 22v-6h8v6" />
      </svg>
    ),
  },
  {
    id: 7,
    emoji: "🚚",
    category: "Logistics / Delivery Website",
    tagline: "Track every delivery in real-time",
    color: "teal",
    image: "/services/website-development/delivery.jpg",
    features: [
      "Parcel tracking system",
      "Delivery management dashboard",
      "Real-time status updates",
      "Driver & route management",
    ],
    examples: "Courier services, warehousing, supply chain",
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
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
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

function WebsiteCard({ item, index }) {
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
      {/* Top accent line */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${c.line} to-transparent`} />

      {/* Image placeholder */}
      <div className="relative w-full h-44 bg-slate-50 border-b border-slate-200 flex items-center justify-center overflow-hidden">
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
            <span className="text-xs font-medium tracking-wider uppercase">Image coming soon</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Icon + Title */}
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}
          >
            {item.icon}
          </div>
          <div>
            <p className={`text-xxs font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}>
              {item.emoji}
            </p>
            <h3 className="text-sm font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200">
              {item.category}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 italic">{item.tagline}</p>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r ${c.line} to-transparent`} />

        {/* Features */}
        <ul className="space-y-2 flex-1">
          {item.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`} />
              <span className="text-xs text-slate-600 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        {/* Examples footer */}
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

WebsiteCard.propTypes = {
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

WebsiteTypesSection.propTypes = {};

export default function WebsiteTypesSection() {
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
    <section ref={sectionRef} className="relative bg-white py-16 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
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
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              Our Expertise
            </span>
          </div>

          <h2
            ref={headerRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
          >
            Websites <span className="text-teal-600">We Build</span>
          </h2>

          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            From simple landing pages to complex enterprise platforms — we craft every website with
            precision, performance, and purpose.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {websiteTypes.map((item, i) => (
            <WebsiteCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
