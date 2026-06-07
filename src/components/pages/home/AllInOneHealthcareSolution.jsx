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
    image: "/hospital/hospital.jpg",
    href: "/solutions/hospital",
    // Handpicked transitions matching your brand palette tokens
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    image: "/home/pharmacy-intro.jpg",
    href: "/solutions/pharmacy",
    iconBg: "bg-navy-50",
    iconColor: "text-navy-600",
    icon: (
      <svg viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    image: "/hospital/ref-path-lab.jpg",
    href: "/solutions/ref-path-lab",
    iconBg: "bg-aqua-50",
    iconColor: "text-aqua-600",
    isTall: true, // Replaced arbitrary arrays spans with layout logic
    icon: (
      <svg viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    image: "/pathology/pathology-lab.jpg",
    href: "/solutions/pathology-lab",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    image: "/hospital/polyclinic.jpg",
    href: "/solutions/clinic",
    iconBg: "bg-navy-50",
    iconColor: "text-navy-600",
    icon: (
      <svg viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
            const target = entry.target;
            const delay = parseInt(target.dataset.delay || "0");
            setTimeout(() => {
              target.classList.remove("opacity-0", "translate-y-10");
              target.classList.add("opacity-100", "translate-y-0");
            }, delay * 100);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              Core Modules
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            All-in-One <span className="text-teal-500">Healthcare</span> Solution
          </h2>
        </div>

        {/* Premium Bento Grid Layout Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {healthcareSolutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-delay={index}
              className={`group relative flex flex-col justify-between bg-white border border-border rounded-2xl overflow-hidden transition-all duration-300 shadow-card hover:shadow-cardHover hover:border-teal-400 opacity-0 translate-y-10 ${
                solution.isTall ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div>
                {/* Visual Area - Clean frame box layout instead of random custom gradients */}
                <div className={`relative w-full bg-slate-50 border-b border-border flex items-center justify-center overflow-hidden ${
                  solution.isTall ? "h-56 lg:h-80" : "h-48"
                }`}>
                  {/* Subtle Geometric Graphic Base */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Floating Action Brand Icon Container */}
                  <div className={`w-16 h-16 p-3 rounded-2xl shadow-sm transition-transform duration-500 z-10 group-hover:scale-110 ${solution.iconBg} ${solution.iconColor}`}>
                    {solution.icon}
                  </div>

                  {/* Real Image background Layer with Smooth Dark Tint Overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover opacity-15 grayscale contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-20 group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md mb-3">
                    {solution.tag}
                  </span>
                  <h3
                    className="text-lg font-bold text-slate-950 mb-2 transition-colors duration-200 group-hover:text-teal-600"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Card Footer - Seamless Interactivity Trigger */}
              <div className="px-6 pb-6 pt-2">
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-500 transition-colors duration-200 group-hover:text-teal-500">
                  <span>Explore Solution</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1.5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}