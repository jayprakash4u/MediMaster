"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Clock, CalendarDays, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MedicalSectionBackdrop from "@/components/pages/home/shared/MedicalSectionBackdrop";
import { BODY, COMPONENT_STYLES } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    border: "border-slate-100",
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
    border: "border-slate-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
  lime: {
    bg: "bg-white",
    border: "border-slate-100",
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
      className={`flex h-full flex-col gap-3 border p-6 transition-shadow duration-300 hover:shadow-sm md:p-7 ${styles.bg} ${styles.border}`}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${styles.iconBg}`}>
        <Icon size={24} className={styles.iconColor} strokeWidth={1.5} />
      </div>
      <div className={`h-0.5 w-9 ${styles.line}`} />
      <p className={COMPONENT_STYLES.cardTitle}>{headline}</p>
      <p className={`${BODY.small} ${styles.desc}`}>{text}</p>
    </div>
  );
}

function SectionTitle({ align = "left" }) {
  return (
    <SectionHeader
      align={align}
      size="sm"
      eyebrow="Why Choose Us"
      title="Why Choose"
      highlight="MediMaster?"
      className="max-w-none"
    />
  );
}

export default function WhyToChooseSection() {
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
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-200/80 bg-slate-50 py-14 font-sans antialiased sm:py-16 lg:py-20"
    >
      <MedicalSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Mobile */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm md:hidden">
          <div className="flex flex-col items-start justify-center border-b border-slate-100 bg-white px-6 py-10">
            <SectionTitle />
          </div>

          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src="/home/why-choose.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-2">
            {features.map((feature) => (
              <div key={feature.id} className="border border-slate-100">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm md:grid lg:hidden md:grid-cols-2">
          <div className="col-span-2 flex flex-col items-start justify-center border-b border-slate-100 bg-white px-8 py-10">
            <SectionTitle />
          </div>

          <div className="relative col-span-2 h-64 overflow-hidden">
            <Image
              src="/home/why-choose.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {features.map((feature) => (
            <div key={feature.id} className="border border-slate-100">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Desktop mosaic */}
        <div
          className="hidden overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm lg:grid lg:grid-cols-4"
          style={{ gridTemplateRows: "1fr 1fr" }}
        >
          <div className="col-start-1 row-start-1 border border-slate-100">
            <FeatureCard feature={features[0]} />
          </div>

          <div className="relative col-start-2 row-span-2 row-start-1 overflow-hidden border border-slate-100">
            <Image
              src="/home/why-choose.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div className="col-span-2 col-start-3 row-start-1 flex flex-col items-end justify-center border border-slate-100 bg-white px-8 py-10">
            <SectionTitle align="right" />
          </div>

          <div className="col-start-1 row-start-2 border border-slate-100">
            <FeatureCard feature={features[1]} />
          </div>

          <div className="col-start-3 row-start-2 border border-slate-100">
            <FeatureCard feature={features[2]} />
          </div>

          <div className="col-start-4 row-start-2 border border-slate-100">
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
