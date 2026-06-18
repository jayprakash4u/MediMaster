"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HEADING, FONT_FAMILY } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data ────────────────────────────────────────────────────────────────────

const WHEEL_FONT = FONT_FAMILY.sans;
const OUTER_LABEL_RADIUS = 192;
const INNER_LABEL_RADIUS = 122;
const OUTER_LINE_HEIGHT = 10.5;
const INNER_LINE_HEIGHT = 10;
const OUTER_FONT_SIZE = 7.75;
const INNER_FONT_SIZE = 7.25;

function getSegmentMidPoint(index, total, radius, cx = 250, cy = 250) {
  const midAngleDeg = (index * 360) / total - 90 + 360 / total / 2;
  const rad = (midAngleDeg * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
    angle: midAngleDeg,
  };
}

function WheelSegmentPath({ seg, ring, hovered, onHover, onLeave }) {
  const isHovered = hovered?.id === seg.id && hovered?.ring === ring;

  return (
    <path
      d={seg.path}
      fill={isHovered ? seg.hover : seg.fill}
      className="cursor-pointer outline-none transition-[fill] duration-300 ease-out"
      onMouseEnter={() => onHover({ id: seg.id, ring })}
      onFocus={() => onHover({ id: seg.id, ring })}
      onBlur={onLeave}
      role="button"
      tabIndex={0}
      aria-label={seg.fullLabel}
    />
  );
}

function getSegmentByHover(hovered) {
  if (!hovered) return null;
  const list = hovered.ring === "outer" ? OUTER_SEGMENTS : INNER_SEGMENTS;
  return list.find((seg) => seg.id === hovered.id) ?? null;
}

function WheelSegmentLabel({
  lines,
  x,
  y,
  fontSize,
  lineHeight,
  primaryColor,
  mutedColor,
  isActive = false,
}) {
  const blockOffset = ((lines.length - 1) * lineHeight) / 2;

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={fontSize}
      fontWeight="800"
      fontFamily={WHEEL_FONT}
      letterSpacing="0.08em"
      pointerEvents="none"
      style={{ transition: "transform 300ms ease" }}
      transform={isActive ? `translate(0, -1) scale(1.04)` : undefined}
    >
      {lines.map((line, li) => (
        <tspan
          key={li}
          x={x}
          dy={li === 0 ? -blockOffset : lineHeight}
          fill={li === 0 ? primaryColor : (mutedColor ?? primaryColor)}
          opacity={li === 0 ? 1 : 0.92}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

const OUTER_SEGMENTS = [
  {
    id: "deep-industry",
    label: ["DEEP", "INDUSTRY", "EXPERTISE"],
    fullLabel: "Deep Industry Expertise",
    path: "M250,250 L250,20 A230,230 0 0,1 412,88 Z",
    fill: "#1E3A8A",
    hover: "#172554",
    textColor: "#FFFFFF",
    textColorMuted: "#BFDBFE",
  },
  {
    id: "technology",
    label: ["TECHNOLOGY", "FRAMEWORKS"],
    fullLabel: "Technology Frameworks",
    path: "M250,250 L412,88 A230,230 0 0,1 480,250 Z",
    fill: "#7C3AED",
    hover: "#5B21B6",
    textColor: "#FFFFFF",
    textColorMuted: "#DDD6FE",
  },
  {
    id: "manufacturing",
    label: ["MANU-", "FACTURING"],
    fullLabel: "Manufacturing Ecosystems",
    path: "M250,250 L480,250 A230,230 0 0,1 412,412 Z",
    fill: "#EA580C",
    hover: "#C2410C",
    textColor: "#FFFFFF",
    textColorMuted: "#FED7AA",
  },
  {
    id: "banking",
    label: ["BANKING", "& FINANCE"],
    fullLabel: "Banking & Financial Services",
    path: "M250,250 L412,412 A230,230 0 0,1 250,480 Z",
    fill: "#059669",
    hover: "#047857",
    textColor: "#FFFFFF",
    textColorMuted: "#A7F3D0",
  },
  {
    id: "media",
    label: ["MEDIA", "& DIGITAL"],
    fullLabel: "Media & Entertainment Systems",
    path: "M250,250 L250,480 A230,230 0 0,1 88,412 Z",
    fill: "#DB2777",
    hover: "#BE185D",
    textColor: "#FFFFFF",
    textColorMuted: "#FBCFE8",
  },
  {
    id: "telecom",
    label: ["TELECOM", "INFRA"],
    fullLabel: "Telecom Integration Infrastructure",
    path: "M250,250 L88,412 A230,230 0 0,1 20,250 Z",
    fill: "#0891B2",
    hover: "#0E7490",
    textColor: "#FFFFFF",
    textColorMuted: "#A5F3FC",
  },
  {
    id: "healthcare",
    label: ["HEALTHCARE"],
    fullLabel: "Healthcare Architecture",
    path: "M250,250 L20,250 A230,230 0 0,1 88,88 Z",
    fill: "#0D9488",
    hover: "#0F766E",
    textColor: "#FFFFFF",
    textColorMuted: "#99F6E4",
  },
  {
    id: "enterprise",
    label: ["ENTER-", "PRISE"],
    fullLabel: "Enterprise Core Operations",
    path: "M250,250 L88,88 A230,230 0 0,1 250,20 Z",
    fill: "#4338CA",
    hover: "#3730A3",
    textColor: "#FFFFFF",
    textColorMuted: "#C7D2FE",
  },
];

const INNER_SEGMENTS = [
  {
    id: "ip",
    label: ["INTELLECTUAL", "PROPERTY"],
    fullLabel: "Intellectual Property, Assets & Resources",
    path: "M250,250 L250,95 A155,155 0 0,1 405,250 Z",
    fill: "#F59E0B",
    hover: "#D97706",
    textColor: "#422006",
    textColorMuted: "#78350F",
  },
  {
    id: "accelerators",
    label: ["ACCEL-", "ERATORS", "& LABS"],
    fullLabel: "Accelerators & Innovation Labs",
    path: "M250,250 L405,250 A155,155 0 0,1 250,405 Z",
    fill: "#8B5CF6",
    hover: "#6D28D9",
    textColor: "#FFFFFF",
    textColorMuted: "#EDE9FE",
  },
  {
    id: "frameworks",
    label: ["FRAMEWORKS", "& CONNECTORS"],
    fullLabel: "Frameworks, Migration Tools & Connectors",
    path: "M250,250 L250,405 A155,155 0 0,1 95,250 Z",
    fill: "#EF4444",
    hover: "#DC2626",
    textColor: "#FFFFFF",
    textColorMuted: "#FEE2E2",
  },
  {
    id: "platforms",
    label: ["PLATFORMS", "& COE HUB"],
    fullLabel: "Platforms & Centers of Excellence",
    path: "M250,250 L95,250 A155,155 0 0,1 250,95 Z",
    fill: "#10B981",
    hover: "#059669",
    textColor: "#042F2E",
    textColorMuted: "#065F46",
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
  const [hovered, setHovered] = useState(null);

  const handleSegmentHover = useCallback((segment) => {
    setHovered(segment);
  }, []);

  const handleSegmentLeave = useCallback(() => {
    setHovered(null);
  }, []);

  const activeSegment = getSegmentByHover(hovered);

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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 font-sans antialiased overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ── LEFT: Text ────────────────────────────────────────────── */}
        <div ref={textSideRef} className="lg:col-span-5 space-y-6 text-left">
          <h2 className={`${HEADING.h2} text-teal-600`}>MediMaster Innovation Ecosystem</h2>

          <p
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${
              activeSegment
                ? "text-slate-800 opacity-100 translate-y-0"
                : "text-transparent opacity-0 -translate-y-1"
            }`}
            aria-live="polite"
          >
            {activeSegment?.fullLabel ?? "Hover a segment to explore"}
          </p>

          <div className="space-y-5 text-gray-700 text-base sm:text-base leading-relaxed font-normal">
            <p>
              Our cloud-native platform integrates cutting-edge technology with deep healthcare
              expertise to deliver seamless practice management solutions.
            </p>
            <p>
              From patient records to billing automation, we provide tools that simplify workflows,
              ensure compliance, and scale with your practice&apos;s growth.
            </p>
          </div>

          <div className="pt-4">
            <button className="px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-base font-bold tracking-wide rounded-md shadow-md transition-colors duration-200 uppercase">
              Book a Free Demo
            </button>
          </div>
        </div>

        {/* ── RIGHT: Wheel (Untouched configuration) ───────────────────────── */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <svg
            ref={wheelRef}
            viewBox="0 0 500 500"
            className="w-full max-w-[520px] h-auto select-none drop-shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
            aria-label="Innovation ecosystem wheel"
            onMouseLeave={handleSegmentLeave}
          >
            <defs>
              <clipPath id="hubClip">
                <circle cx="250" cy="250" r="82" />
              </clipPath>
              <linearGradient id="hubRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="25%" stopColor="#0891B2" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="75%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#DB2777" />
              </linearGradient>
            </defs>

            {/* Outer Ring */}
            <g>
              {OUTER_SEGMENTS.map((seg) => (
                <WheelSegmentPath
                  key={seg.id}
                  seg={seg}
                  ring="outer"
                  hovered={hovered}
                  onHover={handleSegmentHover}
                  onLeave={handleSegmentLeave}
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
            {OUTER_SEGMENTS.map((seg, index) => {
              const { x, y } = getSegmentMidPoint(index, OUTER_SEGMENTS.length, OUTER_LABEL_RADIUS);

              return (
                <WheelSegmentLabel
                  key={`label-${seg.id}`}
                  lines={seg.label}
                  x={x}
                  y={y}
                  fontSize={OUTER_FONT_SIZE}
                  lineHeight={OUTER_LINE_HEIGHT}
                  primaryColor={seg.textColor}
                  mutedColor={seg.textColorMuted}
                  isActive={hovered?.id === seg.id && hovered?.ring === "outer"}
                />
              );
            })}

            {/* Inner Ring */}
            <g>
              {INNER_SEGMENTS.map((seg) => (
                <WheelSegmentPath
                  key={seg.id}
                  seg={seg}
                  ring="inner"
                  hovered={hovered}
                  onHover={handleSegmentHover}
                  onLeave={handleSegmentLeave}
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
            {INNER_SEGMENTS.map((seg, index) => {
              const { x, y } = getSegmentMidPoint(index, INNER_SEGMENTS.length, INNER_LABEL_RADIUS);

              return (
                <WheelSegmentLabel
                  key={`ilabel-${seg.id}`}
                  lines={seg.label}
                  x={x}
                  y={y}
                  fontSize={INNER_FONT_SIZE}
                  lineHeight={INNER_LINE_HEIGHT}
                  primaryColor={seg.textColor}
                  mutedColor={seg.textColorMuted}
                  isActive={hovered?.id === seg.id && hovered?.ring === "inner"}
                />
              );
            })}

            {/* Hub structure */}
            <circle cx="250" cy="250" r="82" fill="white" pointerEvents="none" />
            <circle cx="250" cy="250" r="78" fill="#E0F7FA" pointerEvents="none" />

            {/* MediMaster logo inside hub */}
            <clipPath id="hubLogoClip">
              <circle cx="250" cy="232" r="26" />
            </clipPath>
            <image
              href="/brand/logo.png"
              x="224"
              y="206"
              width="52"
              height="52"
              clipPath="url(#hubLogoClip)"
              preserveAspectRatio="xMidYMid meet"
              pointerEvents="none"
            />

            {/* Center Hub text labels */}
            <text
              x="250"
              y="262"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontWeight="800"
              fill="#0D9488"
              fontFamily={WHEEL_FONT}
              letterSpacing="0.14em"
              pointerEvents="none"
            >
              <tspan x="250" dy="0">
                INNOVATION
              </tspan>
              <tspan
                x="250"
                dy="13"
                fontSize="7.5"
                fontWeight="700"
                fill="#64748B"
                letterSpacing="0.18em"
              >
                ECOSYSTEM
              </tspan>
            </text>

            <circle
              cx="250"
              cy="250"
              r="82"
              fill="none"
              stroke="url(#hubRingGradient)"
              strokeWidth="2.5"
              pointerEvents="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
