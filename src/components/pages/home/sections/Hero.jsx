"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  ArrowRight,
  Activity,
  Building2,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { HEADING } from "@/lib/typography";
import MedicalTrustBar from "@/components/pages/home/shared/MedicalTrustBar";
import { MEDICAL_ECG_PATH } from "@/lib/medical-visuals";

const AUTOPLAY_MS = 9000;

const slides = [
  {
    id: "hospital",
    badge: "Hospital Management",
    title: "Smart Hospital",
    highlight: "Management Software",
    description: "Unify OPD, IPD, billing, pharmacy & lab workflows in one secure platform.",
    icon: Building2,
    imageSrc: "/home/homeherosction/Gemini_Generated_Image_q8pu14q8pu14q8pu.png",
    imageAlt: "Hospital Management System",
    theme: {
      glow: "from-indigo-500/25 via-transparent to-blue-500/10",
      atmosphere: "bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/5",
      ring: "ring-indigo-400/30",
      badge: "border-indigo-400/30 bg-indigo-500/10 text-indigo-300",
      dot: "bg-indigo-400",
      accentBar: "bg-indigo-400",
      tab: "data-[active=true]:border-indigo-400/50 data-[active=true]:bg-indigo-500/15 data-[active=true]:text-indigo-200",
    },
  },
  {
    id: "pharmacy",
    badge: "Pharmacy Management",
    title: "Modern Pharmacy",
    highlight: "Inventory & Billing",
    description: "Track stock, prescriptions, and sales with real-time pharmacy intelligence.",
    icon: Pill,
    imageSrc: "/home/homeherosction/Gemini_Generated_Image_xx2ofxx2ofxx2ofx.png",
    imageAlt: "Pharmacy Management System",
    theme: {
      glow: "from-emerald-500/25 via-transparent to-teal-500/10",
      atmosphere: "bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5",
      ring: "ring-emerald-400/30",
      badge: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
      dot: "bg-emerald-400",
      accentBar: "bg-emerald-400",
      tab: "data-[active=true]:border-emerald-400/50 data-[active=true]:bg-emerald-500/15 data-[active=true]:text-emerald-200",
    },
  },
  {
    id: "pathology",
    badge: "Pathology Management",
    title: "Advanced Lab",
    highlight: "Diagnostics Suite",
    description: "Automate sample tracking, reports, and result delivery for faster diagnostics.",
    icon: FlaskConical,
    imageSrc: "/home/homeherosction/Gemini_Generated_Image_boqeuzboqeuzboqe.png",
    imageAlt: "Pathology Management System",
    theme: {
      glow: "from-cyan-500/25 via-transparent to-sky-500/10",
      atmosphere: "bg-gradient-to-br from-cyan-500/10 via-transparent to-sky-500/5",
      ring: "ring-cyan-400/30",
      badge: "border-cyan-400/30 bg-cyan-500/10 text-cyan-300",
      dot: "bg-cyan-400",
      accentBar: "bg-cyan-400",
      tab: "data-[active=true]:border-cyan-400/50 data-[active=true]:bg-cyan-500/15 data-[active=true]:text-cyan-200",
    },
  },
  {
    id: "clinic",
    badge: "Clinic Management",
    title: "Digitize Your",
    highlight: "Clinic Operations",
    description:
      "Empower doctors and staff with intuitive dashboards for patient care, billing, and daily workflows.",
    icon: Stethoscope,
    imageSrc: "/home/homeherosction/Gemini_Generated_Image_27xs1y27xs1y27xs.png",
    imageAlt: "Clinic Management Software",
    theme: {
      glow: "from-violet-500/25 via-transparent to-purple-500/10",
      atmosphere: "bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/5",
      ring: "ring-violet-400/30",
      badge: "border-violet-400/30 bg-violet-500/10 text-violet-300",
      dot: "bg-violet-400",
      accentBar: "bg-violet-400",
      tab: "data-[active=true]:border-violet-400/50 data-[active=true]:bg-violet-500/15 data-[active=true]:text-violet-200",
    },
  },
];

const FLOATING_MEDICAL_ICONS = [
  { icon: Activity, className: "left-[6%] top-[16%]", delay: 0, size: "lg" },
  { icon: Stethoscope, className: "left-[14%] top-[58%]", delay: 0.35, size: "md" },
  { icon: HeartPulse, className: "right-[10%] top-[20%]", delay: 0.15, size: "lg" },
  { icon: Pill, className: "right-[16%] top-[52%]", delay: 0.55, size: "sm" },
  { icon: FlaskConical, className: "left-[22%] bottom-[26%]", delay: 0.75, size: "md" },
  { icon: Microscope, className: "right-[6%] bottom-[30%]", delay: 0.25, size: "lg" },
  { icon: Syringe, className: "left-[4%] bottom-[16%]", delay: 0.45, size: "sm" },
  { icon: Building2, className: "right-[22%] top-[14%]", delay: 0.6, size: "sm" },
];

const ICON_CONTAINER_SIZES = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const ICON_SIZES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

function HeroFloatingIcon({ icon: Icon, className, delay = 0, size = "md" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.to(ref.current, {
      y: -10,
      duration: 2.8 + delay * 0.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay,
    });

    return () => tween.kill();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute flex items-center justify-center rounded-2xl border border-teal-400/10 bg-teal-500/[0.04] text-teal-400/30 backdrop-blur-[1px]",
        ICON_CONTAINER_SIZES[size],
        className
      )}
      aria-hidden
    >
      <Icon className={ICON_SIZES[size]} strokeWidth={1.5} />
    </div>
  );
}

function HeroBackgroundIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {FLOATING_MEDICAL_ICONS.map((item) => (
        <HeroFloatingIcon
          key={item.className}
          icon={item.icon}
          className={item.className}
          delay={item.delay}
          size={item.size}
        />
      ))}
    </div>
  );
}

const ECG_PATH = MEDICAL_ECG_PATH;

function HeroEcgStrip() {
  return (
    <div className="hero-page__ecg" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-navy-950 to-transparent" />
      <div className="hero-page__ecg-track">
        {[0, 1].map((key) => (
          <svg
            key={key}
            viewBox="0 0 500 56"
            className="h-full w-1/2"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d={ECG_PATH}
              stroke="#14b8a6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/35 to-transparent" />
    </div>
  );
}

function HeroVisual({ current, panelRef }) {
  const slide = slides[current];
  const SlideIcon = slide.icon;

  return (
    <div ref={panelRef} className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
      <div
        className={cn(
          "pointer-events-none absolute -inset-3 rounded-[1.75rem] opacity-60 blur-2xl transition-all duration-700",
          slide.theme.glow
        )}
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80 shadow-[0_28px_70px_-32px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-navy-950/90 px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06] text-teal-400">
              <SlideIcon className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-slate-400">
              {slide.badge}
            </span>
          </div>
          <div className="w-14" aria-hidden />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
          {slides.map((item, index) => (
            <Image
              key={item.id}
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className={cn(
                "object-cover object-center transition-opacity duration-700 ease-out",
                index === current ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
        </div>

        <div className={cn("h-0.5 w-full transition-colors duration-700", slide.theme.accentBar)} />
      </div>

      <div
        className="pointer-events-none mx-auto mt-5 h-2.5 w-[78%] rounded-full bg-black/35 blur-xl"
        aria-hidden
      />
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const slide = slides[current];
  const SlideIcon = slide.icon;

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length);
    setProgress(0);
  };
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const started = performance.now();
    let frame = 0;

    const tick = (now) => {
      const elapsed = now - started;
      setProgress(Math.min(elapsed / AUTOPLAY_MS, 1));
      if (elapsed >= AUTOPLAY_MS) {
        setCurrent((prev) => (prev + 1) % slides.length);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [current]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, x: 32, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
            clearProps: "transform",
          }
        );
      }
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
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [current]);

  return (
    <section ref={sectionRef} className="hero-page hero-page--tall hero-page--home font-sans">
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />
      <HeroBackgroundIcons />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700",
          slide.theme.atmosphere
        )}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div ref={contentRef} className="max-w-2xl text-center lg:text-left">
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:px-4 transition-colors duration-500",
              slide.theme.badge
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", slide.theme.dot)} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
              {slide.badge}
            </span>
          </div>

          <p className="mx-auto mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-400/90 sm:text-xs lg:mx-0">
            Healthcare software for hospitals, clinics, labs & pharmacies
          </p>

          <h1 className={cn(HEADING.hero, "mt-3 text-white")}>
            {slide.title} {slide.highlight}
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base lg:mx-0">
            {slide.description}
          </p>

          <MedicalTrustBar theme="dark" className="mt-5" />

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="/contact" className="btn-primary rounded-full px-6 py-2.5">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-900/40 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-teal-500/50 hover:bg-navy-800/60"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm sm:inline-flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-teal-400">
              <SlideIcon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white">{slide.badge}</p>
              <p className="text-[11px] text-slate-400">
                Trusted by healthcare providers across Nepal
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      index === current
                        ? cn("w-8", item.theme.dot)
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-teal-500/40 hover:bg-white/10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-teal-500/40 hover:bg-white/10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mx-auto h-1 max-w-xs overflow-hidden rounded-full bg-white/10 lg:mx-0">
              <div
                className={cn(
                  "h-full rounded-full transition-[width] duration-100 ease-linear",
                  slide.theme.dot
                )}
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>

        <HeroVisual current={current} panelRef={visualRef} />
      </div>

      <HeroEcgStrip />

      <div className="hero-page__wave" aria-hidden="true">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none">
          <path d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </svg>
      </div>
    </section>
  );
}
