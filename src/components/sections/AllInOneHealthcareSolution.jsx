"use client";

import Image from "next/image";
import Link from "next/link";

const healthcareSolutions = [
  {
    title: "Hospital",
    description:
      "Complete hospital management with integrated patient care, billing, inventory, and operations modules.",
    image: "/All in one/Hospital.jpg",
    href: "/solutions/hospital",
    icon: (
      <svg
        viewBox="0 0 108 108"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect x="20" y="38" width="68" height="52" rx="4" fill="#14B8A6" />
        <rect x="14" y="32" width="80" height="12" rx="4" fill="#0D9488" />
        <rect x="47" y="20" width="14" height="34" rx="3" fill="#254DC8" />
        <rect x="36" y="30" width="36" height="14" rx="3" fill="#254DC8" />
        <rect
          x="26"
          y="48"
          width="14"
          height="12"
          rx="2"
          fill="#F0FDFE"
          opacity="0.85"
        />
        <rect
          x="47"
          y="48"
          width="14"
          height="12"
          rx="2"
          fill="#F0FDFE"
          opacity="0.85"
        />
        <rect
          x="68"
          y="48"
          width="14"
          height="12"
          rx="2"
          fill="#F0FDFE"
          opacity="0.85"
        />
        <rect x="42" y="72" width="24" height="18" rx="3" fill="#0F1F4D" />
        <circle cx="62" cy="81" r="2" fill="#14B8A6" />
      </svg>
    ),
  },
  {
    title: "Pharmacy",
    description:
      "Streamlined prescription processing, inventory control, and supplier management for pharmacies.",
    image: "/All in one/pharmecy.jpg",
    href: "/solutions/pharmacy",
    icon: (
      <svg
        viewBox="0 0 108 108"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="54" cy="52" r="30" fill="#14B8A6" />
        <rect x="30" y="44" width="48" height="16" rx="8" fill="#0F1F4D" />
        <rect
          x="30"
          y="44"
          width="24"
          height="16"
          rx="8"
          fill="#F0FDFE"
          opacity="0.95"
        />
        <text
          x="42"
          y="57"
          fontFamily="sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#14B8A6"
          textAnchor="middle"
        >
          R
        </text>
        <text
          x="62"
          y="57"
          fontFamily="sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#F0FDFE"
          textAnchor="middle"
        >
          x
        </text>
        <rect x="49" y="22" width="10" height="22" rx="3" fill="#254DC8" />
        <rect x="40" y="29" width="28" height="10" rx="3" fill="#254DC8" />
        <circle cx="34" cy="90" r="4" fill="#0D9488" />
        <circle cx="54" cy="90" r="4" fill="#0D9488" />
        <circle cx="74" cy="90" r="4" fill="#0D9488" />
      </svg>
    ),
  },
  {
    title: "Ref Path Lab",
    description:
      "Reference pathology solution for advanced diagnostics, test management, and detailed reporting.",
    image: "/All in one/ref path lab.jpg",
    href: "/solutions/ref-path-lab",
    icon: (
      <svg
        viewBox="0 0 108 108"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="54" cy="48" r="26" fill="#254DC8" />
        <rect x="46" y="34" width="8" height="18" rx="2" fill="#F0FDFE" />
        <rect x="44" y="50" width="12" height="6" rx="1" fill="#F0FDFE" />
        <rect x="40" y="56" width="20" height="5" rx="2" fill="#5EEAD4" />
        <rect x="50" y="61" width="4" height="8" rx="1" fill="#F0FDFE" />
        <rect x="38" y="69" width="28" height="4" rx="2" fill="#F0FDFE" />
        <circle cx="54" cy="34" r="5" fill="#5EEAD4" />
        <rect x="28" y="82" width="52" height="14" rx="5" fill="#254DC8" />
        <text
          x="54"
          y="92.5"
          fontFamily="sans-serif"
          fontSize="8"
          fontWeight="700"
          fill="#fff"
          textAnchor="middle"
        >
          REF PATH
        </text>
      </svg>
    ),
  },
  {
    title: "Pathology Lab",
    description:
      "Full-featured lab management with sample tracking, result processing, and quality control.",
    image: "/All in one/pathalogy lab.jpg",
    href: "/solutions/pathology-lab",
    icon: (
      <svg
        viewBox="0 0 108 108"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
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
    description:
      "Versatile clinic system for outpatient services, appointment scheduling, and patient records.",
    image: "/All in one/polyclinic.jpg",
    href: "/solutions/clinic",
    icon: (
      <svg
        viewBox="0 0 108 108"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M54 76 C54 76 24 58 24 42 C24 32 32 26 40 26 C46 26 51 30 54 34 C57 30 62 26 68 26 C76 26 84 32 84 42 C84 58 54 76 54 76Z"
          fill="#EF4444"
        />
        <polyline
          points="28,48 36,48 40,36 44,58 50,38 56,52 60,48 80,48"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="54"
          cy="82"
          r="8"
          fill="none"
          stroke="#0D9488"
          strokeWidth="3"
        />
        <path
          d="M46 82 C42 82 40 78 40 74 C40 68 44 62 54 62"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="54" cy="62" r="3" fill="#14B8A6" />
      </svg>
    ),
  },
];

export default function AllInOneHealthcareSolution() {
  return (
    <section className="bg-slate-50 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-teal-500 font-bold text-[11px] tracking-widest uppercase block mb-3">
              Core Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
              All-in-One <span className="text-teal-500">Healthcare</span>{" "}
              Solution
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Modular platforms engineered to streamline workflows and elevate
              clinical precision across every department.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {healthcareSolutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-teal-400 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)] transition-all duration-200 flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-36 flex-shrink-0 bg-slate-100">
                {/* Actual photo */}
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

{/* Subtle dark overlay so badge stays readable */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                 {/* Icon badge — floats at bottom-left, half inside image, half in body */}
                 <div className="absolute -bottom-5 left-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-md">
                   <div className="w-6 h-6">{solution.icon}</div>
                 </div>
               </div>

              {/* Card body */}
              <div className="pt-8 px-4 pb-5 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-slate-800 mb-1.5 tracking-tight group-hover:text-teal-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-[12px] text-slate-500 leading-relaxed flex-grow mb-4">
                  {solution.description}
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-teal-500 transition-colors flex items-center gap-1.5">
                    Explore
                    <svg
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
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
