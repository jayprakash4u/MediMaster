"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Building2, ChevronLeft, ChevronRight, FlaskConical, Pill } from "lucide-react";
import { cn } from "@/lib/cn";
import { HEADING } from "@/lib/typography";

const slides = [
  {
    id: "hospital",
    badge: "Hospital Management",
    title: "Smart Hospital",
    highlight: "Management Software",
    description: "Unify OPD, IPD, billing, pharmacy & lab workflows in one secure platform.",
    icon: Building2,
    imageSrc: null,
    imageAlt: "Hospital Management System",
  },
  {
    id: "pharmacy",
    badge: "Pharmacy Management",
    title: "Modern Pharmacy",
    highlight: "Inventory & Billing",
    description: "Track stock, prescriptions, and sales with real-time pharmacy intelligence.",
    icon: Pill,
    imageSrc: null,
    imageAlt: "Pharmacy Management System",
  },
  {
    id: "pathology",
    badge: "Pathology Management",
    title: "Advanced Lab",
    highlight: "Diagnostics Suite",
    description: "Automate sample tracking, reports, and result delivery for faster diagnostics.",
    icon: FlaskConical,
    imageSrc: null,
    imageAlt: "Pathology Management System",
  },
];

function HeroImageSlot({ slide, panelRef }) {
  const Icon = slide.icon;
  const hasImage = Boolean(slide.imageSrc);

  return (
    <div
      ref={panelRef}
      className="relative mx-auto aspect-[4/3] w-full max-w-md lg:mx-0 lg:max-w-none lg:aspect-[5/4]"
    >
      <div className="absolute inset-0 rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)]" />
      <div className="absolute left-5 top-5 h-11 w-11 rounded-tl-2xl border-l-2 border-t-2 border-teal-500/60" />
      <div className="absolute inset-[1px] rounded-[1.7rem] bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08)_0,transparent_55%)]" />

      {hasImage ? (
        <div className="absolute inset-3 overflow-hidden rounded-[1.35rem] sm:inset-4">
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={slide.id === "hospital"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-white/10 bg-navy-900/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-500/15 bg-teal-500/10 text-teal-400/80">
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
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
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
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
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0.6, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform",
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [current]);

  return (
    <section ref={sectionRef} className="hero-page hero-page--tall font-sans">
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div ref={contentRef} className="max-w-2xl text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-1.5 sm:px-4">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 sm:text-xs">
              {slide.badge}
            </span>
          </div>

          <h1 className={cn(HEADING.hero, "text-white")}>
            {slide.title} <span className="text-gradient-brand">{slide.highlight}</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0">
            {slide.description}
          </p>

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

          <div className="mt-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 sm:inline-flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
              <SlideIcon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white">{slide.badge}</p>
              <p className="text-[11px] text-slate-400">
                Trusted by healthcare providers across Nepal
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    index === current ? "w-8 bg-teal-500" : "w-1.5 bg-white/30 hover:bg-teal-400/60"
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
        </div>

        <HeroImageSlot key={slide.id} slide={slide} panelRef={imageRef} />
      </div>

      <div className="hero-page__wave" aria-hidden="true">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none">
          <path d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </svg>
      </div>
    </section>
  );
}
