"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serverServices = [
  {
    id: 1,
    emoji: "🚀",
    category: "Server Setup & Configuration",
    tagline: "Get started with a solid foundation",
    color: "teal",
    image: "/services/server-management/Server Setup & Configuration.jpg",
    features: [
      "OS installation & hardening",
      "Web server configuration",
      "DNS & hostname setup",
      "Firewall & security baseline",
    ],
  },
  {
    id: 2,
    emoji: "🔐",
    category: "Security & Firewall Protection",
    tagline: "Shield your infrastructure",
    color: "aqua",
    image: "/services/server-management/Security & Firewall Protection.jpg",
    features: [
      "Firewall rules & policies",
      "Intrusion detection & prevention",
      "SSL/TLS certificate management",
      "Access control & audit logging",
    ],
  },
  {
    id: 3,
    emoji: "📊",
    category: "Monitoring & Uptime Tracking",
    tagline: "Always know your server health",
    color: "teal",
    image: "/services/server-management/Monitoring & Uptime Tracking.jpg",
    features: [
      "Real-time performance dashboards",
      "Uptime & downtime alerts",
      "Resource usage tracking",
      "Incident reporting & logs",
    ],
  },
  {
    id: 4,
    emoji: "⚡",
    category: "Performance & Optimization",
    tagline: "Keep systems running at peak speed",
    color: "aqua",
    image: "/services/server-management/Performance & Optimization.gif",
    features: [
      "Caching & compression",
      "Database query tuning",
      "Resource optimization",
      "Load analysis & tuning",
    ],
  },
  {
    id: 5,
    emoji: "💾",
    category: "Backup & Disaster Recovery",
    tagline: "Never lose critical data",
    color: "teal",
    image: "/services/server-management/Backup & Disaster Recovery.jpg",
    features: [
      "Scheduled automated backups",
      "Offsite & cloud backup storage",
      "Disaster recovery planning",
      "Quick restore & failover support",
    ],
  },
  {
    id: 6,
    emoji: "🔄",
    category: "Server Updates & Maintenance",
    tagline: "Stay current and stable",
    color: "aqua",
    image: "/services/server-management/Server Updates & Maintenance.jpg",
    features: [
      "OS & package patching",
      "Security update management",
      "Routine health checks",
      "Change management & rollback",
    ],
  },
  {
    id: 7,
    emoji: "🌐",
    category: "Cloud & Hosting Management",
    tagline: "Scalable cloud infrastructure",
    color: "teal",
    image: "/services/server-management/Cloud & Hosting Management.jpg",
    features: [
      "AWS / Azure / GCP management",
      "Server provisioning & deployment",
      "Cost optimization & reporting",
      "Multi-cloud strategy support",
    ],
  },
  {
    id: 8,
    emoji: "📦",
    category: "Database Management",
    tagline: "Reliable data storage and access",
    color: "aqua",
    image: "/services/server-management/Database Management.jpg",
    features: [
      "Database installation & tuning",
      "Replication & clustering",
      "Backup & point-in-time recovery",
      "Query optimization & indexing",
    ],
  },
  {
    id: 9,
    emoji: "🔧",
    category: "Scaling & Load Balancing",
    tagline: "Grow without bottlenecks",
    color: "teal",
    image: "/services/server-management/Scaling & Load Balancing.jpg",
    features: [
      "Auto-scaling configuration",
      "Load balancer setup",
      "Traffic distribution & failover",
      "Capacity planning & alerts",
    ],
  },
  {
    id: 10,
    emoji: "📡",
    category: "DNS & Domain Management",
    tagline: "Seamless domain infrastructure",
    color: "aqua",
    image: "/services/server-management/DNS & Domain Management.jpg",
    features: [
      "DNS record configuration",
      "Domain registration & renewal",
      "Subdomain & zone management",
      "CDN & edge caching setup",
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

function ServerCard({ item, index }) {
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
            className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center text-2xl ${c.icon} transition-transform duration-300 group-hover:scale-110 bg-slate-50`}
          >
            {item.emoji}
          </div>
          <div>
            <p className={`text-xxs font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}>
              Server
            </p>
            <h3 className="text-sm md:text-base font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200">
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
              <span className="text-xs text-slate-600 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ServerCard.propTypes = {
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

export default function ServerTypesSection() {
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
              What We Cover
            </span>
          </div>

          <h2
            ref={headerRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
          >
            Server <span className="text-teal-600">Management</span> Services
          </h2>

          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            End-to-end server infrastructure care — from initial setup and security to monitoring,
            backups, scaling, and DNS management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {serverServices.map((item, i) => (
            <ServerCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
