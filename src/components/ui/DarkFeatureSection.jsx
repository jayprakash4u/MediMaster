"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

const ArrowIcon = () => (
  <ArrowRight className="mt-[3px] h-4 w-4 shrink-0 text-teal-400" strokeWidth={2.5} />
);

export default function DarkFeatureSection({
  eyebrow,
  title,
  highlight,
  highlightFirst = false,
  items,
  href,
  ctaLabel = "Learn more",
  backgroundImage,
  backgroundAlt,
  productImage,
  productAlt,
  reverse = false,
}) {
  return (
    <section className="relative w-full overflow-hidden px-6 py-16 font-sans sm:px-12 md:py-24 lg:px-16">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt={backgroundAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={cn(
            "flex flex-col-reverse items-start gap-10 lg:flex-row lg:gap-14",
            reverse && "lg:flex-row-reverse"
          )}
        >
          <div className="min-w-0 flex-1">
            <p className={`${COMPONENT_STYLES.label} mb-2 ${TEXT_COLOR.tealOnDark}`}>{eyebrow}</p>
            <h2 className={`${HEADING.display} text-white`}>
              {highlightFirst && highlight ? (
                <>
                  <span className={TEXT_COLOR.tealOnDark}>{highlight}</span> {title}
                </>
              ) : (
                <>
                  {title}{" "}
                  {highlight ? <span className={TEXT_COLOR.tealOnDark}>{highlight}</span> : null}
                </>
              )}
            </h2>

            <ul className="m-0 mt-6 block list-none p-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
              {items.map((item) => (
                <li key={item} className="mb-3 flex items-start gap-2 overflow-hidden sm:mb-0">
                  <span className="inline-flex w-full items-start gap-2">
                    <ArrowIcon />
                    <span className={`${BODY.small} text-slate-300`}>{item}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={href}
              className={`${COMPONENT_STYLES.linkAccent} mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal-400 px-5 py-2 ${TEXT_COLOR.tealOnDark} transition-colors hover:bg-teal-500 hover:text-white sm:w-auto sm:justify-start`}
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="w-full shrink-0 lg:sticky lg:top-10 lg:w-[400px]">
            <div className="overflow-hidden rounded-xl border-2 border-teal-400 bg-navy-950/50 shadow-xl">
              <Image
                src={productImage}
                alt={productAlt}
                width={840}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
