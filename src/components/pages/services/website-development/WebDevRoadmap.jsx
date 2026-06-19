"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { drawLineOnScroll, fadeUpOnScroll, scaleInOnScroll } from "@/lib/gsap-scroll";
import { WEB_DEV_PROCESS } from "@/config/sections/website-development";
import { cn } from "@/lib/cn";

const STEP_ACCENTS = [
  "border-teal-500",
  "border-cyan-500",
  "border-teal-600",
  "border-emerald-500",
  "border-teal-500",
  "border-cyan-600",
  "border-teal-600",
  "border-emerald-600",
];

const DOT_ACCENTS = [
  "bg-teal-500 ring-teal-100",
  "bg-cyan-500 ring-cyan-100",
  "bg-teal-600 ring-teal-100",
  "bg-emerald-500 ring-emerald-100",
  "bg-teal-500 ring-teal-100",
  "bg-cyan-600 ring-cyan-100",
  "bg-teal-600 ring-teal-100",
  "bg-emerald-600 ring-emerald-100",
];

function RoadmapStep({ step, index, isLast }) {
  return (
    <li className="roadmap-step group relative pb-8 last:pb-0">
      {!isLast ? (
        <span
          aria-hidden
          className="roadmap-connector absolute left-[11px] top-6 bottom-0 w-px origin-top bg-gradient-to-b from-slate-300 to-slate-200"
        />
      ) : null}

      <div className="relative flex gap-5">
        <div
          className={cn(
            "roadmap-dot relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4 transition-transform duration-300 group-hover:scale-110",
            DOT_ACCENTS[index % DOT_ACCENTS.length]
          )}
        >
          <span className="text-[9px] font-bold text-white">{step.num}</span>
        </div>

        <article
          className={cn(
            "roadmap-card min-w-0 flex-1 rounded-r-xl rounded-bl-xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-24px_rgba(20,184,166,0.35)] sm:p-6",
            STEP_ACCENTS[index % STEP_ACCENTS.length]
          )}
        >
          <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
        </article>
      </div>
    </li>
  );
}

export default function WebDevRoadmap() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const timeline = timelineRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (header) {
        fadeUpOnScroll(header, section, { y: 24, start: "top 82%" });
      }

      if (timeline) {
        drawLineOnScroll(timeline.querySelectorAll(".roadmap-connector"), timeline);
        scaleInOnScroll(timeline.querySelectorAll(".roadmap-dot"), timeline, { stagger: 0.08 });
        fadeUpOnScroll(timeline.querySelectorAll(".roadmap-card"), timeline, {
          x: 16,
          y: 0,
          stagger: 0.08,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const firstPhase = WEB_DEV_PROCESS.slice(0, 4);
  const secondPhase = WEB_DEV_PROCESS.slice(4);

  return (
    <section ref={sectionRef} className="section-shell border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-10 max-w-xl lg:mb-12">
          <SectionHeader align="left" eyebrow="Process" title="Your project" highlight="roadmap" />
        </div>

        <div ref={timelineRef} className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-600">
              Phase 1 — Discovery & Build
            </p>
            <ol className="relative list-none">
              {firstPhase.map((step, index) => (
                <RoadmapStep key={step.num} step={step} index={index} isLast={index === 3} />
              ))}
            </ol>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-600">
              Phase 2 — Launch & Support
            </p>
            <ol className="relative list-none">
              {secondPhase.map((step, index) => (
                <RoadmapStep
                  key={step.num}
                  step={step}
                  index={index + 4}
                  isLast={index === secondPhase.length - 1}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
