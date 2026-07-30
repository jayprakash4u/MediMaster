"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { FONT_FAMILY, BODY } from "@/lib/typography";
import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHEEL_FONT = FONT_FAMILY.sans;
const OUTER_LABEL_RADIUS = 192;
const INNER_LABEL_RADIUS = 122;
const OUTER_LINE_HEIGHT = 10.5;
const INNER_LINE_HEIGHT = 10;
const OUTER_FONT_SIZE = 7.75;
const INNER_FONT_SIZE = 7.25;

const BRAND_COLORS = {
  navy950: { fill: "#0F1F4D", hover: "#0A1638", textColor: "#FFFFFF", textColorMuted: "#C5D7FF" },
  navy800: { fill: "#153087", hover: "#122868", textColor: "#FFFFFF", textColorMuted: "#9AB1FF" },
  navy600: { fill: "#254DC8", hover: "#1A3BA8", textColor: "#FFFFFF", textColorMuted: "#C5D7FF" },
  navy500: { fill: "#3B66E2", hover: "#254DC8", textColor: "#FFFFFF", textColorMuted: "#E0EBFF" },
  teal700: { fill: "#0F766E", hover: "#115E59", textColor: "#FFFFFF", textColorMuted: "#99F6E4" },
  teal600: { fill: "#0D9488", hover: "#0F766E", textColor: "#FFFFFF", textColorMuted: "#99F6E4" },
  teal500: { fill: "#14B8A6", hover: "#0D9488", textColor: "#FFFFFF", textColorMuted: "#CCFDF5" },
  cyan600: { fill: "#0891B2", hover: "#0E7490", textColor: "#FFFFFF", textColorMuted: "#A5F3FC" },
  navy700: { fill: "#1A3BA8", hover: "#153087", textColor: "#FFFFFF", textColorMuted: "#C5D7FF" },
};

function getSegmentMidPoint(index, total, radius, cx = 250, cy = 250) {
  const midAngleDeg = (index * 360) / total - 90 + 360 / total / 2;
  const rad = (midAngleDeg * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
    angle: midAngleDeg,
  };
}

function WheelSegmentPath({ seg, ring, hovered, onHover, onLeave, onTap }) {
  const isHovered = hovered?.id === seg.id && hovered?.ring === ring;

  return (
    <path
      d={seg.path}
      fill={isHovered ? seg.hover : seg.fill}
      className="cursor-pointer outline-none transition-[fill] duration-300 ease-out"
      onMouseEnter={() => onHover({ id: seg.id, ring })}
      onFocus={() => onHover({ id: seg.id, ring })}
      onBlur={onLeave}
      onClick={() => onTap?.({ id: seg.id, ring })}
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
    ...BRAND_COLORS.navy950,
  },
  {
    id: "technology",
    label: ["TECHNOLOGY", "FRAMEWORKS"],
    fullLabel: "Technology Frameworks",
    path: "M250,250 L412,88 A230,230 0 0,1 480,250 Z",
    ...BRAND_COLORS.navy600,
  },
  {
    id: "manufacturing",
    label: ["MANU-", "FACTURING"],
    fullLabel: "Manufacturing Ecosystems",
    path: "M250,250 L480,250 A230,230 0 0,1 412,412 Z",
    ...BRAND_COLORS.teal600,
  },
  {
    id: "banking",
    label: ["BANKING", "& FINANCE"],
    fullLabel: "Banking & Financial Services",
    path: "M250,250 L412,412 A230,230 0 0,1 250,480 Z",
    ...BRAND_COLORS.teal700,
  },
  {
    id: "media",
    label: ["MEDIA", "& DIGITAL"],
    fullLabel: "Media & Entertainment Systems",
    path: "M250,250 L250,480 A230,230 0 0,1 88,412 Z",
    ...BRAND_COLORS.navy800,
  },
  {
    id: "telecom",
    label: ["TELECOM", "INFRA"],
    fullLabel: "Telecom Integration Infrastructure",
    path: "M250,250 L88,412 A230,230 0 0,1 20,250 Z",
    ...BRAND_COLORS.cyan600,
  },
  {
    id: "healthcare",
    label: ["HEALTHCARE"],
    fullLabel: "Healthcare Architecture",
    path: "M250,250 L20,250 A230,230 0 0,1 88,88 Z",
    ...BRAND_COLORS.teal500,
  },
  {
    id: "enterprise",
    label: ["ENTER-", "PRISE"],
    fullLabel: "Enterprise Core Operations",
    path: "M250,250 L88,88 A230,230 0 0,1 250,20 Z",
    ...BRAND_COLORS.navy500,
  },
];

const INNER_SEGMENTS = [
  {
    id: "ip",
    label: ["INTELLECTUAL", "PROPERTY"],
    fullLabel: "Intellectual Property, Assets & Resources",
    path: "M250,250 L250,95 A155,155 0 0,1 405,250 Z",
    ...BRAND_COLORS.navy700,
  },
  {
    id: "accelerators",
    label: ["ACCEL-", "ERATORS", "& LABS"],
    fullLabel: "Accelerators & Innovation Labs",
    path: "M250,250 L405,250 A155,155 0 0,1 250,405 Z",
    ...BRAND_COLORS.teal600,
  },
  {
    id: "frameworks",
    label: ["FRAMEWORKS", "& CONNECTORS"],
    fullLabel: "Frameworks, Migration Tools & Connectors",
    path: "M250,250 L250,405 A155,155 0 0,1 95,250 Z",
    ...BRAND_COLORS.navy600,
  },
  {
    id: "platforms",
    label: ["PLATFORMS", "& COE HUB"],
    fullLabel: "Platforms & Centers of Excellence",
    path: "M250,250 L95,250 A155,155 0 0,1 250,95 Z",
    ...BRAND_COLORS.teal500,
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
  const headerRef = useRef(null);
  const textSideRef = useRef(null);
  const wheelRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const handleSegmentHover = useCallback((segment) => {
    setHovered(segment);
  }, []);

  const handleSegmentTap = useCallback((segment) => {
    setHovered((current) =>
      current?.id === segment.id && current?.ring === segment.ring ? null : segment
    );
  }, []);

  const handleSegmentLeave = useCallback(() => {
    setHovered(null);
  }, []);

  const activeSegment = getSegmentByHover(hovered);

  // ── GSAP scroll animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

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
      className="w-full overflow-hidden border-t border-slate-200/80 bg-[#F8FAFC] py-12 font-sans antialiased sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <SectionHeader
          headerRef={headerRef}
          align="left"
          eyebrow="Innovation Ecosystem"
          title="MediMaster Innovation Ecosystem"
          description="A connected platform of healthcare expertise, technology frameworks, and enterprise operations built around your clinical workflows."
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div
            ref={textSideRef}
            className="order-2 space-y-4 text-left sm:space-y-6 lg:order-1 lg:col-span-5"
          >
            <p
              className={cn(
                "min-h-[1.5rem] text-sm font-semibold tracking-wide transition-all duration-300 sm:text-base",
                activeSegment
                  ? "translate-y-0 text-navy-950 opacity-100"
                  : "text-slate-500 opacity-100 md:-translate-y-1 md:text-transparent md:opacity-0"
              )}
              aria-live="polite"
            >
              {activeSegment?.fullLabel ?? "Tap a segment to explore"}
            </p>

            <div
              className={cn(
                BODY.base,
                "space-y-4 text-sm text-slate-600 sm:space-y-5 sm:text-base"
              )}
            >
              <p>
                Our cloud-native platform integrates cutting-edge technology with deep healthcare
                expertise to deliver seamless practice management solutions.
              </p>
              <p>
                From patient records to billing automation, we provide tools that simplify
                workflows, ensure compliance, and scale with your practice&apos;s growth.
              </p>
            </div>

            <div className="pt-1 sm:pt-2">
              <Button
                href="/contact"
                className="rounded-full px-5 py-2.5 text-xs uppercase tracking-wide sm:px-7 sm:py-3 sm:text-sm"
              >
                Book a Free Demo
              </Button>
            </div>
          </div>

          <div className="order-1 flex w-full flex-col items-center gap-4 lg:order-2 lg:col-span-7">
            <svg
              ref={wheelRef}
              viewBox="0 0 500 500"
              className="h-auto w-full max-w-[280px] select-none drop-shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:max-w-[400px] lg:max-w-[520px]"
              aria-label="Innovation ecosystem wheel"
              onMouseLeave={handleSegmentLeave}
            >
              <defs>
                <clipPath id="hubClip">
                  <circle cx="250" cy="250" r="82" />
                </clipPath>
                <linearGradient id="hubRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#254DC8" />
                  <stop offset="45%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#0F1F4D" />
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
                    onTap={handleSegmentTap}
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
                const { x, y } = getSegmentMidPoint(
                  index,
                  OUTER_SEGMENTS.length,
                  OUTER_LABEL_RADIUS
                );

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
                    onTap={handleSegmentTap}
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
                const { x, y } = getSegmentMidPoint(
                  index,
                  INNER_SEGMENTS.length,
                  INNER_LABEL_RADIUS
                );

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
              <circle cx="250" cy="250" r="78" fill="#F0FDFE" pointerEvents="none" />

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

            <div className="flex w-full gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[...OUTER_SEGMENTS, ...INNER_SEGMENTS].map((seg) => {
                const ring = OUTER_SEGMENTS.some((item) => item.id === seg.id) ? "outer" : "inner";
                const isActive = hovered?.id === seg.id && hovered?.ring === ring;

                return (
                  <button
                    key={`${ring}-${seg.id}`}
                    type="button"
                    onClick={() => handleSegmentTap({ id: seg.id, ring })}
                    className={cn(
                      "shrink-0 rounded-full border px-3 py-1.5 text-xxs font-semibold uppercase tracking-wide transition-colors",
                      isActive
                        ? "border-teal-500 bg-teal-500 text-white"
                        : "border-slate-200 bg-white text-slate-600"
                    )}
                  >
                    {seg.fullLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
