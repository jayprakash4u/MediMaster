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
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8, rotation: -14 },
          { opacity: 1, scale: 1, rotation: 0, duration: 1.1, ease: "back.out(1.7)", delay: 0.25 }
        );
      }
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.45 }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.92 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.4 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const isCenter = align === "center";

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white lg:min-h-[80vh]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18)_0,_transparent_38%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.14)_0,_transparent_45%)] opacity-20" />

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
                className={cn(isCenter ? "justify-center" : "lg:justify-start")}
                labelClassName="text-teal-300"
              />
            ) : badgeLetter ? (
              <div
                ref={badgeRef}
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal-300/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              >
                <span className="text-3xl font-black text-teal-300">{badgeLetter}</span>
              </div>
            ) : null}

            <div className="space-y-4">
              {eyebrowStyle === "badge" && eyebrow ? (
                <p className={`${COMPONENT_STYLES.label} text-teal-300/80`}>{eyebrow}</p>
              ) : null}
              <h1 className={`${HEADING.h1} text-white`}>
                {title} {highlight ? <span className="text-teal-300">{highlight}</span> : null}
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
                    className="rounded-full bg-teal-400 text-slate-950 hover:bg-teal-300"
                  >
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
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
                <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,transparent_70%)] blur-xl" />
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

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block h-[70px] w-full fill-gray-50"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <path d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </svg>
      </div>
    </section>
  );
}
