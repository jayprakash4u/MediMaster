"use client";
import { useEffect, useRef, useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────────────────

const HospitalIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect
      x="-38"
      y="20"
      width="76"
      height="68"
      rx="3"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-42"
      y="14"
      width="84"
      height="12"
      rx="3"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-5"
      y="-2"
      width="10"
      height="28"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-14"
      y="7"
      width="28"
      height="10"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect x="-32" y="30" width="16" height="14" rx="2" fill="#0284C7" />
    <rect x="-32" y="52" width="16" height="14" rx="2" fill="#0284C7" />
    <rect x="16" y="30" width="16" height="14" rx="2" fill="#0284C7" />
    <rect x="16" y="52" width="16" height="14" rx="2" fill="#0284C7" />
    <rect
      x="-10"
      y="52"
      width="20"
      height="36"
      rx="2"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <line x1="-42" y1="88" x2="42" y2="88" stroke="#0284C7" strokeWidth="2" />
  </svg>
);

const PharmacyIcon = () => (
  <svg viewBox="-55 5 110 100" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path d="M-30 60 Q-30 88 0 88 Q30 88 30 60 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
    <rect
      x="-34"
      y="55"
      width="68"
      height="10"
      rx="4"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-4"
      y="20"
      width="8"
      height="38"
      rx="4"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <ellipse cx="0" cy="20" rx="10" ry="7" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
    <text
      x="0"
      y="80"
      fontSize="14"
      fill="#0284C7"
      fontWeight="800"
      textAnchor="middle"
      fontFamily="sans-serif"
    >
      Rx
    </text>
    <ellipse cx="-20" cy="44" rx="9" ry="5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
    <line x1="-20" y1="39" x2="-20" y2="49" stroke="#0284C7" strokeWidth="1.2" />
    <ellipse cx="20" cy="44" rx="9" ry="5" fill="#0EA5E9" stroke="#0284C7" strokeWidth="1.5" />
    <line x1="20" y1="39" x2="20" y2="49" stroke="#0284C7" strokeWidth="1.2" />
    <rect
      x="-42"
      y="12"
      width="8"
      height="22"
      rx="2"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="1"
    />
    <rect
      x="-48"
      y="18"
      width="20"
      height="8"
      rx="2"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="1"
    />
  </svg>
);

const PathologyIcon = () => (
  <svg viewBox="-35 0 80 90" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect
      x="-28"
      y="72"
      width="56"
      height="10"
      rx="3"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-6"
      y="28"
      width="12"
      height="46"
      rx="3"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-24"
      y="28"
      width="48"
      height="10"
      rx="3"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-6"
      y="8"
      width="12"
      height="24"
      rx="3"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <ellipse cx="0" cy="8" rx="8" ry="5" fill="#0284C7" stroke="#0284C7" strokeWidth="1.2" />
    <rect x="-5" y="68" width="10" height="10" rx="2" fill="#0284C7" />
    <rect
      x="-20"
      y="62"
      width="40"
      height="6"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <circle cx="-8" cy="64" r="2.5" fill="#0F172A" />
    <circle cx="0" cy="64" r="2.5" fill="#0F172A" />
    <circle cx="8" cy="64" r="2.5" fill="#0F172A" />
    <ellipse cx="0" cy="76" rx="10" ry="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" />
    <rect
      x="24"
      y="28"
      width="10"
      height="32"
      rx="5"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="1.5"
    />
    <rect
      x="24"
      y="28"
      width="10"
      height="10"
      rx="2"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="1"
    />
  </svg>
);

const DentalIcon = () => (
  <svg viewBox="-50 20 100 95" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path
      d="M0 88 C-8 80,-28 68,-28 48 C-28 36,-20 28,-10 30 C-4 31,0 36,0 36 C0 36,4 31,10 30 C20 28,28 36,28 48 C28 68,8 80,0 88 Z"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <path
      d="M-10 82 C-12 90,-14 96,-12 100"
      fill="none"
      stroke="#0EA5E9"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M10 82 C12 90,14 96,12 100"
      fill="none"
      stroke="#0EA5E9"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M-14 36 Q-18 46,-14 54"
      fill="none"
      stroke="#0EA5E9"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="30"
      y1="20"
      x2="44"
      y2="50"
      stroke="#0284C7"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="44" cy="52" r="6" fill="none" stroke="#0284C7" strokeWidth="2" />
  </svg>
);

const PolyclinicIcon = () => (
  <svg viewBox="-55 -10 115 110" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect
      x="-46"
      y="22"
      width="92"
      height="66"
      rx="3"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-50"
      y="16"
      width="100"
      height="12"
      rx="3"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect x="-42" y="30" width="24" height="20" rx="2" fill="#0284C7" />
    <rect x="-12" y="30" width="24" height="20" rx="2" fill="#0284C7" />
    <rect x="18" y="30" width="24" height="20" rx="2" fill="#0284C7" />
    <rect x="-42" y="58" width="16" height="12" rx="2" fill="#0284C7" />
    <rect x="26" y="58" width="16" height="12" rx="2" fill="#0284C7" />
    <rect
      x="-12"
      y="52"
      width="24"
      height="36"
      rx="2"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-5"
      y="0"
      width="10"
      height="24"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-12"
      y="8"
      width="24"
      height="10"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <line x1="-50" y1="88" x2="50" y2="88" stroke="#0284C7" strokeWidth="2" />
  </svg>
);

const PatientIcon = () => (
  <svg viewBox="-38 0 76 100" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect
      x="-32"
      y="18"
      width="64"
      height="72"
      rx="4"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect
      x="-14"
      y="12"
      width="28"
      height="14"
      rx="4"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect x="-8" y="8" width="16" height="10" rx="3" fill="#0284C7" />
    <circle cx="0" cy="36" r="10" fill="#0EA5E9" stroke="#0284C7" strokeWidth="2" />
    <circle cx="0" cy="36" r="7" fill="#E0F2FE" />
    <circle cx="-3" cy="34" r="1.5" fill="#0284C7" />
    <circle cx="3" cy="34" r="1.5" fill="#0284C7" />
    <path
      d="M-3 38 Q0 41 3 38"
      fill="none"
      stroke="#0284C7"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M-14 52 Q-14 46,-6 44 Q0 42,6 44 Q14 46,14 52 L16 60 L-16 60 Z"
      fill="#0EA5E9"
      stroke="#0284C7"
      strokeWidth="1.5"
    />
    <line x1="-24" y1="66" x2="24" y2="66" stroke="#0284C7" strokeWidth="1.2" />
    <line x1="-24" y1="74" x2="16" y2="74" stroke="#0284C7" strokeWidth="1.2" />
    <path
      d="M-20 63 L-17 66 L-12 60"
      fill="none"
      stroke="#0284C7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M-20 71 L-17 74 L-12 68"
      fill="none"
      stroke="#0284C7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Counter Hook ───────────────────────────────────────────────────────────────

function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const isDecimal = !Number.isInteger(target);
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCount(isDecimal ? parseFloat(val.toFixed(1)) : Math.floor(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

// ── Single Stat Item ───────────────────────────────────────────────────────────

function StatItem({ icon: Icon, value, suffix, label, started, accent }) {
  const count = useCounter(value, 2000, started);
  const display = !Number.isInteger(value) ? count.toFixed(1) : count.toLocaleString();

  const accentClasses = {
    blue: {
      bg: "bg-sky-50 border border-sky-100",
      iconBg: "bg-white border border-sky-100 text-sky-600",
      iconHover: "group-hover:bg-sky-50 group-hover:border-sky-200",
      number: "text-slate-900",
      suffix: "text-sky-600",
      label: "text-slate-500",
    },
    teal: {
      bg: "bg-teal-50/50 border border-teal-100",
      iconBg: "bg-white border border-teal-100 text-teal-600",
      iconHover: "group-hover:bg-teal-50 group-hover:border-teal-200",
      number: "text-slate-900",
      suffix: "text-teal-600",
      label: "text-slate-500",
    },
    emerald: {
      bg: "bg-emerald-50/50 border border-emerald-100",
      iconBg: "bg-white border border-emerald-100 text-emerald-600",
      iconHover: "group-hover:bg-emerald-50 group-hover:border-emerald-200",
      number: "text-slate-900",
      suffix: "text-emerald-600",
      label: "text-slate-500",
    },
    indigo: {
      bg: "bg-indigo-50/50 border border-indigo-100",
      iconBg: "bg-white border border-indigo-100 text-indigo-600",
      iconHover: "group-hover:bg-indigo-50 group-hover:border-indigo-200",
      number: "text-slate-900",
      suffix: "text-indigo-600",
      label: "text-slate-500",
    },
    violet: {
      bg: "bg-violet-50/50 border border-violet-100",
      iconBg: "bg-white border border-violet-100 text-violet-600",
      iconHover: "group-hover:bg-violet-50 group-hover:border-violet-200",
      number: "text-slate-900",
      suffix: "text-violet-600",
      label: "text-slate-500",
    },
    cyan: {
      bg: "bg-cyan-50/50 border border-cyan-100",
      iconBg: "bg-white border border-cyan-100 text-cyan-600",
      iconHover: "group-hover:bg-cyan-50 group-hover:border-cyan-200",
      number: "text-slate-900",
      suffix: "text-cyan-600",
      label: "text-slate-500",
    },
  };

  const colors = accentClasses[accent] || accentClasses.teal;

  return (
    <div className={`flex flex-col items-center justify-center text-center py-8 px-4 sm:px-6 transition-all duration-300 hover:shadow-sm group ${colors.bg}`}>
      {/* Icon Wrapper */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${colors.iconBg} ${colors.iconHover}`}>
        <Icon />
      </div>

      {/* Numeric Block */}
      <div className="mt-5 flex items-baseline justify-center font-sans tracking-tight">
        <span className={`text-3xl sm:text-4xl font-extrabold tabular-nums ${colors.number}`}>
          {display}
        </span>
        <span className={`text-xl sm:text-2xl font-extrabold ml-0.5 ${colors.suffix}`}>{suffix}</span>
      </div>

      {/* Label Text */}
      <p className={`mt-2 text-xxs sm:text-xs font-semibold tracking-wider uppercase leading-snug ${colors.label}`}>
        {label}
      </p>
    </div>
  );
}

// ── Stats Data ─────────────────────────────────────────────────────────────────

const STATS = [
  { icon: HospitalIcon, value: 248, suffix: "+", label: "Hospitals Onboarded" },
  { icon: PatientIcon, value: 94200, suffix: "+", label: "Patients Managed" },
  { icon: PharmacyIcon, value: 512, suffix: "+", label: "Pharmacy Units" },
  { icon: PathologyIcon, value: 38700, suffix: "+", label: "Lab Tests Processed" },
  { icon: DentalIcon, value: 126, suffix: "+", label: "Dental Clinics" },
  { icon: PolyclinicIcon, value: 99.7, suffix: "%", label: "System Uptime" },
];

// ── Main Export ────────────────────────────────────────────────────────────────

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-neutral-50 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-3xl overflow-hidden border border-slate-200/50 shadow-sm bg-slate-200/40 gap-px"
        >
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
