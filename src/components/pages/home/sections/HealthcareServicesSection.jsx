"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MedicalSectionBackdrop from "@/components/pages/home/shared/MedicalSectionBackdrop";
import { HEALTHCARE_SERVICES } from "@/config/sections/healthcare-services";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ServiceCard({ service, cardRef }) {
  return (
    <article
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-slate-200/90 bg-white shadow-[0_2px_16px_-6px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
    >
      <div className="h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500" aria-hidden />

      <div className="flex flex-1 flex-col p-6 pb-14 sm:p-7">
        <h3 className={COMPONENT_STYLES.cardTitle}>{service.title}</h3>

        <ul className="mt-5 space-y-2.5">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" aria-hidden />
              <span className={cn(BODY.small, TEXT_COLOR.muted)}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={service.href}
        aria-label={`Learn more about ${service.title}`}
        className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-teal-500 group-hover:text-teal-600"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
      </Link>
    </article>
  );
}

export default function HealthcareServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { featured } = HEALTHCARE_SERVICES;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/70 to-white py-14 font-sans antialiased sm:py-16 lg:py-20"
    >
      <MedicalSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headerRef={headerRef}
          eyebrow={HEALTHCARE_SERVICES.eyebrow}
          title={HEALTHCARE_SERVICES.title}
          highlight={HEALTHCARE_SERVICES.highlight}
          description={HEALTHCARE_SERVICES.subtitle}
          className="mb-10 sm:mb-12"
        />

        <article
          ref={featuredRef}
          className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_24px_-8px_rgba(15,23,42,0.1)]"
        >
          <div className="h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500" aria-hidden />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="border-b border-slate-100 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <h3 className={cn(HEADING.h3, TEXT_COLOR.primary)}>{featured.title}</h3>
              <p className={cn("mt-4", BODY.small, TEXT_COLOR.muted)}>{featured.description}</p>
              <p className={cn("mt-3", BODY.small, TEXT_COLOR.muted)}>{featured.secondary}</p>
              <Link
                href={featured.ctaHref}
                className="btn-primary mt-6 inline-flex rounded-full px-6 py-2.5"
              >
                {featured.ctaLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>

            <div className="bg-slate-50/80 p-7 sm:p-9 lg:p-10">
              <p className={cn(COMPONENT_STYLES.label, TEXT_COLOR.muted)}>Modules we cover</p>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                {featured.modules.map((module) => (
                  <div
                    key={module}
                    className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-slate-200/80 bg-white px-2 py-3 text-center shadow-sm"
                  >
                    <span className={cn(COMPONENT_STYLES.caption, "font-semibold text-slate-700")}>
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {HEALTHCARE_SERVICES.services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              cardRef={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
