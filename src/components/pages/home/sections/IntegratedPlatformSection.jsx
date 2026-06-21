"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MedicalSectionBackdrop from "@/components/pages/home/shared/MedicalSectionBackdrop";
import { INTEGRATED_PLATFORM } from "@/config/sections/integrated-platform";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function PlatformColumn({ column, columnRef }) {
  const Icon = column.icon;

  return (
    <div ref={columnRef} className="flex h-full flex-col">
      <div className="flex items-center">
        <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border-[3px] border-navy-600 bg-white shadow-sm">
          <Icon className="h-7 w-7 text-navy-700" strokeWidth={1.5} />
        </div>

        <div className="-ml-5 flex min-h-[3.25rem] flex-1 items-center rounded-r-full border-t-2 border-r-2 border-teal-600 bg-white py-3 pl-9 pr-4">
          <h3 className={cn(COMPONENT_STYLES.cardTitle, "text-sm sm:text-[15px]")}>
            {column.title}
          </h3>
        </div>
      </div>

      <div className="relative -mt-px flex-1 rounded-bl-2xl border-b-2 border-l-2 border-teal-600 bg-white px-5 pb-6 pt-7 sm:px-6">
        <ul className="space-y-3">
          {column.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-600">
                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
              </span>
              <span className={cn(BODY.small, "text-slate-700")}>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={column.href}
          className={cn(COMPONENT_STYLES.linkAccent, "mt-5 inline-flex items-center gap-1")}
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}

export default function IntegratedPlatformSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const columnsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        columnsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-slate-200/80 bg-white py-14 font-sans antialiased sm:py-16 lg:py-20"
    >
      <MedicalSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headerRef={headerRef}
          align="left"
          eyebrow={INTEGRATED_PLATFORM.eyebrow}
          title={INTEGRATED_PLATFORM.title}
          highlight={INTEGRATED_PLATFORM.highlight}
          description={INTEGRATED_PLATFORM.description}
          className="mb-12 max-w-3xl sm:mb-14"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {INTEGRATED_PLATFORM.columns.map((column, index) => (
            <PlatformColumn
              key={column.id}
              column={column}
              columnRef={(el) => {
                columnsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
