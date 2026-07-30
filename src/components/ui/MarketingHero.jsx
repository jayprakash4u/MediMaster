"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import EyebrowMarker from "@/components/ui/EyebrowMarker";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export default function MarketingHero({
  eyebrow,
  eyebrowStyle = "marker",
  badgeLetter,
  title,
  highlight,
  titleAfter = "",
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  imageClassName = "h-auto w-[75%] object-contain drop-shadow-2xl",
  align = "left",
}) {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", clearProps: "transform" }
      );
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8, rotation: -14 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.1,
            ease: "back.out(1.7)",
            delay: 0.25,
            clearProps: "transform",
          }
        );
      }
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.45,
          clearProps: "transform",
        }
      );
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 60, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.4,
            clearProps: "transform",
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const isCenter = align === "center";

  const ctaClassName = cn(
    "flex w-full flex-row flex-nowrap items-center justify-center gap-3 sm:gap-6 lg:gap-24",
    isCenter ? "sm:justify-center" : "lg:justify-start"
  );

  return (
    <section ref={containerRef} className="hero-page hero-page--tall pb-12 sm:pb-16 lg:pb-0">
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-3 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:py-16 lg:pb-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-16 lg:gap-y-6">
          <div
            ref={contentRef}
            className={cn(
              "order-1 w-full max-w-2xl shrink-0 lg:col-start-1 lg:row-start-1",
              isCenter ? "mx-auto text-center" : "mx-auto text-center lg:mx-0 lg:text-left"
            )}
          >
            {eyebrowStyle === "marker" ? (
              <EyebrowMarker
                label={eyebrow}
                className={cn(
                  isCenter ? "justify-center" : "justify-center lg:justify-start",
                  "text-teal-400"
                )}
              />
            ) : null}

            {eyebrowStyle === "badge" && eyebrow ? (
              <p
                className={cn(
                  COMPONENT_STYLES.label,
                  TEXT_COLOR.tealOnDark,
                  "mb-3 sm:mb-4",
                  isCenter ? "text-center" : "text-center lg:text-left"
                )}
              >
                {eyebrow}
              </p>
            ) : null}

            {badgeLetter ? (
              <div
                ref={badgeRef}
                className={cn(
                  "hero-badge mb-4 hidden h-12 w-12 translate-x-1 sm:mb-5 sm:h-14 sm:w-14 sm:translate-x-0 lg:inline-flex",
                  isCenter ? "mx-auto" : "mx-auto lg:mx-0"
                )}
              >
                <span className={cn("text-2xl font-black sm:text-3xl", TEXT_COLOR.tealOnDark)}>
                  {badgeLetter}
                </span>
              </div>
            ) : null}

            <div className="space-y-3 sm:space-y-4">
              <h1 className={cn(HEADING.hero, "text-balance text-white")}>
                {title}
                {highlight ? ` ${highlight}` : ""}
                {titleAfter ? ` ${titleAfter}` : ""}
              </h1>
              <p className={cn(BODY.hero, "mx-auto max-w-lg text-slate-300 lg:mx-0")}>
                {description}
              </p>
            </div>

            {(primaryCta || secondaryCta) && (
              <div className={cn(ctaClassName, "mt-6 hidden sm:mt-8 lg:flex")}>
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm"
                  >
                    {primaryCta.label}
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
              </div>
            )}
          </div>

          {(primaryCta || secondaryCta) && (
            <div className={cn(ctaClassName, "order-2 w-full shrink-0 lg:hidden")}>
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm"
                >
                  {primaryCta.label}
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
            </div>
          )}

          {imageSrc ? (
            <div
              ref={imageRef}
              className="order-3 hidden w-full shrink-0 justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:justify-end"
            >
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.16)_0%,transparent_70%)] blur-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={420}
                    height={420}
                    className={cn(imageClassName)}
                    priority
                  />
                </div>
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
