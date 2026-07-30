"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import EyebrowMarker from "@/components/ui/EyebrowMarker";
import ServiceHeroMobileVisual from "@/components/ui/ServiceHeroMobileVisual";
import ServiceHeroDesktopVisual from "@/components/ui/ServiceHeroDesktopVisual";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

const defaultPrimaryCta = { href: "/contact", label: "Start a Project" };
const defaultSecondaryCta = { href: "/services", label: "All Services" };

export default function ServiceHero({
  badgeLetter,
  title,
  highlight,
  description,
  imageSrc = "/services/shared/website-development-hero.png",
  imageAlt,
  imageClassName = "h-auto w-[72%] object-contain drop-shadow-2xl sm:w-[75%]",
  floatingIcons = [],
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  eyebrow = "Services",
  useEyebrowMarker = true,
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
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
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

  const ctaButtons = (
    <>
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
    </>
  );

  return (
    <section ref={containerRef} className="hero-page hero-page--tall pb-14 sm:pb-16 lg:pb-0">
      <div className="hero-page__atmosphere" aria-hidden="true" />
      <div className="hero-page__grid" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-3 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:py-16 lg:pb-16">
        {/* Mobile: headline → image → buttons | Desktop: flex row with icons around image */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-16">
          <div
            ref={contentRef}
            className="order-1 w-full max-w-2xl flex-1 text-center lg:text-left"
          >
            {useEyebrowMarker ? (
              <EyebrowMarker
                label={eyebrow}
                className="mb-3 justify-center sm:mb-4 lg:justify-start"
                labelClassName={TEXT_COLOR.tealOnDark}
              />
            ) : (
              <p className={cn(COMPONENT_STYLES.label, TEXT_COLOR.tealOnDark, "mb-3")}>{eyebrow}</p>
            )}

            {badgeLetter ? (
              <div
                ref={badgeRef}
                className="hero-badge mx-auto mb-3 hidden h-11 w-11 sm:mb-4 sm:h-14 sm:w-14 lg:mx-0 lg:inline-flex"
              >
                <span className={cn("text-xl font-black sm:text-3xl", TEXT_COLOR.tealOnDark)}>
                  {badgeLetter}
                </span>
              </div>
            ) : null}

            <div className="space-y-2.5 sm:space-y-4">
              <h1 className={cn(HEADING.hero, "text-balance text-white")}>
                {title}
                {highlight ? ` ${highlight}` : ""}
              </h1>
              <p className={cn(BODY.hero, "mx-auto max-w-lg text-slate-300 lg:mx-0")}>
                {description}
              </p>
            </div>

            {(primaryCta || secondaryCta) && (
              <div className="mt-6 hidden w-full flex-row flex-nowrap items-center justify-center gap-3 sm:mt-8 sm:gap-4 lg:flex lg:justify-start">
                {ctaButtons}
              </div>
            )}
          </div>

          {/* Mobile: image + tool grid | Desktop: floating icons around image */}
          <div className="order-2 flex w-full shrink-0 justify-center py-1 lg:flex-1 lg:justify-end lg:py-0">
            <div ref={imageRef} className="w-full max-w-[292px] md:hidden">
              <ServiceHeroMobileVisual
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                title={title}
                floatingIcons={floatingIcons}
              />
            </div>
            <div className="hidden md:flex md:w-full md:justify-end lg:flex-1">
              <ServiceHeroDesktopVisual
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                title={title}
                imageClassName={imageClassName}
                floatingIcons={floatingIcons}
              />
            </div>
          </div>

          {(primaryCta || secondaryCta) && (
            <div className="order-3 mt-4 flex w-full max-w-2xl flex-row flex-nowrap items-center justify-center gap-3 sm:mt-6 sm:gap-4 lg:hidden">
              {ctaButtons}
            </div>
          )}
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
