"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const itOutsourcingServices = [
  {
    id: 1,
    emoji: "💻",
    category: "Remote IT Support",
    tagline: "Anytime, anywhere assistance",
    color: "teal",
    image: "/services/IT%20Outsourcing/Remote IT Support.jpg",
    features: [
      "24/7 helpdesk support",
      "Remote desktop troubleshooting",
      "Ticket-based issue tracking",
      "Software & hardware support",
    ],
    examples: "Helpdesk, remote troubleshooting, end-user support",
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
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    emoji: "🖥️",
    category: "Infrastructure Management",
    tagline: "Stable and scalable systems",
    color: "aqua",
    image: "/services/IT%20Outsourcing/Infrastructure Management.jpg",
    features: [
      "Server & network administration",
      "Cloud infrastructure management",
      "Capacity planning & scaling",
      "Disaster recovery planning",
    ],
    examples: "AWS, Azure, on-premise, hybrid setups",
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
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 3,
    emoji: "🔒",
    category: "Cybersecurity Services",
    tagline: "Protect your digital assets",
    color: "navy",
    image: "/services/IT%20Outsourcing/Cybersecurity Services.jpg",
    features: [
      "Threat monitoring & detection",
      "Firewall & VPN configuration",
      "Security audits & compliance",
      "Incident response & recovery",
    ],
    examples: "SOC, SIEM, penetration testing, GDPR",
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
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "☁️",
    category: "Cloud Migration & Management",
    tagline: "Move and manage in the cloud",
    color: "teal",
    image: "/services/IT%20Outsourcing/Cloud Migration & Management.jpg",
    features: [
      "Cloud strategy & roadmap",
      "Migration planning & execution",
      "Cost optimization & reporting",
      "Multi-cloud management",
    ],
    examples: "AWS, Azure, GCP, hybrid/multi-cloud",
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
        <path d="M18 19H23V15C23 10.03 18.97 6 14 6C11 6 8.42 7.64 7 10.14C6.67 10.06 6.34 10 6 10C2.69 10 0 12.69 0 16V19H18" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "👥",
    category: "Dedicated Development Teams",
    tagline: "Extend your team with experts",
    color: "aqua",
    image: "/services/IT%20Outsourcing/Dedicated Development Teams.jpg",
    features: [
      "Pre-vetted skilled developers",
      "Flexible team scaling",
      "Time-zone aligned support",
      "Transparent reporting & management",
    ],
    examples: "Staff augmentation, dedicated teams, offshoring",
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
        <path d="M17 21v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="15" cy="7" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "📈",
    category: "IT Consulting & Strategy",
    tagline: "Technology that drives growth",
    color: "navy",
    image: "/services/IT%20Outsourcing/IT Consulting & Strategy.jpg",
    features: [
      "Technology assessment & roadmap",
      "Digital transformation planning",
      "Vendor selection & management",
      "ROI-driven implementation",
    ],
    examples: "Strategy, digital transformation, vendor management",
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
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    id: 7,
    emoji: "🔄",
    category: "Managed IT Services",
    tagline: "Proactive technology management",
    color: "teal",
    image: "/services/IT%20Outsourcing/Managed IT Services.jpg",
    features: [
      "24/7 system monitoring",
      "Patch management & updates",
      "Backup & disaster recovery",
      "Performance optimization",
    ],
    examples: "Managed services, co-managed IT, NOC services",
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
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    id: 8,
    emoji: "🛡️",
    category: "Network & Data Security",
    tagline: "Secure networks, secure business",
    color: "aqua",
    image: "/services/IT%20Outsourcing/Network & Data Security.jpg",
    features: [
      "Network security assessment",
      "VPN & SD-WAN setup",
      "Data encryption & protection",
      "Security awareness training",
    ],
    examples: "Network security, data protection, compliance",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 9,
    emoji: "📊",
    category: "Business Continuity Planning",
    tagline: "Keep operations running",
    color: "navy",
    image: "/services/IT%20Outsourcing/Business Continuity Planning.jpg",
    features: [
      "Risk assessment & mitigation",
      "Business impact analysis",
      "Recovery time objectives",
      "Continuity strategy & testing",
    ],
    examples: "BCP, disaster recovery, risk management",
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
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 10,
    emoji: "🤝",
    category: "Staff Augmentation",
    tagline: "Flexible talent on demand",
    color: "teal",
    image: "/services/IT%20Outsourcing/Staff Augmentation.jpg",
    features: [
      "Skilled IT professionals",
      "Short & long-term engagement",
      "Quick onboarding & deployment",
      "Cost-effective staffing",
    ],
    examples: "Contract staffing, temp-to-hire, offshore teams",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
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

function ITOutsourcingCard({ item, index }) {
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
              Service
            </p>
            <h3 className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200">
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

export default function ITOutsourcingTypesSection() {
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
            IT <span className="text-teal-600">Outsourcing</span>
          </h2>

          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            From remote support to full infrastructure management, we provide comprehensive IT
            outsourcing solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {itOutsourcingServices.map((item, i) => (
            <ITOutsourcingCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
