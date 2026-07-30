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
  const ctaButtons = (
    <>
      {ctaHref ? (
        <Button
          href={ctaHref}
          variant="primary"
          className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm"
        >
          {ctaLabel}
        </Button>
      ) : null}
      {secondaryCta ? (
        <Button
          href={secondaryCta.href}
          variant="outlineDark"
          className="shrink-0 whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm"
        >
          {secondaryCta.label}
        </Button>
      ) : null}
    </>
  );

  return (
    <section className={cn("hero-page hero-page--tall pb-14 sm:pb-16 lg:pb-0", className)}>
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-3 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:py-16 lg:pb-16">
        <div className="flex flex-col items-center gap-5 sm:gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-1 w-full max-w-2xl text-center lg:text-left">
            <span
              className={cn(
                COMPONENT_STYLES.label,
                "mb-3 inline-block sm:mb-4",
                TEXT_COLOR.tealOnDark
              )}
            >
              {eyebrow}
            </span>

            <h1 className={cn(HEADING.hero, "text-balance text-white")}>
              {titleBefore} {highlight}
              {titleAfter ? ` ${titleAfter}` : ""}
            </h1>

            <p className={cn("mx-auto mt-3 max-w-lg text-slate-300 sm:mt-4 lg:mx-0", BODY.hero)}>
              {description}
            </p>

            {(ctaHref || secondaryCta) && (
              <div className="mt-5 hidden flex-row flex-nowrap justify-center gap-3 sm:mt-6 sm:gap-4 lg:flex lg:justify-start">
                {ctaButtons}
              </div>
            )}
          </div>

          {(ctaHref || secondaryCta) && (
            <div className="order-2 flex w-full flex-row flex-nowrap justify-center gap-3 sm:gap-4 lg:hidden">
              {ctaButtons}
            </div>
          )}

          {visual ? (
            <div className="order-3 hidden w-full justify-center lg:order-none lg:flex lg:justify-end">
              <div className="relative flex h-[300px] w-full max-w-[320px] items-center justify-center lg:h-[340px] lg:max-w-[340px]">
                <div className="h-full w-full overflow-hidden">{visual}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="hero-page__wave" aria-hidden="true">
        <svg viewBox="0 0 24 150 28" preserveAspectRatio="none">
          <path d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </svg>
      </div>
    </section>
  );
}
