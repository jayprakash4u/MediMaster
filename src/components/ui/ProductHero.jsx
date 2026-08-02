"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { BODY, HEADING, TEXT_COLOR } from "@/lib/typography";

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
    <section
      className={cn(
        "hero-page hero-page--product relative bg-navy-950 py-12 sm:py-16 md:py-20",
        className
      )}
    >
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__photo" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <span
              className={cn(
                "mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em]",
                TEXT_COLOR.tealOnDark
              )}
            >
              {eyebrow}
            </span>

            <h1 className={cn(HEADING.display, "text-white")}>
              {titleBefore} <span className="text-teal-400">{highlight}</span>
              {titleAfter ? ` ${titleAfter}` : ""}
            </h1>

            <p
              className={cn(
                "mb-6 mt-4 max-w-2xl leading-relaxed text-slate-300 sm:mb-8",
                BODY.large
              )}
            >
              {description}
            </p>

            {(ctaHref || secondaryCta) && (
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {ctaHref ? (
                  <Button
                    href={ctaHref}
                    variant="primary"
                    className="rounded-full px-6 py-2.5 text-sm font-bold sm:px-8 sm:py-4"
                  >
                    {ctaLabel}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="outlineDark" className="rounded-full">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            )}
          </div>

          {visual ? (
            <div className="product-orbit-shell md:-mt-4">
              <div className="product-orbit-scale">{visual}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
