"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import { fadeUpOnScroll } from "@/lib/gsap-scroll";

export default function ServiceCta({
  eyebrow = "Start your project",
  title = "Ready to get started?",
  description = "Tell us about your goals. We'll share scope, timeline, and a clear quote — no pressure, no jargon.",
  primaryCta = { href: "/contact", label: "Get a free quote" },
  secondaryCta = { href: "/portfolio", label: "See our work" },
}) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const ctx = gsap.context(() => {
      fadeUpOnScroll(card, section, { y: 32, duration: 0.85, start: "top 80%" });
      fadeUpOnScroll(card.querySelectorAll("[data-cta-item]"), section, {
        y: 20,
        stagger: 0.1,
        delay: 0.15,
        start: "top 80%",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-shell bg-white pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-teal-500/20" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-500/10" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_50%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p
                data-cta-item
                className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400"
              >
                {eyebrow}
              </p>
              <h2
                data-cta-item
                className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                {title}
              </h2>
              <p
                data-cta-item
                className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base"
              >
                {description}
              </p>
            </div>

            <div data-cta-item className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              {primaryCta ? (
                <Button href={primaryCta.href} variant="primary" className="rounded-full px-8 py-3">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent px-8 py-3 text-white hover:border-teal-400/40 hover:bg-white/5 hover:text-white"
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
