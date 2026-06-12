"use client";

import { Shield, Clock, CalendarDays, BarChart3 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    icon: Shield,
    headline: "Patient Safety",
    text: "Advanced protocols and smart alerts keep every patient record secure and error-free.",
    theme: "teal",
  },
  {
    id: 2,
    icon: Clock,
    headline: "Real-Time Access",
    text: "Instant access to patient data, appointments, and reports anytime, anywhere.",
    theme: "orange",
  },
  {
    id: 3,
    icon: CalendarDays,
    headline: "Smart Scheduling",
    text: "Automated appointment management that reduces no-shows and optimizes clinic flow.",
    theme: "blue",
  },
  {
    id: 4,
    icon: BarChart3,
    headline: "Analytics & Reports",
    text: "Powerful dashboards and insights to drive data-backed clinical decisions.",
    theme: "lime",
  },
];

const themeStyles = {
  teal: {
    bg: "bg-white",
    border: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
  orange: {
    bg: "bg-white",
    border: "border-slate-100",
    iconBg: "bg-slate-50",
    iconColor: "text-slate-700",
    line: "bg-slate-500",
    title: "text-slate-900",
    desc: "text-slate-600",
  },
  blue: {
    bg: "bg-white",
    border: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
  lime: {
    bg: "bg-white",
    border: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
};

function FeatureCard({ feature }) {
  const { icon: Icon, headline, text, theme } = feature;
  const styles = themeStyles[theme];

  return (
    <div
      className={`h-full flex flex-col gap-3 p-6 md:p-7 ${styles.bg} border ${styles.border}`}
    >
      <div
        className={`w-11 h-11 flex items-center justify-center rounded-lg ${styles.iconBg}`}
      >
        <Icon size={24} className={styles.iconColor} strokeWidth={1.5} />
      </div>
      <div className={`w-9 h-0.5 ${styles.line}`} />
      <p
        className={`text-xs font-bold tracking-widest uppercase font-sans ${styles.title}`}
      >
        {headline}
      </p>
      <p className={`text-sm leading-relaxed ${styles.desc}`}>{text}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ── MOBILE LAYOUT (< md) ── */}
        <div className="flex flex-col gap-0 md:hidden">
          {/* Headline block */}
          <div className="flex flex-col items-start justify-center px-6 py-10 bg-white border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                  <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="22" cy="5" r="2" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Why Choose Us</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Choose <span className="text-teal-600">MediMaster?</span>
            </h2>
          </div>

          {/* Image */}
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src="/home/why-choose.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Feature cards — 2 column grid on mobile */}
          <div className="grid grid-cols-2">
            {features.map((feature) => (
              <div key={feature.id} className="border border-slate-100">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>

        {/* ── TABLET LAYOUT (md → lg) ── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-0">
          {/* Headline */}
          <div className="flex flex-col items-start justify-center px-8 py-10 bg-white border border-slate-100 col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                  <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="22" cy="5" r="2" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Why Choose Us</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Choose <span className="text-teal-600">MediMaster?</span>
            </h2>
          </div>

          {/* Image full width */}
          <div className="relative col-span-2 h-64 overflow-hidden">
            <Image
              src="/home/why-choose.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* 4 feature cards in 2-col grid */}
          {features.map((feature) => (
            <div key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* ── DESKTOP LAYOUT (≥ lg) ── */}
        <div
          className="hidden lg:grid grid-cols-4"
          style={{ gridTemplateRows: "1fr 1fr" }}
        >
          {/* Row 1, Col 1 — Patient Safety */}
          <div className="row-start-1 col-start-1">
            <FeatureCard feature={features[0]} />
          </div>

          {/* Col 2, spans both rows — Image */}
          <div className="row-start-1 row-span-2 col-start-2 relative overflow-hidden">
            <Image
              src="/home/why-choose.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Row 1, Col 3–4 — Headline */}
          <div className="row-start-1 col-start-3 col-span-2 flex flex-col items-end justify-center px-8 py-10 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Why Choose Us</span>
            </div>
            <h2
              className="text-right text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Choose <span className="text-teal-600">MediMaster?</span>
            </h2>
          </div>

          {/* Row 2, Col 1 — Real-Time Access */}
          <div className="row-start-2 col-start-1">
            <FeatureCard feature={features[1]} />
          </div>

          {/* Row 2, Col 3 — Smart Scheduling */}
          <div className="row-start-2 col-start-3">
            <FeatureCard feature={features[2]} />
          </div>

          {/* Row 2, Col 4 — Analytics */}
          <div className="row-start-2 col-start-4">
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
