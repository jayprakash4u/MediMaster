"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HospitalIcon,
  PatientsIcon,
  PharmacyIcon,
  LabTestIcon,
  DentalIcon,
  UptimeIcon,
} from "./StatsIcons";
import SectionHeader from "@/components/ui/SectionHeader";
import { CardCompact } from "@/components/ui/Card";
import MedicalSectionBackdrop from "@/components/pages/home/shared/MedicalSectionBackdrop";
import MedicalTrustBar from "@/components/pages/home/shared/MedicalTrustBar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    Icon: HospitalIcon,
    value: 248,
    suffix: "+",
    label: "Hospitals Onboarded",
    accent: "from-teal-500 to-aqua-500",
  },
  {
    Icon: PatientsIcon,
    value: 94200,
    suffix: "+",
    label: "Patients Managed",
    accent: "from-teal-400 to-teal-500",
  },
  {
    Icon: PharmacyIcon,
    value: 512,
    suffix: "+",
    label: "Pharmacy Units",
    accent: "from-aqua-500 to-teal-500",
  },
  {
    Icon: LabTestIcon,
    value: 38700,
    suffix: "+",
    label: "Lab Tests Processed",
    accent: "from-teal-500 to-teal-400",
  },
  {
    Icon: DentalIcon,
    value: 126,
    suffix: "+",
    label: "Dental Clinics",
    accent: "from-teal-400 to-aqua-500",
  },
  {
    Icon: UptimeIcon,
    value: 99.7,
    suffix: "%",
    label: "System Uptime",
    accent: "from-teal-500 to-aqua-500",
  },
];

function StatItem({ Icon, value, suffix, label, accent, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) {
      setCount(0);
      return;
    }

    let startTime = null;
    const isDecimal = !Number.isInteger(value);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * value;
      setCount(isDecimal ? parseFloat(val.toFixed(1)) : Math.floor(val));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [value, started]);

  const display = !Number.isInteger(value) ? count.toFixed(1) : count.toLocaleString();

  return (
    <CardCompact className="group flex h-full flex-col items-center gap-1.5 p-2.5 text-center sm:flex-row sm:items-center sm:gap-3 sm:p-3.5 sm:text-left lg:flex-col lg:items-center lg:gap-2 lg:p-3.5 lg:text-center xl:gap-2">
      <div className={`hidden h-px w-full bg-gradient-to-r ${accent} opacity-60 xl:block`} />

      <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-teal-500/20 bg-teal-50 sm:h-10 sm:w-10">
        <div className="scale-[0.42] sm:scale-[0.55]">
          <Icon />
        </div>
      </div>

      <div className="min-w-0 flex-1 lg:flex-none">
        <p className="text-base font-black leading-none tracking-tight text-slate-900 sm:text-xl">
          <span className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {display}
          </span>
          <span className="ml-0.5 text-xs font-bold text-teal-600 sm:text-base">{suffix}</span>
        </p>
        <p className="mt-0.5 text-[10px] font-medium leading-tight text-slate-500 sm:mt-1 sm:text-xs lg:line-clamp-2">
          {label}
        </p>
      </div>
    </CardCompact>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(([entry]) => setStarted(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(grid);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white px-3 py-12 font-sans antialiased sm:px-6 sm:py-16 lg:px-12 lg:py-20"
    >
      <MedicalSectionBackdrop />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          headerRef={headerRef}
          align="left"
          size="sm"
          eyebrow="Clinical Impact"
          title="Trusted Across"
          highlight="Healthcare Nepal"
          description="Real outcomes from hospitals, pharmacies, labs, and clinics running on MediMaster every day."
          className="mb-5 max-w-none sm:mb-6"
          as="h2"
        />

        <MedicalTrustBar theme="light" className="mb-5 sm:mb-6" />

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-6"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
