"use client";

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leftSteps = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "Understand your brand, objectives, target audience, and design requirements",
  },
  {
    num: "02",
    title: "Research & Inspiration",
    desc: "Study competitor designs, gather inspiration, and define visual direction",
  },
  {
    num: "03",
    title: "Concept Development",
    desc: "Create initial concepts, mood boards, and design exploration",
  },
  {
    num: "04",
    title: "Design Refinement",
    desc: "Refine chosen concepts based on feedback and create polished designs",
  },
];

const rightSteps = [
  {
    num: "05",
    title: "Revisions & Feedback",
    desc: "Incorporate feedback and make necessary adjustments to designs",
  },
  {
    num: "06",
    title: "Final Production",
    desc: "Prepare final files in all required formats for print and digital use",
  },
  {
    num: "07",
    title: "Delivery & Handoff",
    desc: "Provide all source files, guidelines, and brand assets",
  },
  {
    num: "08",
    title: "Post-Delivery Support",
    desc: "Make minor adjustments and provide ongoing design support",
  },
];

const roadmapTabs = [
  { id: "left", label: "Discovery", steps: leftSteps },
  { id: "right", label: "Production", steps: rightSteps },
];

const PETAL =
  "M0,-34 C14,-34 24,-22 24,-12 C24,0 14,18 0,30 C-14,18 -24,0 -24,-12 C-24,-22 -14,-34 0,-34 Z";

function PetalIcon({ num }) {
  const icons = {
    "01": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <circle cx="0" cy="-6" r="7" />
        <line x1="5" y1="-1" x2="9" y2="3" />
      </g>
    ),
    "02": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <rect x="-8" y="-11" width="16" height="14" rx="2" />
        <line x1="-8" y1="-7" x2="8" y2="-7" />
      </g>
    ),
    "03": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <rect x="-9" y="-10" width="18" height="13" rx="2" />
        <line x1="0" y1="3" x2="0" y2="6" />
      </g>
    ),
    "04": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="-4,-6 -8,-2 -4,2" />
        <polyline points="4,-6 8,-2 4,2" />
      </g>
    ),
    "05": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <rect x="-9" y="-6" width="18" height="12" rx="2" />
        <line x1="-5" y1="0" x2="5" y2="0" />
      </g>
    ),
    "06": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <circle cx="0" cy="0" r="8" />
        <line x1="-3" y1="0" x2="0" y2="3" />
        <line x1="0" y1="3" x2="3" y2="0" />
      </g>
    ),
    "07": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <path d="M-6,-4 L6,4 M-6,4 L6,-4" />
        <circle cx="0" cy="-8" r="3" />
      </g>
    ),
    "08": (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.3" strokeLinecap="round">
        <path d="M-5,-5 L5,5 M-5,5 L5,-5" />
        <circle cx="0" cy="0" r="4" />
      </g>
    ),
  };
  return icons[num] || null;
}

PetalIcon.propTypes = {
  num: PropTypes.string.isRequired,
};

function ModuleWheel({ steps }) {
  const angles = [0, 90, 180, 270];
  const R = 72;
  return (
    <svg
      width="210"
      height="210"
      viewBox="0 0 210 210"
      className="w-32 h-32 md:w-40 md:h-40 lg:w-[210px] lg:h-[210px] shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="105"
        cy="105"
        r="96"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="1"
        strokeDasharray="4 7"
        opacity=".3"
      />
      <circle cx="105" cy="105" r="46" fill="#0f2236" stroke="#2dd4bf" strokeWidth="1.5" />
      <circle
        cx="105"
        cy="105"
        r="40"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth=".5"
        strokeDasharray="2 4"
        opacity=".4"
      />
      {steps.map((step, i) => {
        const angleDeg = angles[i];
        const rad = (angleDeg * Math.PI) / 180;
        const px = 105 + R * Math.sin(rad);
        const py = 105 - R * Math.cos(rad);
        const sx1 = 105 + 46 * Math.sin(rad);
        const sy1 = 105 - 46 * Math.cos(rad);
        const sx2 = 105 + 60 * Math.sin(rad);
        const sy2 = 105 - 60 * Math.cos(rad);
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
                <PetalIcon num={step.num} />
                <text
                  x="0"
                  y="21"
                  textAnchor="middle"
                  fontSize="7.5"
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
        x="105"
        y="101"
        textAnchor="middle"
        fontSize="7"
        fontWeight="900"
        fontFamily="monospace"
        fill="#2dd4bf"
        letterSpacing="1.5"
      >
        MODULES
      </text>
      <text
        x="105"
        y="113"
        textAnchor="middle"
        fontSize="5.5"
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
      <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 flex items-center justify-center text-xxs sm:text-xs font-black font-mono text-[#2dd4bf] group-hover:bg-[#2dd4bf]/20 group-hover:border-[#2dd4bf]/70 transition-all duration-200 mt-0.5">
        {step.num}
      </div>
      <div>
        <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug mb-1">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
          {step.desc}
        </p>
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

GraphicDesignRoadmap.propTypes = {};

export default function GraphicDesignRoadmap() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const [activeTab, setActiveTab] = useState("left");
  const activeModule = roadmapTabs.find((tab) => tab.id === activeTab) || roadmapTabs[0];

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
        <div className="text-center mb-10">
          <div ref={subRef} className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#2dd4bf" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase text-teal-400">
              Graphic Design
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span className="text-teal-400">Roadmap</span> to Success
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our systematic approach to graphic design ensures quality and results.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 p-1">
              {roadmapTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition ${
                    activeTab === tab.id
                      ? "bg-[#2dd4bf] text-[#0d1b2a]"
                      : "text-slate-300 hover:bg-[#2dd4bf]/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:hidden">
            <ModuleWheel steps={activeModule.steps} />
            <div className="w-full space-y-3">
              {activeModule.steps.map((s, i) => (
                <StepItem
                  key={s.num}
                  step={s}
                  side={activeModule.id === "left" ? "left" : "right"}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-start gap-0">
            <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
              <ModuleWheel steps={leftSteps} />
              <div className="flex flex-col gap-3 lg:gap-4 flex-1 min-w-0">
                {leftSteps.map((s, i) => (
                  <StepItem key={s.num} step={s} side="left" index={i} />
                ))}
              </div>
            </div>
            <div className="self-stretch w-px mx-3 lg:mx-4 bg-gradient-to-b from-transparent via-[#2dd4bf]/25 to-transparent shrink-0" />
            <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
              <div className="flex flex-col gap-3 lg:gap-4 flex-1 min-w-0">
                {rightSteps.map((s, i) => (
                  <StepItem key={s.num} step={s} side="right" index={i} />
                ))}
              </div>
              <ModuleWheel steps={rightSteps} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
