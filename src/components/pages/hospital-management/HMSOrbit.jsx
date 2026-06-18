"use client";

import { useState } from "react";
import Image from "next/image";

const SIZE = 400;
const CENTER = SIZE / 2;
const HUB_RADIUS = 54;
const INNER_RADIUS = 108;
const OUTER_RADIUS = 168;

function polarPosition(angle, radius) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function ModuleIcon({ type, className = "h-3.5 w-3.5" }) {
  const icons = {
    outpatient: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
    registration: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
    appointment: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
    billing: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 14l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
    records: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
      />
    ),
    reception: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    hr: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    inpatient: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
    discharge: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
    pharmacy: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    store: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
    lab: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 002 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
  };

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      {icons[type]}
    </svg>
  );
}

const OUTER_MODULES = [
  {
    id: "opd",
    icon: "outpatient",
    lines: ["Outpatient", "Management"],
    angle: 315,
    accent: "#3B82F6",
  },
  {
    id: "registration",
    icon: "registration",
    lines: ["Patient", "Registration"],
    angle: 0,
    accent: "#0D9488",
  },
  {
    id: "appointment",
    icon: "appointment",
    lines: ["Appointment", "Scheduling"],
    angle: 45,
    accent: "#06B6D4",
  },
  { id: "billing", icon: "billing", lines: ["Balance", "Sheet"], angle: 90, accent: "#14B8A6" },
  { id: "records", icon: "records", lines: ["Medical", "Records"], angle: 135, accent: "#6366F1" },
  {
    id: "reception",
    icon: "reception",
    lines: ["Reception", "Desk"],
    angle: 180,
    accent: "#0891B2",
  },
  { id: "hr", icon: "hr", lines: ["Payroll &", "HR"], angle: 225, accent: "#2563EB" },
  {
    id: "inpatient",
    icon: "inpatient",
    lines: ["Inpatient", "Management"],
    angle: 270,
    accent: "#4338CA",
  },
];

const INNER_MODULES = [
  {
    id: "discharge",
    icon: "discharge",
    lines: ["Discharge", "Summary"],
    angle: 225,
    accent: "#6366F1",
  },
  {
    id: "pharmacy",
    icon: "pharmacy",
    lines: ["Pharmacy", "Module"],
    angle: 315,
    accent: "#0D9488",
  },
  { id: "store", icon: "store", lines: ["Store", "Inventory"], angle: 45, accent: "#3B82F6" },
  { id: "lab", icon: "lab", lines: ["Laboratory", "Module"], angle: 135, accent: "#14B8A6" },
];

function ConnectorLine({ module, radius, hovered }) {
  const start = polarPosition(module.angle, HUB_RADIUS + 4);
  const end = polarPosition(module.angle, radius);
  const isActive = hovered === module.id;

  return (
    <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      stroke={isActive ? module.accent : "rgba(255,255,255,0.14)"}
      strokeWidth={isActive ? 1.5 : 1}
      className="transition-all duration-300"
    />
  );
}

function OrbitPill({ module, ring, hovered, onHover }) {
  const radius = ring === "outer" ? OUTER_RADIUS : INNER_RADIUS;
  const { x, y } = polarPosition(module.angle, radius);
  const isHovered = hovered === module.id;
  const isOuter = ring === "outer";

  return (
    <button
      type="button"
      className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border text-left backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
        isOuter ? "px-3 py-2" : "px-2.5 py-1.5"
      } ${
        isHovered
          ? "z-20 scale-105 border-teal-400/60 bg-white/20 shadow-lg shadow-teal-500/20"
          : "border-white/20 bg-white/10 hover:border-white/35 hover:bg-white/15"
      }`}
      style={{ left: `${(x / SIZE) * 100}%`, top: `${(y / SIZE) * 100}%` }}
      onMouseEnter={() => onHover(module.id)}
      aria-label={module.lines.join(" ")}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full text-white ${
          isOuter ? "h-7 w-7" : "h-6 w-6"
        }`}
        style={{ backgroundColor: `${module.accent}CC` }}
      >
        <ModuleIcon type={module.icon} className={isOuter ? "h-3.5 w-3.5" : "h-3 w-3"} />
      </span>
      <span
        className={`leading-tight font-semibold text-white ${isOuter ? "text-[10px]" : "text-[9px]"}`}
      >
        {module.lines.map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </span>
    </button>
  );
}

function CenterHub() {
  const hubSize = ((HUB_RADIUS * 2) / SIZE) * 100;

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-teal-400/40 bg-slate-950/90 shadow-[0_0_32px_rgba(20,184,166,0.25)]"
      style={{ width: `${hubSize}%`, height: `${hubSize}%` }}
    >
      <div className="relative mb-1.5 flex h-11 w-11 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
        <Image src="/brand/logo.png" alt="MediMaster HMS" fill className="object-contain p-1" />
      </div>
      <p className="text-base font-black leading-none tracking-tight text-white">HMS</p>
      <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.22em] text-teal-400">
        Smart Care
      </p>
    </div>
  );
}

export default function HMSStatic() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[400px] select-none"
      onMouseLeave={() => setHovered(null)}
    >
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="relative z-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hmsCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hmsRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r="112" fill="url(#hmsCoreGlow)" />

        {/* Outer track */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER_RADIUS + 16}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER_RADIUS + 16}
          fill="none"
          stroke="url(#hmsRingGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 14"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CENTER} ${CENTER}`}
            to={`360 ${CENTER} ${CENTER}`}
            dur="90s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Inner track */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={INNER_RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Hub backdrop — single clean circle behind center content */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={HUB_RADIUS + 6}
          fill="rgba(15,23,42,0.85)"
          stroke="rgba(45,212,191,0.25)"
          strokeWidth="1.5"
        />

        {/* Connector lines */}
        {OUTER_MODULES.map((mod) => (
          <ConnectorLine
            key={`line-${mod.id}`}
            module={mod}
            radius={OUTER_RADIUS}
            hovered={hovered}
          />
        ))}
        {INNER_MODULES.map((mod) => (
          <ConnectorLine
            key={`line-${mod.id}`}
            module={mod}
            radius={INNER_RADIUS}
            hovered={hovered}
          />
        ))}
      </svg>

      <CenterHub />

      {OUTER_MODULES.map((mod) => (
        <OrbitPill key={mod.id} module={mod} ring="outer" hovered={hovered} onHover={setHovered} />
      ))}
      {INNER_MODULES.map((mod) => (
        <OrbitPill key={mod.id} module={mod} ring="inner" hovered={hovered} onHover={setHovered} />
      ))}
    </div>
  );
}
