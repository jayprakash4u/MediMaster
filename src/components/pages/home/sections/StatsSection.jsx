"use client";
import { useEffect, useRef, useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────────────────

const HospitalIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    <rect x="-5" y="-2" width="10" height="20" rx="2" fill="#0284C7" />
    <rect x="7" y="-2" width="10" height="20" rx="2" fill="#0284C7" />
    <rect
      x="-18"
      y="22"
      width="8"
      height="32"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="1.5"
    />
    <rect
      x="10"
      y="22"
      width="8"
      height="32"
      rx="2"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="1.5"
    />
    <rect
      x="-40"
      y="56"
      width="80"
      height="30"
      rx="3"
      fill="#E0F2FE"
      stroke="#0284C7"
      strokeWidth="2"
    />
    <rect x="-12" y="62" width="8" height="16" rx="1" fill="#0284C7" />
    <rect x="4" y="62" width="8" height="16" rx="1" fill="#0284C7" />
  </svg>
);

const PatientIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="0" cy="-12" r="14" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
    <circle cx="-4" cy="-14" r="2" fill="#16A34A" />
    <circle cx="4" cy="-14" r="2" fill="#16A34A" />
    <path
      d="M-5 -8 Q0 -4 5 -8"
      stroke="#16A34A"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M0 2 C-18 2 -22 22 -22 34 C-22 50 -8 56 0 56 C8 56 22 50 22 34 C22 22 18 2 0 2 Z"
      fill="#DCFCE7"
      stroke="#16A34A"
      strokeWidth="2"
    />
    <path d="M-22 34 C-22 50 -8 56 0 56" stroke="#16A34A" strokeWidth="1.5" fill="none" />
    <path d="M22 34 C22 50 8 56 0 56" stroke="#16A34A" strokeWidth="1.5" fill="none" />
    <rect x="-3" y="34" width="6" height="22" rx="2" fill="#BBF7D0" />
    <rect
      x="-16"
      y="12"
      width="8"
      height="20"
      rx="2"
      fill="#DCFCE7"
      stroke="#16A34A"
      strokeWidth="1.5"
      transform="rotate(-15 -12 22)"
    />
    <rect
      x="8"
      y="12"
      width="8"
      height="20"
      rx="2"
      fill="#DCFCE7"
      stroke="#16A34A"
      strokeWidth="1.5"
      transform="rotate(15 12 22)"
    />
  </svg>
);

const PharmacyIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect
      x="-28"
      y="8"
      width="56"
      height="54"
      rx="3"
      fill="#FEF3C7"
      stroke="#D97706"
      strokeWidth="2"
    />
    <rect
      x="-10"
      y="-18"
      width="20"
      height="26"
      rx="8"
      fill="#FEF3C7"
      stroke="#D97706"
      strokeWidth="2"
    />
    <line x1="0" y1="-2" x2="0" y2="4" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
    <rect
      x="-22"
      y="22"
      width="10"
      height="14"
      rx="1"
      fill="#FDE68A"
      stroke="#D97706"
      strokeWidth="1"
    />
    <rect
      x="-8"
      y="22"
      width="10"
      height="14"
      rx="1"
      fill="#FDE68A"
      stroke="#D97706"
      strokeWidth="1"
    />
    <rect
      x="6"
      y="22"
      width="10"
      height="14"
      rx="1"
      fill="#FDE68A"
      stroke="#D97706"
      strokeWidth="1"
    />
    <rect
      x="-22"
      y="42"
      width="44"
      height="16"
      rx="2"
      fill="#FDE68A"
      stroke="#D97706"
      strokeWidth="1.5"
    />
    <line x1="-14" y1="50" x2="14" y2="50" stroke="#D97706" strokeWidth="1" />
  </svg>
);

const PathologyIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="0" cy="28" r="26" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
    <circle cx="0" cy="28" r="4" fill="#7C3AED" />
    <circle cx="-14" cy="18" r="4" fill="#7C3AED" />
    <circle cx="14" cy="18" r="4" fill="#7C3AED" />
    <circle cx="-10" cy="36" r="3" fill="#7C3AED" />
    <circle cx="10" cy="36" r="3" fill="#7C3AED" />
    <path d="M-8 28 Q0 10 8 28" stroke="#7C3AED" strokeWidth="2" fill="none" />
    <path d="M-16 22 Q0 0 16 22" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
    <rect
      x="-22"
      y="-18"
      width="44"
      height="22"
      rx="3"
      fill="#EDE9FE"
      stroke="#7C3AED"
      strokeWidth="2"
    />
    <line x1="-14" y1="-10" x2="14" y2="-10" stroke="#7C3AED" strokeWidth="1.5" />
    <line x1="-14" y1="-4" x2="8" y2="-4" stroke="#7C3AED" strokeWidth="1.5" />
  </svg>
);

const DentalIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path
      d="M-8 -16 C-12 -20 -16 -14 -14 -4 C-12 6 -8 22 -4 34 C0 42 0 42 4 34 C8 22 12 6 14 -4 C16 -14 12 -20 8 -16 Z"
      fill="#FCE7F3"
      stroke="#DB2777"
      strokeWidth="2"
    />
    <path d="M-4 4 L-2 14" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 4 L2 14" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M-2 14 Q0 18 2 14" stroke="#DB2777" strokeWidth="1.5" fill="none" />
  </svg>
);

const PolyclinicIcon = () => (
  <svg viewBox="-50 -10 100 110" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="0" cy="28" r="26" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
    <polyline
      points="-10,28 0,18 10,28"
      stroke="#16A34A"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="-10,38 0,28 10,38"
      stroke="#16A34A"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="0" y1="18" x2="0" y2="38" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
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
      icon: "text-sky-600",
      suffix: "text-sky-600",
      label: "text-gray-300",
    },
    teal: {
      icon: "text-teal-600",
      suffix: "text-teal-600",
      label: "text-gray-300",
    },
    emerald: {
      icon: "text-emerald-600",
      suffix: "text-emerald-600",
      label: "text-gray-300",
    },
    indigo: {
      icon: "text-indigo-600",
      suffix: "text-indigo-600",
      label: "text-gray-300",
    },
    violet: {
      icon: "text-violet-600",
      suffix: "text-violet-600",
      label: "text-gray-300",
    },
    cyan: {
      icon: "text-cyan-600",
      suffix: "text-cyan-600",
      label: "text-gray-300",
    },
  };

  const colors = accentClasses[accent] || accentClasses.teal;

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4 sm:px-6">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colors.icon}`}>
        <Icon />
      </div>
      <div className="mt-5 flex items-baseline justify-center font-sans tracking-tight">
        <span className="text-3xl sm:text-4xl font-extrabold tabular-nums text-white">
          {display}
        </span>
        <span className={`text-xl sm:text-2xl font-extrabold ml-0.5 ${colors.suffix}`}>
          {suffix}
        </span>
      </div>
      <p
        className={`mt-2 text-xxs sm:text-xs font-semibold tracking-wider uppercase leading-snug ${colors.label}`}
      >
        {label}
      </p>
    </div>
  );
}

// ── Stats Data ─────────────────────────────────────────────────────────────────

const STATS = [
  { icon: HospitalIcon, value: 248, suffix: "+", label: "Hospitals Onboarded", accent: "teal" },
  { icon: PatientIcon, value: 94200, suffix: "+", label: "Patients Managed", accent: "cyan" },
  { icon: PharmacyIcon, value: 512, suffix: "+", label: "Pharmacy Units", accent: "indigo" },
  { icon: PathologyIcon, value: 38700, suffix: "+", label: "Lab Tests Processed", accent: "blue" },
  { icon: DentalIcon, value: 126, suffix: "+", label: "Dental Clinics", accent: "emerald" },
  { icon: PolyclinicIcon, value: 99.7, suffix: "%", label: "System Uptime", accent: "violet" },
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
    <section className="w-full bg-navy-950 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
