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
    <div className="group flex items-center gap-3 rounded-xl border border-navy-800/80 bg-navy-900/50 px-3 py-2.5 backdrop-blur-sm transition-colors duration-300 hover:border-teal-500/30 hover:bg-navy-900/70 sm:gap-3.5 sm:px-3.5 sm:py-3 xl:flex-col xl:items-center xl:gap-2 xl:px-3 xl:py-3.5 xl:text-center">
      <div className={`hidden h-px w-full bg-gradient-to-r ${accent} opacity-60 xl:block`} />

      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-teal-500/25 bg-teal-500/10 sm:h-10 sm:w-10">
        <div className="scale-[0.5] sm:scale-[0.55]">
          <Icon />
        </div>
      </div>

      <div className="min-w-0 flex-1 xl:flex-none">
        <p className="text-lg font-black leading-none tracking-tight text-white sm:text-xl">
          <span className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {display}
          </span>
          <span className="ml-0.5 text-sm font-bold text-teal-400 sm:text-base">{suffix}</span>
        </p>
        <p className="mt-1 text-[11px] font-medium leading-tight text-slate-400 sm:text-xs xl:line-clamp-2">
          {label}
        </p>
      </div>
    </div>
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
      className="relative w-full overflow-hidden border-y border-navy-800 bg-navy-950 px-4 py-8 sm:px-6 sm:py-9 lg:px-12 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.08),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          headerRef={headerRef}
          align="left"
          theme="dark"
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
