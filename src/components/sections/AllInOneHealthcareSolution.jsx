"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const healthcareSolutions = [
  {
    title: "Hospital Management",
    tag: "Hospital",
    description:
      "Complete hospital management with integrated patient care, billing, inventory, and operations modules.",
    image: "/All in one/Hospital.jpg",
    href: "/solutions/hospital",
    gradient: "linear-gradient(135deg,#0d3d36 0%,#0f6e56 50%,#1d9e75 100%)",
    icon: (
      <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="20" y="38" width="68" height="52" rx="4" fill="#14B8A6" />
        <rect x="14" y="32" width="80" height="12" rx="4" fill="#0D9488" />
        <rect x="47" y="20" width="14" height="34" rx="3" fill="#5EEAD4" />
        <rect x="36" y="30" width="36" height="14" rx="3" fill="#5EEAD4" />
        <rect x="26" y="48" width="14" height="12" rx="2" fill="#F0FDFE" opacity="0.85" />
        <rect x="47" y="48" width="14" height="12" rx="2" fill="#F0FDFE" opacity="0.85" />
        <rect x="68" y="48" width="14" height="12" rx="2" fill="#F0FDFE" opacity="0.85" />
        <rect x="42" y="72" width="24" height="18" rx="3" fill="#042c26" />
        <circle cx="62" cy="81" r="2" fill="#14B8A6" />
      </svg>
    ),
  },
  {
    title: "Pharmacy System",
    tag: "Pharmacy",
    description:
      "Streamlined prescription processing, inventory control, and supplier management for pharmacies.",
    image: "/All in one/pharmecy.jpg",
    href: "/solutions/pharmacy",
    gradient: "linear-gradient(135deg,#1a1040 0%,#254DC8 50%,#5EEAD4 100%)",
    icon: (
      <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="54" cy="52" r="30" fill="#14B8A6" />
        <rect x="30" y="44" width="48" height="16" rx="8" fill="#0F1F4D" />
        <rect x="30" y="44" width="24" height="16" rx="8" fill="#F0FDFE" opacity="0.95" />
        <text x="42" y="57" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#14B8A6" textAnchor="middle">R</text>
        <text x="62" y="57" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#F0FDFE" textAnchor="middle">x</text>
        <rect x="49" y="22" width="10" height="22" rx="3" fill="#5EEAD4" />
        <rect x="40" y="29" width="28" height="10" rx="3" fill="#5EEAD4" />
        <circle cx="34" cy="90" r="4" fill="#0D9488" />
        <circle cx="54" cy="90" r="4" fill="#0D9488" />
        <circle cx="74" cy="90" r="4" fill="#0D9488" />
      </svg>
    ),
  },
  {
    title: "Ref Path Lab",
    tag: "Reference Lab",
    description:
      "Reference pathology solution for advanced diagnostics, test management, and detailed reporting across facilities.",
    image: "/All in one/ref path lab.jpg",
    href: "/solutions/ref-path-lab",
    gradient: "linear-gradient(160deg,#0a1a3a 0%,#185FA5 40%,#378ADD 100%)",
    span: true,
    icon: (
      <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="54" cy="48" r="26" fill="#254DC8" />
        <rect x="46" y="34" width="8" height="18" rx="2" fill="#F0FDFE" />
        <rect x="44" y="50" width="12" height="6" rx="1" fill="#F0FDFE" />
        <rect x="40" y="56" width="20" height="5" rx="2" fill="#5EEAD4" />
        <rect x="50" y="61" width="4" height="8" rx="1" fill="#F0FDFE" />
        <rect x="38" y="69" width="28" height="4" rx="2" fill="#F0FDFE" />
        <circle cx="54" cy="34" r="5" fill="#5EEAD4" />
        <rect x="28" y="82" width="52" height="14" rx="5" fill="#254DC8" />
        <text x="54" y="92.5" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">REF PATH</text>
      </svg>
    ),
  },
  {
    title: "Pathology Lab",
    tag: "Pathology",
    description:
      "Full-featured lab management with sample tracking, result processing, and quality control workflows.",
    image: "/All in one/pathalogy lab.jpg",
    href: "/solutions/pathology-lab",
    gradient: "linear-gradient(135deg,#0a1a10 0%,#3B6D11 50%,#97C459 100%)",
    icon: (
      <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="28" y="30" width="16" height="48" rx="8" fill="#14B8A6" />
        <rect x="28" y="54" width="16" height="24" rx="8" fill="#0D9488" />
        <rect x="30" y="28" width="12" height="6" rx="2" fill="#0F1F4D" />
        <rect x="50" y="24" width="16" height="54" rx="8" fill="#3B66E2" />
        <rect x="50" y="52" width="16" height="26" rx="8" fill="#254DC8" />
        <rect x="52" y="22" width="12" height="6" rx="2" fill="#0F1F4D" />
        <rect x="72" y="34" width="16" height="44" rx="8" fill="#06B6D4" />
        <rect x="72" y="56" width="16" height="22" rx="8" fill="#0891B2" />
        <rect x="74" y="32" width="12" height="6" rx="2" fill="#0F1F4D" />
        <rect x="22" y="78" width="64" height="8" rx="4" fill="#0F1F4D" />
      </svg>
    ),
  },
  {
    title: "Clinic / Polyclinic",
    tag: "Clinic",
    description:
      "Versatile clinic system for outpatient services, appointment scheduling, and patient records management.",
    image: "/All in one/polyclinic.jpg",
    href: "/solutions/clinic",
    gradient: "linear-gradient(135deg,#2a0a14 0%,#993556 50%,#ED93B1 100%)",
    icon: (
      <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M54 76 C54 76 24 58 24 42 C24 32 32 26 40 26 C46 26 51 30 54 34 C57 30 62 26 68 26 C76 26 84 32 84 42 C84 58 54 76 54 76Z" fill="#EF4444" />
        <polyline points="28,48 36,48 40,36 44,58 50,38 56,52 60,48 80,48" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="54" cy="82" r="8" fill="none" stroke="#0D9488" strokeWidth="3" />
        <path d="M46 82 C42 82 40 78 40 74 C40 68 44 62 54 62" fill="none" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="54" cy="62" r="3" fill="#14B8A6" />
      </svg>
    ),
  },
];

export default function AllInOneHealthcareSolution() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || "0");
            setTimeout(() => {
              entry.target.classList.add("card-revealed");
            }, delay * 120);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="healthcare-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Core Modules</span>
          <h2 className="headline">
            All-in-One <span>Healthcare</span> Solution
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {healthcareSolutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              ref={(el) => (cardRefs.current[index] = el)}
              data-delay={index}
              className={`bento-card${solution.span ? " bento-card--span" : ""}`}
            >
              {/* Image area */}
              <div className={`img-wrap${solution.span ? " img-wrap--tall" : ""}`}>
                <div className="img-inner" style={{ background: solution.gradient }}>
                  <div className="img-icon">{solution.icon}</div>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="img-photo"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="img-overlay" />
              </div>

              {/* Card body */}
              <div className="card-body">
                <span className="card-tag">{solution.tag}</span>
                <h3 className="card-title">{solution.title}</h3>
                <p className="card-desc">{solution.description}</p>
                <div className="card-footer">
                  <span className="explore-btn">
                    Explore
                    <svg className="arrow-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = `
  .healthcare-section {
    background: transparent;
    padding: 80px 0;
    font-family: 'DM Sans', sans-serif;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .section-header {
    margin-bottom: 48px;
  }
  .eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #0D9488;
    margin-bottom: 12px;
  }
  .headline {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 800;
    color: #0F172A;
    line-height: 1.1;
  }
  .headline span {
    color: #14B8A6;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 12px;
  }
  .bento-card:nth-child(1) { grid-column: 1/2; grid-row: 1/2; }
  .bento-card:nth-child(2) { grid-column: 2/3; grid-row: 1/2; }
  .bento-card:nth-child(3) { grid-column: 3/4; grid-row: 1/3; }
  .bento-card:nth-child(4) { grid-column: 1/2; grid-row: 2/3; }
  .bento-card:nth-child(5) { grid-column: 2/3; grid-row: 2/3; }

  .bento-card {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    opacity: 0;
    transform: translateY(40px);
    transition: border-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
  }
  .bento-card.card-revealed {
    animation: cardReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  @keyframes cardReveal {
    to { opacity: 1; transform: translateY(0); }
  }
  .bento-card:hover {
    border-color: #14B8A6;
    box-shadow: 0 12px 32px rgba(20, 184, 166, 0.12);
  }

  .img-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .img-wrap--tall {
    height: 320px;
    min-height: 320px;
  }
  .img-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .bento-card:hover .img-inner {
    transform: scale(1.05);
  }
  .img-icon {
    width: 64px;
    height: 64px;
    opacity: 0.9;
    position: relative;
    z-index: 1;
  }
  .img-photo {
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
  }
  .bento-card:hover .img-photo {
    transform: scale(1.05);
  }
  .img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.75) 100%);
    pointer-events: none;
    z-index: 2;
  }

  .card-body {
    padding: 18px 20px 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }
  .card-tag {
    display: inline-flex;
    align-items: center;
    background: #14B8A6;
    color: #FFFFFF;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 99px;
    margin-bottom: 10px;
    width: fit-content;
  }
  .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 6px;
    transition: color 0.3s;
    line-height: 1.3;
  }
  .bento-card:hover .card-title {
    color: #14B8A6;
  }
  .card-desc {
    font-size: 12px;
    color: #64748B;
    line-height: 1.6;
    flex-grow: 1;
  }
  .bento-card:hover .card-desc {
    color: #475569;
  }
  .card-footer {
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1px solid #E2E8F0;
  }
  .explore-btn {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.3s;
  }
  .bento-card:hover .explore-btn {
    color: #14B8A6;
  }
  .arrow-icon {
    width: 14px;
    height: 14px;
    transition: transform 0.3s;
  }
  .bento-card:hover .arrow-icon {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    .bento-grid {
      grid-template-columns: 1fr 1fr;
    }
    .bento-card:nth-child(3) {
      grid-column: 1/3;
      grid-row: 3/4;
    }
    .bento-card:nth-child(3) .img-wrap--tall {
      min-height: 220px;
    }
  }
  @media (max-width: 480px) {
    .bento-grid {
      grid-template-columns: 1fr;
    }
    .bento-card:nth-child(n) {
      grid-column: 1/2;
      grid-row: auto;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleEl = document.createElement("style");
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}
