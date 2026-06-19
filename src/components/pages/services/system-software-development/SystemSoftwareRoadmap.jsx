"use client";

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allSteps = [
  {
    num: "01",
    side: "left",
    title: "Requirements Analysis",
    desc: "Define technical specifications, performance needs, and system architecture requirements",
  },
  {
    num: "02",
    side: "left",
    title: "Technology Selection",
    desc: "Choose the optimal tech stack, frameworks, and infrastructure for your system",
  },
  {
    num: "03",
    side: "left",
    title: "System Architecture",
    desc: "Design scalable architecture with microservices, databases, and APIs",
  },
  {
    num: "04",
    side: "left",
    title: "Development Setup",
    desc: "Configure development environment, version control, and CI/CD pipelines",
  },
  {
    num: "05",
    side: "right",
    title: "Module Development",
    desc: "Build system modules with clean code practices and thorough documentation",
  },
  {
    num: "06",
    side: "right",
    title: "Integration Testing",
    desc: "Test module integration and ensure system-wide compatibility",
  },
  {
    num: "07",
    side: "right",
    title: "Deployment",
    desc: "Deploy to production with monitoring and backup systems in place",
  },
  {
    num: "08",
    side: "right",
    title: "Maintenance & Scaling",
    desc: "Ongoing support, performance tuning, and system scaling as needed",
  },
];

const leftSteps = allSteps.filter((s) => s.side === "left");
const rightSteps = allSteps.filter((s) => s.side === "right");

const PETAL =
  "M0,-34 C14,-34 24,-22 24,-12 C24,0 14,18 0,30 C-14,18 -24,0 -24,-12 C-24,-22 -14,-34 0,-34 Z";

function PetalIcon({ num, scale = 1 }) {
  const icons = {
    "01": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <circle cx="0" cy="-6" r="7" />
        <line x1="5" y1="-1" x2="9" y2="3" />
      </g>
    ),
    "02": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <rect x="-8" y="-11" width="16" height="14" rx="2" />
        <line x1="-8" y1="-7" x2="8" y2="-7" />
      </g>
    ),
    "03": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <rect x="-9" y="-10" width="18" height="13" rx="2" />
        <line x1="0" y1="3" x2="0" y2="6" />
      </g>
    ),
    "04": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.5 * scale} strokeLinecap="round">
        <polyline points="-4,-6 -8,-2 -4,2" />
        <polyline points="4,-6 8,-2 4,2" />
      </g>
    ),
    "05": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <rect x="-9" y="-6" width="18" height="12" rx="2" />
        <line x1="-5" y1="0" x2="5" y2="0" />
      </g>
    ),
    "06": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <circle cx="0" cy="0" r="8" />
        <line x1="-3" y1="0" x2="0" y2="3" />
        <line x1="0" y1="3" x2="3" y2="0" />
      </g>
    ),
    "07": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <path d="M-6,-4 L6,4 M-6,4 L6,-4" />
        <circle cx="0" cy="-8" r="3" />
      </g>
    ),
    "08": (
      <g fill="none" stroke="#2dd4bf" strokeWidth={1.3 * scale} strokeLinecap="round">
        <path d="M-5,-5 L5,5 M-5,5 L5,-5" />
        <circle cx="0" cy="0" r="4" />
      </g>
    ),
  };
  return icons[num] || null;
}

PetalIcon.propTypes = {
  num: PropTypes.string.isRequired,
  scale: PropTypes.number,
};

function ModuleWheel({ steps, sizeClass = "w-[210px] h-[210px]" }) {
  const angles = [0, 90, 180, 270];
  const R = 72;
  const sizeMap = {
    "w-32 h-32": { viewBox: "0 0 168 168", cx: 84, cy: 84, r: 64, innerR: 34 },
    "w-40 h-40": { viewBox: "0 0 210 210", cx: 105, cy: 105, r: 80, innerR: 43 },
    "w-[210px] h-[210px]": { viewBox: "0 0 210 210", cx: 105, cy: 105, r: 96, innerR: 46 },
  };
  const dims = sizeMap[sizeClass] || sizeMap["w-[210px] h-[210px]"];
  const { viewBox, cx, cy, r, innerR } = dims;
  const scale = sizeClass === "w-32 h-32" ? 0.8 : sizeClass === "w-40 h-40" ? 1.0 : 1.0;
  return (
    <svg viewBox={viewBox} className={`${sizeClass} shrink-0`} aria-hidden="true">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="1"
        strokeDasharray="4 7"
        opacity=".3"
      />
      <circle cx={cx} cy={cy} r={innerR} fill="#0f2236" stroke="#2dd4bf" strokeWidth="1.5" />
      <circle
        cx={cx}
        cy={cy}
        r={innerR - 6}
        fill="none"
        stroke="#2dd4bf"
        strokeWidth=".5"
        strokeDasharray="2 4"
        opacity=".4"
      />
      {steps.map((step, i) => {
        const angleDeg = angles[i];
        const rad = (angleDeg * Math.PI) / 180;
        const px = cx + R * Math.sin(rad);
        const py = cy - R * Math.cos(rad);
        const sx1 = cx + innerR * Math.sin(rad);
        const sy1 = cy - innerR * Math.cos(rad);
        const sx2 = cx + (innerR + 14) * Math.sin(rad);
        const sy2 = cy - (innerR + 14) * Math.cos(rad);
        return (
          <g key={step.num}>
            <line
              x1={sx1}
              y1={sy1}
              x2={sx2}
              y2={sy2}
              stroke="#2dd4bf"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity=".35"
            />
            <g transform={`translate(${px},${py}) rotate(${angleDeg})`}>
              <path d={PETAL} fill="#111f2e" stroke="#2dd4bf" strokeWidth="1" />
              <g transform={`rotate(${-angleDeg})`}>
                <PetalIcon num={step.num} scale={scale} />
                <text
                  x="0"
                  y={16 * scale + 5}
                  textAnchor="middle"
                  fontSize={(7.5 * scale).toFixed(1)}
                  fontWeight="900"
                  fontFamily="monospace"
                  fill="#2dd4bf"
                >
                  {step.num}
                </text>
              </g>
            </g>
          </g>
        );
      })}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize={(6.5 * scale).toFixed(1)}
        fontWeight="900"
        fontFamily="monospace"
        fill="#2dd4bf"
        letterSpacing="1.5"
      >
        MODULES
      </text>
      <text
        x={cx}
        y={cy + 6}
        textAnchor="middle"
        fontSize={(5 * scale).toFixed(1)}
        fontFamily="monospace"
        fill="#2dd4bf"
        opacity=".5"
      >
        {steps[0].num} – {steps[steps.length - 1].num}
      </text>
    </svg>
  );
}

ModuleWheel.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
  sizeClass: PropTypes.string,
};

function StepItem({ step, side, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, x: side === "left" ? -24 : 24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        ease: "power3.out",
        delay: index * 0.08,
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      }
    );
  }, [side, index]);
  return (
    <div ref={ref} className="flex items-start gap-2.5 group">
      <div className="shrink-0 w-7 h-7 rounded-full border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 flex items-center justify-center text-xxs font-black font-mono text-[#2dd4bf] group-hover:bg-[#2dd4bf]/20 group-hover:border-[#2dd4bf]/70 transition-all duration-200 mt-0.5">
        {step.num}
      </div>
      <div>
        <h3 className="text-xs font-bold text-white leading-snug mb-1">{step.title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

StepItem.propTypes = {
  step: PropTypes.shape({
    num: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  side: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default function SystemSoftwareRoadmap() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const [activeTab, setActiveTab] = useState("left");
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: -14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: subRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const activeSteps = activeTab === "left" ? leftSteps : rightSteps;
  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0d1b2a] py-12 sm:py-14 md:py-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,191,1) 1px,transparent 1px),linear-gradient(90deg,rgba(45,212,191,1) 1px,transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] rounded-full bg-[#2dd4bf]/5 blur-[60px] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div ref={subRef} className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-7 h-2.5 sm:w-8 sm:h-3" fill="none">
                <path d="M0 5h20" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#2dd4bf" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-teal-400">
              System Software
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
          >
            <span className="text-teal-400">Roadmap</span> to Success
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our systematic approach to software development ensures quality and results.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          <button
            onClick={() => setActiveTab("left")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wide transition-all duration-200 ${activeTab === "left" ? "bg-teal-500/20 text-teal-400 border border-teal-500/40" : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20"}`}
          >
            Phase 01–04
          </button>
          <button
            onClick={() => setActiveTab("right")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wide transition-all duration-200 ${activeTab === "right" ? "bg-teal-500/20 text-teal-400 border border-teal-500/40" : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20"}`}
          >
            Phase 05–08
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 md:gap-10">
            <div className="order-1 md:order-none flex justify-center">
              <ModuleWheel
                steps={activeSteps}
                sizeClass="w-32 h-32 md:w-40 md:h-40 lg:w-[210px] lg:h-[210px]"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0 max-w-lg">
              {activeSteps.map((s, i) => (
                <StepItem key={s.num} step={s} side={s.side} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
