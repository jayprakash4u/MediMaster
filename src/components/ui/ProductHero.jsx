"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export default function ProductHero({
  eyebrow,
  titleBefore,
  highlight,
  titleAfter = "Solution",
  description,
  ctaHref,
  ctaLabel = "Request Demo",
  secondaryCta,
  visual,
  className,
}) {
  return (
    <section className={cn("hero-page py-16 md:py-20", className)}>
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className={`${COMPONENT_STYLES.label} mb-4 inline-block ${TEXT_COLOR.tealOnDark}`}>
            {eyebrow}
          </span>

          <h1 className={`${HEADING.display} text-white`}>
            {titleBefore} {highlight}
            {titleAfter ? ` ${titleAfter}` : ""}
          </h1>

          <p className={cn("mb-8 mt-5 max-w-2xl", BODY.large, "text-slate-300")}>{description}</p>

          <div className="flex flex-wrap gap-4">
            {ctaHref ? (
              <Button href={ctaHref} variant="primary" className="px-8 py-4 font-bold">
                {ctaLabel}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outline"
                className="border-slate-400 text-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>

        {visual ? (
          <div className="relative -mt-4 flex h-[320px] w-full items-center justify-center md:h-[340px]">
            <div className="h-full w-full max-w-[340px]">{visual}</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
