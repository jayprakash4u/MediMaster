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
import { COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

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

      <div className="flex flex-1 flex-col p-3 pb-11 sm:p-7 sm:pb-14">
        <h3 className="text-xs font-bold leading-tight text-slate-900 sm:text-base">
          {service.title}
        </h3>

        <ul className="mt-2.5 space-y-1.5 sm:mt-5 sm:space-y-2.5">
          {service.items.map((item, index) => (
            <li
              key={item}
              className={cn("flex items-start gap-1.5 sm:gap-2.5", index >= 3 && "hidden lg:flex")}
            >
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500 sm:mt-2"
                aria-hidden
              />
              <span className="text-[10px] leading-snug text-slate-600 sm:text-sm sm:leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={service.href}
        aria-label={`Learn more about ${service.title}`}
        className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-teal-500 group-hover:text-teal-600 sm:bottom-5 sm:right-5 sm:h-9 sm:w-9"
      >
        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
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
      className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/70 to-white py-12 font-sans antialiased sm:py-16 lg:py-20"
    >
      <MedicalSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <SectionHeader
          headerRef={headerRef}
          eyebrow={HEALTHCARE_SERVICES.eyebrow}
          title={HEALTHCARE_SERVICES.title}
          highlight={HEALTHCARE_SERVICES.highlight}
          description={HEALTHCARE_SERVICES.subtitle}
          className="mb-8 sm:mb-12"
        />

        <article
          ref={featuredRef}
          className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_4px_24px_-8px_rgba(15,23,42,0.1)] sm:rounded-2xl"
        >
          <div className="h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500" aria-hidden />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="border-b border-slate-100 p-4 sm:p-7 lg:border-b-0 lg:border-r lg:p-10">
              <h3 className="text-lg font-bold leading-tight text-slate-900 sm:text-xl lg:text-2xl">
                {featured.title}
              </h3>
              <p
                className={cn("mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm", TEXT_COLOR.muted)}
              >
                {featured.description}
              </p>
              <p
                className={cn("mt-2 text-xs leading-relaxed sm:mt-3 sm:text-sm", TEXT_COLOR.muted)}
              >
                {featured.secondary}
              </p>
              <Link
                href={featured.ctaHref}
                className="btn-primary mt-4 inline-flex rounded-full px-4 py-2 text-xs sm:mt-6 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                {featured.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
              </Link>
            </div>

            <div className="bg-slate-50/80 p-4 sm:p-7 lg:p-10">
              <p className={cn(COMPONENT_STYLES.label, "text-[10px] sm:text-xs", TEXT_COLOR.muted)}>
                Modules we cover
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3 lg:gap-4">
                {featured.modules.map((module) => (
                  <div
                    key={module}
                    className="flex min-h-[3rem] items-center justify-center rounded-lg border border-slate-200/80 bg-white px-1.5 py-2 text-center shadow-sm sm:min-h-[4.5rem] sm:rounded-xl sm:px-2 sm:py-3"
                  >
                    <span className="text-[10px] font-semibold leading-tight text-slate-700 sm:text-xs">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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
