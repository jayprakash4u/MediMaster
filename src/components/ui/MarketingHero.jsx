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

  return (
    <section ref={containerRef} className="hero-page hero-page--tall">
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div
            ref={contentRef}
            className={cn(
              "flex-1 max-w-2xl",
              isCenter ? "text-center" : "text-center lg:text-left"
            )}
          >
            {eyebrowStyle === "marker" ? (
              <EyebrowMarker
                label={eyebrow}
                className={cn(isCenter ? "justify-center" : "lg:justify-start", "text-teal-400")}
              />
            ) : badgeLetter ? (
              <div ref={badgeRef} className="hero-badge mb-6 h-14 w-14">
                <span className={cn("text-3xl font-black", TEXT_COLOR.tealOnDark)}>
                  {badgeLetter}
                </span>
              </div>
            ) : null}

            <div className="space-y-4">
              {eyebrowStyle === "badge" && eyebrow ? (
                <p className={cn(COMPONENT_STYLES.label, TEXT_COLOR.tealOnDark)}>{eyebrow}</p>
              ) : null}
              <h1 className={cn(HEADING.hero, "text-white")}>
                {title}
                {highlight ? ` ${highlight}` : ""}
                {titleAfter ? ` ${titleAfter}` : ""}
              </h1>
              <p className={cn(BODY.hero, "text-slate-300")}>{description}</p>
            </div>

            {(primaryCta || secondaryCta) && (
              <div
                className={cn(
                  "mt-8 flex flex-col items-center gap-3 sm:flex-row",
                  isCenter ? "sm:justify-center" : "sm:justify-center lg:justify-start"
                )}
              >
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    className="rounded-full px-6 py-2.5"
                  >
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    className="rounded-full border-white/20 bg-navy-900/40 px-6 py-2.5 text-white backdrop-blur-sm hover:border-teal-500/50 hover:bg-navy-800/60 hover:text-white"
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            )}
          </div>

          {imageSrc ? (
            <div ref={imageRef} className="flex flex-1 justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.16)_0%,transparent_70%)] blur-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={420}
                    height={420}
                    className="h-auto w-[75%] object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="hero-page__wave" aria-hidden="true">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none">
          <path d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </svg>
      </div>
    </section>
  );
}
