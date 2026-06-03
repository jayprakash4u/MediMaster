"use client";

import Image from "next/image";

const icons = {
  financial: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect
        x="2"
        y="18"
        width="4"
        height="8"
        rx="1"
        fill="currentColor"
        className="text-teal-400 opacity-80"
      />
      <rect
        x="8"
        y="13"
        width="4"
        height="13"
        rx="1"
        fill="currentColor"
        className="text-teal-400 opacity-80"
      />
      <rect
        x="14"
        y="8"
        width="4"
        height="18"
        rx="1"
        fill="currentColor"
        className="text-teal-400 opacity-80"
      />
      <rect
        x="20"
        y="4"
        width="4"
        height="22"
        rx="1"
        fill="currentColor"
        className="text-teal-400 opacity-80"
      />
      <polyline points="3,17 9,11 15,7 22,3" strokeWidth="2" />
      <polyline points="19,3 22,3 22,6" />
    </svg>
  ),
  security: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path
        d="M14 3 L24 7 L24 14 C24 19 19 23 14 25 C9 23 4 19 4 14 L4 7 Z"
        className="fill-teal-500/10"
      />
      <path d="M14 3 L24 7 L24 14 C24 19 19 23 14 25 C9 23 4 19 4 14 L4 7 Z" />
      <rect x="10" y="13" width="8" height="7" rx="1.5" />
      <path d="M11 13 L11 10.5 A3 3 0 0 1 17 10.5 L17 13" />
      <circle
        cx="14"
        cy="16.5"
        r="1"
        fill="currentColor"
        className="text-teal-400"
      />
    </svg>
  ),
  mis: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="2" y="2" width="24" height="18" rx="2" />
      <line x1="2" y1="22" x2="26" y2="22" />
      <line x1="11" y1="22" x2="11" y2="26" />
      <line x1="17" y1="22" x2="17" y2="26" />
      <line x1="8" y1="26" x2="20" y2="26" />
      <polyline points="6,16 9,11 13,14 17,8 22,10" strokeWidth="2" />
      <circle
        cx="22"
        cy="10"
        r="1.5"
        fill="currentColor"
        className="text-teal-400"
      />
    </svg>
  ),
  print: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="7" y="2" width="14" height="9" rx="1" />
      <path d="M7 11 H4 A2 2 0 0 0 2 13 L2 20 A2 2 0 0 0 4 22 H7" />
      <path d="M21 11 H24 A2 2 0 0 1 26 13 L26 20 A2 2 0 0 1 24 22 H21" />
      <rect x="7" y="17" width="14" height="9" rx="1" />
      <line x1="10" y1="20" x2="18" y2="20" />
      <line x1="10" y1="22" x2="15" y2="22" />
      <circle
        cx="22"
        cy="15"
        r="1.2"
        fill="currentColor"
        className="text-teal-400"
      />
    </svg>
  ),
  admin: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <circle cx="14" cy="8" r="5" />
      <path d="M4 24 C4 19 9 16 14 16 C19 16 24 19 24 24" />
      <rect x="18" y="18" width="8" height="8" rx="1.5" />
      <line x1="22" y1="18" x2="22" y2="26" />
      <line x1="18" y1="22" x2="26" y2="22" />
    </svg>
  ),
  calendar: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="5" width="22" height="20" rx="2" />
      <line x1="3" y1="11" x2="25" y2="11" />
      <line x1="9" y1="3" x2="9" y2="8" />
      <line x1="19" y1="3" x2="19" y2="8" />
      <rect
        x="7"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        fill="currentColor"
        className="text-teal-400 opacity-70"
      />
      <rect
        x="12"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        fill="currentColor"
        className="text-teal-400 opacity-70"
      />
      <rect
        x="17"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        fill="currentColor"
        className="text-teal-400 opacity-30"
      />
      <rect
        x="7"
        y="19"
        width="4"
        height="4"
        rx="0.5"
        fill="currentColor"
        className="text-teal-400 opacity-30"
      />
      <rect
        x="12"
        y="19"
        width="4"
        height="4"
        rx="0.5"
        fill="currentColor"
        className="text-teal-400 opacity-30"
      />
    </svg>
  ),
  billing: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M4 8 C10 4 18 12 24 8" strokeWidth="2" />
      <path d="M8 14 C5 18 8 23 14 23 C20 23 23 18 20 14" strokeWidth="2" />
      <circle cx="14" cy="15" r="5" className="fill-teal-500/10" />
      <circle cx="14" cy="15" r="5" />
      <text
        x="14"
        y="18.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="currentColor"
        stroke="none"
      >
        {" "}
        ${" "}
      </text>
    </svg>
  ),
  opd: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="2" y="12" width="16" height="12" rx="1.5" />
      <path d="M6 12 L6 9 A4 4 0 0 1 14 9 L14 12" />
      <line x1="10" y1="15" x2="10" y2="21" />
      <line x1="7" y1="18" x2="13" y2="18" />
      <rect x="20" y="6" width="6" height="10" rx="1" />
      <line x1="23" y1="6" x2="23" y2="16" />
      <line x1="20" y1="10" x2="26" y2="10" />
      <path d="M18 22 L22 18" />
    </svg>
  ),
  lab: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M10 3 L10 14 L4 22 A2 2 0 0 0 6 25 L22 25 A2 2 0 0 0 24 22 L18 14 L18 3" />
      <line x1="8" y1="3" x2="20" y2="3" />
      <path d="M6 20 C9 17 12 20 15 17 C18 14 20 18 22 20" strokeWidth="1.5" />
      <circle
        cx="8"
        cy="21"
        r="1.5"
        fill="currentColor"
        className="text-teal-400 opacity-60"
      />
      <circle
        cx="13"
        cy="19"
        r="1"
        fill="currentColor"
        className="text-teal-400 opacity-40"
      />
      <circle
        cx="19"
        cy="21"
        r="1.2"
        fill="currentColor"
        className="text-teal-400 opacity-60"
      />
    </svg>
  ),
  pharmacy: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="6" width="22" height="18" rx="2" />
      <line x1="3" y1="12" x2="25" y2="12" />
      <line x1="10" y1="6" x2="10" y2="24" />
      <ellipse cx="19" cy="18" rx="4" ry="2.5" className="fill-teal-500/20" />
      <ellipse cx="19" cy="18" rx="4" ry="2.5" />
      <line x1="19" y1="15.5" x2="19" y2="20.5" />
      <circle
        cx="6.5"
        cy="9"
        r="1.2"
        fill="currentColor"
        className="text-teal-400 opacity-60"
      />
      <line x1="5" y1="17" x2="8" y2="17" />
      <line x1="6.5" y1="15.5" x2="6.5" y2="18.5" />
    </svg>
  ),
  inventory: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="8" y="16" width="12" height="10" rx="1" />
      <rect x="3" y="10" width="9" height="8" rx="1" />
      <rect x="16" y="10" width="9" height="8" rx="1" />
      <rect x="5" y="4" width="18" height="8" rx="1" />
      <line x1="9" y1="4" x2="9" y2="12" />
      <line x1="19" y1="4" x2="19" y2="12" />
      <line x1="14" y1="10" x2="14" y2="18" />
    </svg>
  ),
  payroll: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="5" width="22" height="18" rx="2" />
      <circle cx="14" cy="14" r="5" className="fill-teal-500/10" />
      <circle cx="14" cy="14" r="5" />
      <text
        x="14"
        y="17.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fill="currentColor"
        stroke="none"
      >
        {" "}
        ${" "}
      </text>
      <line x1="3" y1="10" x2="25" y2="10" />
      <line x1="8" y1="5" x2="8" y2="10" />
      <line x1="20" y1="5" x2="20" y2="10" />
    </svg>
  ),
};

const leftData = [
  { label: ["Financial", "Account"], key: "financial" },
  { label: ["Security", "Control"], key: "security" },
  { label: ["MIS"], key: "mis" },
  { label: ["Print", "Receipt"], key: "print" },
  { label: ["Administration", "& Monitoring"], key: "admin" },
  { label: ["Appointment &", "Scheduling"], key: "calendar" },
];

const rightData = [
  { label: ["Cash/Billing", "Center"], key: "billing" },
  { label: ["O.P.D &", "I.P.D Center"], key: "opd" },
  { label: ["Laboratory"], key: "lab" },
  { label: ["Pharmacy &", "Medicine"], key: "pharmacy" },
  { label: ["Inventory &", "Stock"], key: "inventory" },
  { label: ["Payroll", "Management"], key: "payroll" },
];

export default function HMSCrossLayout() {
  return (
    <section className="w-full bg-slate-50/50 py-16 px-4 font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. SECTION HEADER (Now cleanly positioned at the absolute top) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-teal-600 uppercase bg-teal-50 px-4 py-1.5 rounded-full">
            All-In-One Healthcare Management
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            An Interconnected Network <br />
            For Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
              Entire Infrastructure
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Bring administrative control, financial auditing, and point-of-care
            modules together into a unified operational dashboard. Everything
            speaks to the core ecosystem in real time.
          </p>
        </div>

        {/* 2. MAIN GRID NETWORK DIAGRAM */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 min-h-[500px]">
          {/* LEFT COLUMN MODULES */}
          <div className="flex flex-col gap-4 w-full max-w-[310px] order-2 lg:order-1">
            {leftData.map((item) => (
              <div
                key={item.key}
                className="flex items-center group cursor-pointer"
              >
                <div className="flex-1 bg-white border border-slate-200 group-hover:border-teal-500 rounded-l-xl py-3 px-4 text-xs font-bold text-slate-700 group-hover:text-slate-900 shadow-sm transition-all duration-200 text-center leading-snug">
                  {item.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full shrink-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:from-teal-500 group-hover:to-cyan-600 text-white flex items-center justify-center shadow-md border-2 border-white z-10 transition-all duration-200 group-hover:scale-105 group-hover:shadow-teal-500/20">
                  {icons[item.key]}
                </div>
                <div className="w-4 h-[2px] bg-slate-200 group-hover:bg-teal-400 transition-colors shrink-0" />
              </div>
            ))}
          </div>

          {/* CENTER CORE INTERACTIVE HUB (Restored & Cleaned Up) */}
          <div className="flex-1 flex items-center justify-center min-w-[280px] px-6 py-8 lg:py-0 order-1 lg:order-2 relative">
            {/* Background Pulsing Radar Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 lg:scale-100">
              <div className="absolute w-72 h-72 rounded-full border border-teal-500/10 animate-ping [animation-duration:4s]" />
              <div className="absolute w-60 h-60 rounded-full border border-dashed border-slate-200 animate-spin [animation-duration:40s]" />
              <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 blur-xl" />
            </div>

            {/* Core Logo Floating Card Shield */}
            <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 min-w-[200px] max-w-[240px] text-center flex flex-col items-center">
              <span className="bg-slate-100 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase px-2.5 py-1 rounded-full mb-4">
                Core System
              </span>

              {/* Main Logo Target Box */}
              <div className="relative w-36 h-16 bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center shadow-inner group">
                <Image
                  src="/logo.png"
                  alt="MediMaster Logo"
                  fill
                  priority
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-12 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full my-4" />

              <p className="text-[10px] text-slate-400 leading-normal font-medium uppercase tracking-wider">
                Ecosystem Control
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN MODULES */}
          <div className="flex flex-col gap-4 w-full max-w-[310px] order-3">
            {rightData.map((item) => (
              <div
                key={item.key}
                className="flex items-center flex-row-reverse group cursor-pointer"
              >
                <div className="flex-1 bg-white border border-slate-200 group-hover:border-teal-500 rounded-r-xl py-3 px-4 text-xs font-bold text-slate-700 group-hover:text-slate-900 shadow-sm transition-all duration-200 text-center leading-snug">
                  {item.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full shrink-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:from-teal-500 group-hover:to-cyan-600 text-white flex items-center justify-center shadow-md border-2 border-white z-10 transition-all duration-200 group-hover:scale-105 group-hover:shadow-teal-500/20">
                  {icons[item.key]}
                </div>
                <div className="w-4 h-[2px] bg-slate-200 group-hover:bg-teal-400 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
