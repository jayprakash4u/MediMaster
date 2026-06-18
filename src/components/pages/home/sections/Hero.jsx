"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  Activity,
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Pill,
} from "lucide-react";

const slides = [
  {
    src: "/home/homeherosction/a_professional_hero_banner_image_for_a_hospital_management_system._the_scene.png",
    alt: "Hospital Management System",
    badge: "Hospital Management",
    title: "Smart Hospital",
    highlight: "Management Software",
    description: "Unify OPD, IPD, billing, pharmacy & lab workflows in one secure platform.",
    icon: Building2,
    accent: "from-teal-500 to-aqua-500",
  },
  {
    src: "/home/homeherosction/a_professional_hero_banner_image_for_a_pharmacy_management_system._the_scene.png",
    alt: "Pharmacy Management System",
    badge: "Pharmacy Management",
    title: "Modern Pharmacy",
    highlight: "Inventory & Billing",
    description: "Track stock, prescriptions, and sales with real-time pharmacy intelligence.",
    icon: Pill,
    accent: "from-teal-400 to-teal-500",
  },
  {
    src: "/home/homeherosction/a_high_quality_professional_hero_banner_image_for_a_pathology_management.png",
    alt: "Pathology Management System",
    badge: "Pathology Management",
    title: "Advanced Lab",
    highlight: "Diagnostics Suite",
    description: "Automate sample tracking, reports, and result delivery for faster diagnostics.",
    icon: FlaskConical,
    accent: "from-aqua-500 to-teal-500",
  },
];

const ECG_PATH =
  "M0,40 L40,40 L55,40 L68,18 L82,62 L96,40 L130,40 L145,28 L160,52 L175,40 L210,40 L225,12 L240,68 L255,40 L290,40 L305,22 L320,58 L335,40 L370,40 L385,30 L400,50 L415,40 L450,40 L465,15 L480,65 L495,40 L530,40 L550,40 L565,25 L580,55 L595,40 L630,40 L645,32 L660,48 L675,40 L710,40 L730,40";

const FLOATING_ICONS_DESKTOP = [
  { Icon: Pill, top: "8%", right: "10%", delay: "1.5s", size: 18 },
  { Icon: FlaskConical, top: "72%", right: "8%", delay: "0.8s", size: 18 },
  { Icon: Building2, top: "78%", left: "8%", delay: "2.2s", size: 17 },
];

const FLOATING_ICONS_MOBILE = [
  { Icon: Activity, top: "14%", right: "6%", delay: "0s", size: 16 },
  { Icon: Pill, top: "72%", right: "8%", delay: "1.2s", size: 15 },
];

function GsapEcgMonitor() {
  const rootRef = useRef(null);
  const drawRef = useRef(null);
  const scrollRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const path = drawRef.current;
    if (!path || !rootRef.current) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "none",
        repeat: -1,
        repeatDelay: 0.6,
      });

      if (scrollRef.current) {
        gsap.to(scrollRef.current, {
          xPercent: -50,
          duration: 10,
          ease: "none",
          repeat: -1,
        });
      }

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          opacity: 0.35,
          scale: 0.85,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute bottom-6 left-3 right-3 z-30 overflow-hidden rounded-2xl border border-teal-500/30 bg-navy-950/85 shadow-lg shadow-teal-500/10 backdrop-blur-md"
    >
      <div className="flex items-center justify-between border-b border-teal-500/20 px-4 py-2">
        <div className="flex items-center gap-2">
          <span ref={dotRef} className="h-2 w-2 rounded-full bg-teal-500 shadow-glowTeal" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400">
            Live Vitals Monitor
          </span>
        </div>
        <span className="font-mono text-[10px] text-aqua-500/80">72 BPM</span>
      </div>

      <div className="relative h-[72px] overflow-hidden px-1 py-2">
        <div className="absolute inset-0 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-teal-500/30"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-teal-500/20"
              style={{ top: `${(i + 1) * 20}%` }}
            />
          ))}
        </div>

        {/* GSAP draw trace */}
        <svg
          viewBox="0 0 730 80"
          className="relative z-10 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={drawRef}
            d={ECG_PATH}
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ecgGlow)"
          />
          <defs>
            <filter id="ecgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* GSAP scrolling secondary trace */}
        <div ref={scrollRef} className="absolute inset-y-2 left-0 flex w-[200%] opacity-50">
          {[0, 1].map((copy) => (
            <svg
              key={copy}
              viewBox="0 0 730 80"
              className="h-full w-1/2 shrink-0"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={ECG_PATH}
                fill="none"
                stroke="#06B6D4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

function BottomEcgStrip() {
  const stripRef = useRef(null);

  useEffect(() => {
    if (!stripRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        xPercent: -50,
        duration: 12,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute bottom-14 left-0 right-0 z-[25] h-14 overflow-hidden opacity-60 sm:bottom-16 sm:opacity-70 lg:bottom-[4.5rem] lg:h-16 lg:opacity-80">
      <div ref={stripRef} className="flex h-full w-[200%]">
        {[0, 1].map((copy) => (
          <svg
            key={copy}
            viewBox="0 0 730 80"
            className="h-full w-1/2 shrink-0"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={ECG_PATH}
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

function MedicalPulse({ centered = true, className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 ${
        centered ? "left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2" : ""
      } ${className}`}
    >
      <div className="relative flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
        <span className="absolute inset-0 rounded-full border-2 border-teal-500/60 animate-pulse-ring" />
        <span
          className="absolute inset-0 rounded-full border-2 border-aqua-500/45 animate-pulse-ring"
          style={{ animationDelay: "1.4s" }}
        />
        <span className="absolute inset-[-14px] rounded-full border border-dashed border-teal-500/35 animate-spin-slow" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-teal-500/70 bg-teal-500/20 shadow-glowTeal backdrop-blur-sm animate-heartbeat md:h-20 md:w-20">
          <Activity className="h-7 w-7 text-teal-300 md:h-8 md:w-8" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

function FloatingIcons({ icons }) {
  return icons.map(({ Icon, top, left, right, delay, size }, i) => (
    <div
      key={i}
      className="pointer-events-none absolute z-20 animate-float-slow rounded-xl border border-white/20 bg-navy-900/40 p-3 text-teal-400 shadow-lg shadow-navy-950/40 backdrop-blur-sm"
      style={{ top, left, right, animationDelay: delay }}
    >
      <Icon size={size} strokeWidth={1.75} />
    </div>
  ));
}

function DesktopVisualPanel() {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, scale: 0.92, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: "power3.out", delay: 0.3 }
      );
    }, panelRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panelRef}
      className="pointer-events-none relative hidden h-full min-h-[300px] w-full lg:block"
    >
      <div className="absolute inset-0 rounded-3xl border border-teal-500/25 bg-gradient-to-br from-teal-500/15 via-navy-950/50 to-aqua-500/10 shadow-[inset_0_0_40px_rgba(20,184,166,0.08)]" />
      <div className="absolute inset-5 rounded-full border border-dashed border-teal-500/35 animate-spin-slow" />
      <div className="absolute inset-12 rounded-full border-2 border-aqua-500/25" />
      <FloatingIcons icons={FLOATING_ICONS_DESKTOP} />
      <MedicalPulse />
      <GsapEcgMonitor />
    </div>
  );
}

function MobileVisualPanel() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-[15] w-[40%] sm:w-[36%] lg:hidden">
      <FloatingIcons icons={FLOATING_ICONS_MOBILE} />
      <MedicalPulse
        centered={false}
        className="right-[10%] top-[38%] -translate-y-1/2 scale-[0.72] sm:scale-90"
      />
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const slide = slides[current];
  const SlideIcon = slide.icon;

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const isFirstSlide = useRef(true);
  useEffect(() => {
    if (isFirstSlide.current) {
      isFirstSlide.current = false;
      return;
    }
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.95, stagger: 0.12, ease: "power2.out" }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [current]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[calc(100svh-4rem)] min-h-[400px] overflow-hidden bg-navy-950 font-sans sm:h-[calc(100svh-6.25rem)]"
    >
      {slides.map((item, index) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-all duration-[2400ms] ease-in-out ${
            index === current ? "opacity-100 scale-100 z-[1]" : "opacity-0 scale-105 z-0"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover object-[center_28%] sm:object-[center_32%] md:object-[center_35%]"
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-navy-950/92 via-navy-900/55 to-navy-950/25" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-navy-950/88 via-transparent to-navy-950/25" />

      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-24 overflow-hidden opacity-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-scan-line" />
      </div>

      <MobileVisualPanel />
      <BottomEcgStrip />

      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:px-6 lg:grid-cols-2">
        <div ref={contentRef} className="relative z-10 max-w-2xl lg:pr-4">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-1 backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 sm:text-xs">
              {slide.badge}
            </span>
          </div>

          <h1 className="text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {slide.title}{" "}
            <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
              {slide.highlight}
            </span>
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base md:text-lg">
            {slide.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-glowTeal transition hover:bg-teal-600 sm:px-6 sm:py-3"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-navy-900/40 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-teal-500/50 hover:bg-navy-800/60 sm:px-6 sm:py-3"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-5 hidden items-center gap-3 rounded-2xl border border-navy-700/50 bg-navy-900/40 px-4 py-3 backdrop-blur-md sm:inline-flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
              <SlideIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">{slide.badge}</p>
              <p className="text-[11px] text-slate-400">
                Trusted by healthcare providers across Nepal
              </p>
            </div>
          </div>
        </div>

        <DesktopVisualPanel />
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between sm:bottom-5 sm:left-6 sm:right-6">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current ? "w-8 bg-teal-500" : "w-1.5 bg-white/35 hover:bg-teal-400/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-700/60 bg-navy-900/50 text-white backdrop-blur-sm transition hover:border-teal-500/50 hover:bg-navy-800/70 sm:h-9 sm:w-9"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-700/60 bg-navy-900/50 text-white backdrop-blur-sm transition hover:border-teal-500/50 hover:bg-navy-800/70 sm:h-9 sm:w-9"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
