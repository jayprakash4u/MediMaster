"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data ────────────────────────────────────────────────────────────────────

const OUTER_SEGMENTS = [
  {
    id: "deep-industry",
    label: ["DEEP", "INDUSTRY", "EXPERTISE"],
    fullLabel: "Deep Industry Expertise",
    // 315°–360°  mid = 337.5°  →  sin=-0.383, cos=+0.924  r=192
    lx: 176,
    ly: 68,
    path: "M250,250 L250,20 A230,230 0 0,1 412,88 Z",
    fill: "#122868",
    hover: "#1A3BA8",
  },
  {
    id: "technology",
    label: ["TECHNOLOGY", "FRAMEWORKS"],
    fullLabel: "Technology Frameworks",
    // 0°–45°  mid = 22.5°  →  sin=+0.383, cos=+0.924  r=192
    lx: 324,
    ly: 68,
    path: "M250,250 L412,88 A230,230 0 0,1 480,250 Z",
    fill: "#1A3BA8",
    hover: "#254DC8",
  },
  {
    id: "manufacturing",
    label: ["MANU-", "FACTURING"],
    fullLabel: "Manufacturing Ecosystems",
    // 45°–90°  mid = 67.5°  →  sin=+0.924, cos=+0.383  r=192
    lx: 432,
    ly: 172,
    path: "M250,250 L480,250 A230,230 0 0,1 412,412 Z",
    fill: "#122868",
    hover: "#1A3BA8",
  },
  {
    id: "banking",
    label: ["BANKING", "& FINANCE"],
    fullLabel: "Banking & Financial Services",
    // 90°–135°  mid = 112.5°  →  sin=+0.924, cos=-0.383  r=192
    lx: 432,
    ly: 320,
    path: "M250,250 L412,412 A230,230 0 0,1 250,480 Z",
    fill: "#1A3BA8",
    hover: "#254DC8",
  },
  {
    id: "media",
    label: ["MEDIA", "& DIGITAL"],
    fullLabel: "Media & Entertainment Systems",
    // 135°–180°  mid = 157.5°  →  sin=+0.383, cos=-0.924  r=192
    lx: 324,
    ly: 432,
    path: "M250,250 L250,480 A230,230 0 0,1 88,412 Z",
    fill: "#122868",
    hover: "#1A3BA8",
  },
  {
    id: "telecom",
    label: ["TELECOM", "INFRA"],
    fullLabel: "Telecom Integration Infrastructure",
    // 180°–225°  mid = 202.5°  →  sin=-0.383, cos=-0.924  r=192
    lx: 176,
    ly: 432,
    path: "M250,250 L88,412 A230,230 0 0,1 20,250 Z",
    fill: "#1A3BA8",
    hover: "#254DC8",
  },
  {
    id: "healthcare",
    label: ["HEALTH-", "CARE"],
    fullLabel: "Healthcare Architecture",
    // 225°–270°  mid = 247.5°  →  sin=-0.924, cos=-0.383  r=192
    lx: 68,
    ly: 320,
    path: "M250,250 L20,250 A230,230 0 0,1 88,88 Z",
    fill: "#122868",
    hover: "#1A3BA8",
  },
  {
    id: "enterprise",
    label: ["ENTER-", "PRISE"],
    fullLabel: "Enterprise Core Operations",
    // 270°–315°  mid = 292.5°  →  sin=-0.924, cos=+0.383  r=192
    lx: 68,
    ly: 172,
    path: "M250,250 L88,88 A230,230 0 0,1 250,20 Z",
    fill: "#1A3BA8",
    hover: "#254DC8",
  },
];

const INNER_SEGMENTS = [
  {
    id: "ip",
    label: ["INTELLECTUAL", "PROPERTY"],
    fullLabel: "Intellectual Property, Assets & Resources",
    lx: 250,
    ly: 126,
    path: "M250,250 L250,95 A155,155 0 0,1 405,250 Z",
    fill: "#14B8A6",
    hover: "#2DD4BF",
    textColor: "#042F2E",
  },
  {
    id: "accelerators",
    label: ["ACCEL-", "ERATORS", "& LABS"],
    fullLabel: "Accelerators & Innovation Labs",
    lx: 369,
    ly: 246,
    path: "M250,250 L405,250 A155,155 0 0,1 250,405 Z",
    fill: "#0D9488",
    hover: "#14B8A6",
    textColor: "#F0FDFE",
  },
  {
    id: "frameworks",
    label: ["FRAMEWORKS", "& CONNECTORS"],
    fullLabel: "Frameworks, Migration Tools & Connectors",
    lx: 250,
    ly: 363,
    path: "M250,250 L250,405 A155,155 0 0,1 95,250 Z",
    fill: "#14B8A6",
    hover: "#2DD4BF",
    textColor: "#042F2E",
  },
  {
    id: "platforms",
    label: ["PLATFORMS", "& COE", "HUB"],
    fullLabel: "Platforms & Centers of Excellence",
    lx: 131,
    ly: 246,
    path: "M250,250 L95,250 A155,155 0 0,1 250,95 Z",
    fill: "#0D9488",
    hover: "#14B8A6",
    textColor: "#F0FDFE",
  },
];

// Divider line endpoints for outer ring (8 spokes)
const OUTER_SPOKES = [
  [250, 20],
  [412, 88],
  [480, 250],
  [412, 412],
  [250, 480],
  [88, 412],
  [20, 250],
  [88, 88],
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function InnovationWheelSection() {
  const sectionRef = useRef(null);
  const textSideRef = useRef(null);
  const wheelRef = useRef(null);
  const [activeLabel, setActiveLabel] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // ── GSAP scroll animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textSideRef.current?.children ?? [], {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(
        wheelRef.current,
        { scale: 0.85, opacity: 0, rotate: -30 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Hover handlers ──
  const onEnter = (id, fullLabel) => {
    setHoveredId(id);
    setActiveLabel(fullLabel);
  };
  const onLeave = () => {
    setHoveredId(null);
    setActiveLabel(null);
  };

  // ── Segment fill helper ──
  const outerFill = (seg) => (hoveredId === seg.id ? seg.hover : seg.fill);
  const innerFill = (seg) => (hoveredId === seg.id ? seg.hover : seg.fill);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50/50 py-4 md:py-6 font-sans text-gray-600 antialiased overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* ── LEFT: Text ─────────────────────────────────────────────────── */}
        <div ref={textSideRef} className="lg:col-span-5 space-y-4">
          <div className="space-y-2">
            <span className="text-teal-600 font-bold tracking-[0.2em] text-xs uppercase block">
              Innovation
            </span>
            <h2 className="text-3xl font-black text-navy-950 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Innovation is at the heart of everything we do
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            We engineer robust analytical tools, dynamic system pipelines, and
            secure platforms that leverage the latest cloud frameworks. By
            unifying our verified digital assets with deep ecosystem knowledge,
            we reward creative experimentation to deliver high-performance,
            scalable solutions built around your evolving infrastructure needs.
          </p>

          {/* Active hover feedback */}
          <div className="hidden lg:block pt-2 min-h-[40px] transition-all duration-300">
            {activeLabel ? (
              <div className="p-3 bg-teal-50 border border-teal-100 rounded-xl max-w-xs">
                <p className="text-[10px] font-bold text-teal-700 uppercase tracking-widest">
                  Active Sector Focus
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-0.5">
                  {activeLabel}
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 italic">
                Hover over sections of the ecosystem wheel to explore each
                operational field.
              </p>
            )}
          </div>
        </div>

        {/* ── RIGHT: Wheel ────────────────────────────────────────────────── */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <svg
            ref={wheelRef}
            viewBox="0 0 500 500"
            className="w-full max-w-[520px] h-auto select-none drop-shadow-[0_20px_50px_rgba(18,40,104,0.18)]"
            aria-label="Innovation ecosystem wheel"
          >
            <defs>
              <clipPath id="hubClip">
                <circle cx="250" cy="250" r="70" />
              </clipPath>
            </defs>

            {/* ── OUTER RING ─────────────────────────────────────────────── */}
            <g>
              {OUTER_SEGMENTS.map((seg) => (
                <path
                  key={seg.id}
                  d={seg.path}
                  fill={outerFill(seg)}
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={() => onEnter(seg.id, seg.fullLabel)}
                  onMouseLeave={onLeave}
                />
              ))}
            </g>

            {/* Outer spoke dividers */}
            {OUTER_SPOKES.map(([x2, y2], i) => (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={x2}
                y2={y2}
                stroke="white"
                strokeWidth="1.5"
                pointerEvents="none"
              />
            ))}
            <circle
              cx="250"
              cy="250"
              r="230"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              pointerEvents="none"
            />

            {/* Outer segment labels */}
            {OUTER_SEGMENTS.map((seg) => (
              <g key={`label-${seg.id}`} pointerEvents="none">
                {seg.label.map((line, li) => (
                  <text
                    key={li}
                    x={seg.lx}
                    y={seg.ly + li * 11}
                    textAnchor="middle"
                    fontSize="8.5"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    fill={
                      seg.fill === "#1A3BA8" || seg.fill === "#122868"
                        ? li === 0
                          ? "white"
                          : "#C5D7FF"
                        : "white"
                    }
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}

            {/* ── INNER RING ─────────────────────────────────────────────── */}
            <g>
              {INNER_SEGMENTS.map((seg) => (
                <path
                  key={seg.id}
                  d={seg.path}
                  fill={innerFill(seg)}
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={() => onEnter(seg.id, seg.fullLabel)}
                  onMouseLeave={onLeave}
                />
              ))}
            </g>

            {/* Inner dividers */}
            <line
              x1="250"
              y1="95"
              x2="250"
              y2="405"
              stroke="white"
              strokeWidth="1.5"
              pointerEvents="none"
            />
            <line
              x1="95"
              y1="250"
              x2="405"
              y2="250"
              stroke="white"
              strokeWidth="1.5"
              pointerEvents="none"
            />
            <circle
              cx="250"
              cy="250"
              r="155"
              fill="none"
              stroke="white"
              strokeWidth="2"
              pointerEvents="none"
            />

            {/* Inner segment labels */}
            {INNER_SEGMENTS.map((seg) => (
              <g key={`ilabel-${seg.id}`} pointerEvents="none">
                {seg.label.map((line, li) => (
                  <text
                    key={li}
                    x={seg.lx}
                    y={seg.ly + li * 11}
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    fill={seg.textColor}
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}

            {/* ── HUB ────────────────────────────────────────────────────── */}
            {/* White backing */}
            <circle
              cx="250"
              cy="250"
              r="82"
              fill="white"
              pointerEvents="none"
            />
            {/* Teal fill */}
            <circle
              cx="250"
              cy="250"
              r="78"
              fill="#E0F7FA"
              pointerEvents="none"
            />

            {/* Icon circle */}
            <circle
              cx="250"
              cy="232"
              r="24"
              fill="#14B8A6"
              pointerEvents="none"
            />
            <text
              x="250"
              y="239"
              textAnchor="middle"
              fontSize="20"
              fill="white"
              fontFamily="system-ui"
              pointerEvents="none"
            >
              ⚙
            </text>

            {/* Hub text */}
            <text
              x="250"
              y="265"
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="700"
              fill="#0D9488"
              fontFamily="system-ui, sans-serif"
              pointerEvents="none"
            >
              INNOVATION
            </text>
            <text
              x="250"
              y="278"
              textAnchor="middle"
              fontSize="8"
              fill="#64748B"
              fontFamily="system-ui, sans-serif"
              pointerEvents="none"
            >
              ECOSYSTEM
            </text>

            {/* Hub border */}
            <circle
              cx="250"
              cy="250"
              r="82"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2.5"
              pointerEvents="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
