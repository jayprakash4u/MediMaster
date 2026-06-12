"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ecommerceTypes = [
  {
    id: 1,
    emoji: "💻",
    category: "Custom E-commerce Development",
    tagline: "Bespoke online stores",
    color: "teal",
    image: "/services/Ecommerce/Custom E-commerce Development.jpg",
    features: [
      "Tailored storefront design",
      "Custom feature development",
      "Headless commerce architecture",
      "API integrations",
    ],
    examples: "B2C stores, B2B platforms, subscription models",
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
    emoji: "🏪",
    category: "Multi-Vendor Marketplace Solutions",
    tagline: "Multiple sellers, one platform",
    color: "aqua",
    image: "/services/Ecommerce/Multi-Vendor Marketplace Solutions.jpg",
    features: [
      "Vendor onboarding systems",
      "Commission management",
      "Product catalog management",
      "Dispute resolution tools",
    ],
    examples: "Amazon-style marketplaces, service platforms, rental systems",
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
    id: 3,
    emoji: "📱",
    category: "Mobile Commerce Applications",
    tagline: "Shopping on the go",
    color: "navy",
    image: "/services/Ecommerce/Mobile Commerce Applications.jpg",
    features: [
      "Native mobile apps",
      "Progressive web apps",
      "Offline shopping cart",
      "Push notifications",
    ],
    examples: "iOS apps, Android apps, cross-platform solutions",
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
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <path d="M9 6h6M9 10h6M9 14h3" />
      </svg>
    ),
  },
  {
    id: 4,
    emoji: "💳",
    category: "Payment Gateway Integration",
    tagline: "Seamless transactions",
    color: "teal",
    image: "/services/Ecommerce/Payment Gateway Integration.jpg",
    features: [
      "Multiple payment options",
      "Secure transaction processing",
      "Payment analytics",
      "Fraud protection",
    ],
    examples: "Credit cards, digital wallets, buy-now-pay-later, crypto",
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
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <circle cx="5" cy="16" r="1" />
        <circle cx="9" cy="16" r="1" />
      </svg>
    ),
  },
  {
    id: 5,
    emoji: "📦",
    category: "Inventory & Order Management",
    tagline: "Smart stock control",
    color: "aqua",
    image: "/services/Ecommerce/Inventory & Order Management.jpg",
    features: [
      "Real-time stock tracking",
      "Automated reorder alerts",
      "Order fulfillment workflow",
      "Warehouse integration",
    ],
    examples: "Barcode scanning, multi-location inventory, dropshipping",
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
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7l8-4m8 4L12 11" />
      </svg>
    ),
  },
  {
    id: 6,
    emoji: "🔗",
    category: "ERP & CRM Integration",
    tagline: "Unified business operations",
    color: "navy",
    image: "/services/Ecommerce/ERP & CRM Integration.jpg",
    features: [
      "Customer data sync",
      "Order-to-cash automation",
      "Inventory sync",
      "Reporting dashboards",
    ],
    examples: "SAP, Oracle, Salesforce, HubSpot integrations",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    id: 7,
    emoji: "☁️",
    category: "Cloud Hosting & DevOps",
    tagline: "Scalable infrastructure",
    color: "teal",
    image: "/services/Ecommerce/Cloud Hosting & DevOps.jpg",
    features: [
      "Auto-scaling hosting",
      "CI/CD deployment",
      "Performance monitoring",
      "Backup & disaster recovery",
    ],
    examples: "AWS, Azure, Docker, Kubernetes deployments",
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
    id: 8,
    emoji: "🛡️",
    category: "Security & Compliance",
    tagline: "Protected transactions",
    color: "aqua",
    image: "/services/Ecommerce/Security & Compliance.jpg",
    features: [
      "PCI DSS compliance",
      "SSL certificates",
      "Data encryption",
      "Regular security audits",
    ],
    examples: "GDPR, CCPA, PCI compliance, fraud detection",
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
    id: 9,
    emoji: "🔍",
    category: "SEO & Digital Marketing Integration",
    tagline: "Drive traffic & sales",
    color: "navy",
    image: "/services/Ecommerce/SEO & Digital Marketing Integration.jpg",
    features: [
      "Product SEO optimization",
      "Shopping feed management",
      "Google Ads integration",
      "Conversion rate optimization",
    ],
    examples: "SEO, PPC, social commerce, email marketing",
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
    id: 10,
    emoji: "🛠️",
    category: "Ongoing Support & Maintenance",
    tagline: "Keep your store running",
    color: "teal",
    image: "/services/Ecommerce/Ongoing Support & Maintenance.jpg",
    features: [
      "24/7 monitoring",
      "Bug fixes & updates",
      "Performance optimization",
      "Feature enhancements",
    ],
    examples: "SLA support, version upgrades, security patches",
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
        <path d="M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11z" />
        <path d="M12 8v4M12 16h.01" />
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

function EcommerceCard({ item, index }) {
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
        {item.image ? (
          <img
            src={item.image}
            alt={item.category}
            className="w-full h-full object-cover"
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
            <span className="text-xl">{item.emoji}</span>
          </div>
          <div>
            <p
              className={`text-xxs font-bold tracking-[0.2em] uppercase mb-0.5 ${c.tag}`}
            >
              Service
            </p>
<h3 className="text-sm font-extrabold tracking-tight text-slate-900 leading-snug transition-colors duration-200"
                    style={{ fontFamily: "'Georgia', serif" }}>
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
          <p className="text-xxs text-slate-500 uppercase tracking-widest font-semibold mb-1">
            Examples
          </p>
          <p className="text-xs text-slate-500 italic">{item.examples}</p>
        </div>
      </div>
    </div>
  );
}

export default function EcommerceTypesSection() {
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
            E-Commerce <span className="text-teal-600">Solutions</span>
          </h2>

          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
          >
            From custom development to ongoing maintenance, we provide
            end-to-end e-commerce services for your online business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ecommerceTypes.map((item, i) => (
            <EcommerceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
