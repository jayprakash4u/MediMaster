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
    <CardCompact className="group flex items-center gap-3 sm:gap-3.5 xl:flex-col xl:items-center xl:gap-2 xl:text-center">
      <div className={`hidden h-px w-full bg-gradient-to-r ${accent} opacity-60 xl:block`} />

      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-teal-500/20 bg-teal-50 sm:h-10 sm:w-10">
        <div className="scale-[0.5] sm:scale-[0.55]">
          <Icon />
        </div>
      </div>

      <div className="min-w-0 flex-1 xl:flex-none">
        <p className="text-lg font-black leading-none tracking-tight text-slate-900 sm:text-xl">
          <span className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {display}
          </span>
          <span className="ml-0.5 text-sm font-bold text-teal-600 sm:text-base">{suffix}</span>
        </p>
        <p className="mt-1 text-[11px] font-medium leading-tight text-slate-500 sm:text-xs xl:line-clamp-2">
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
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.06),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(203 213 225 / 0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          headerRef={headerRef}
          align="left"
          eyebrow="Our Impact"
          title="Trusted Across"
          highlight="Healthcare Nepal"
          className="mb-5 max-w-none sm:mb-6 [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:lg:text-2xl"
          as="h2"
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-6"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
