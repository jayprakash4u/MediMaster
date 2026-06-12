"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HEADING, COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data ────────────────────────────────────────────────────────────────────

const OUTER_SEGMENTS = [
  {
    id: "deep-industry",
    label: ["DEEP", "INDUSTRY", "EXPERTISE"],
    fullLabel: "Deep Industry Expertise",
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
        }
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

  const outerFill = (seg) => (hoveredId === seg.id ? seg.hover : seg.fill);
  const innerFill = (seg) => (hoveredId === seg.id ? seg.hover : seg.fill);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 font-sans antialiased overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ── LEFT: Text ────────────────────────────────────────────── */}
        <div ref={textSideRef} className="lg:col-span-5 space-y-6 text-left">
          <h2 className={`${HEADING.h2} text-teal-600`}>
            MediMaster Innovation Ecosystem
          </h2>

          <div className="space-y-5 text-gray-700 text-base sm:text-base leading-relaxed font-normal">
            <p>
              Our cloud-native platform integrates cutting-edge technology with deep healthcare expertise
              to deliver seamless practice management solutions.
            </p>
            <p>
              From patient records to billing automation, we provide tools that simplify workflows,
              ensure compliance, and scale with your practice's growth.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
            <button className="px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-base font-bold tracking-wide rounded-md shadow-md transition-colors duration-200 uppercase">
              Book a Free Demo
            </button>

            {/* Dynamic hover indicator aligned neatly near the button actions */}
            <div className="min-h-[44px] flex items-center transition-all duration-300">
              {activeLabel && (
                <div className="px-4 py-2 bg-teal-50/80 border border-teal-100 rounded-lg backdrop-blur-sm animate-fade-in">
                  <p className="text-xxs font-bold text-teal-700 uppercase tracking-wider mb-0.5">
                    Selected Focus Area
                  </p>
                  <p className="text-sm font-semibold text-slate-800">{activeLabel}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Wheel (Untouched configuration) ───────────────────────── */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <svg
            ref={wheelRef}
            viewBox="0 0 500 500"
            className="w-full max-w-[520px] h-auto select-none drop-shadow-[0_20px_50px_rgba(18,40,104,0.15)]"
            aria-label="Innovation ecosystem wheel"
          >
            <defs>
              <clipPath id="hubClip">
                <circle cx="250" cy="250" r="70" />
              </clipPath>
            </defs>

            {/* Outer Ring */}
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

            {/* Inner Ring */}
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

            {/* Hub structure */}
            <circle cx="250" cy="250" r="82" fill="white" pointerEvents="none" />
            <circle cx="250" cy="250" r="78" fill="#E0F7FA" pointerEvents="none" />

            {/* MediMaster logo inside hub */}
            <clipPath id="hubClip">
              <circle cx="250" cy="232" r="26" />
            </clipPath>
            <image
              href="/brand/logo.png"
              x="224"
              y="206"
              width="52"
              height="52"
              clipPath="url(#hubClip)"
              preserveAspectRatio="xMidYMid meet"
              pointerEvents="none"
            />

            {/* Center Hub text labels */}
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
