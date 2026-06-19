"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUpOnScroll } from "@/lib/gsap-scroll";
import { WEBSITE_TYPES } from "@/config/sections/website-development";

function getCategoryTag(category) {
  const primary = category.split("/")[0].trim();
  if (primary.length <= 14) return primary.toUpperCase();
  return primary.split(" ")[0].toUpperCase();
}

function getDescription(features) {
  return features.join(". ") + ".";
}

function WebsiteTypeCard({ item }) {
  const tag = getCategoryTag(item.category);
  const description = getDescription(item.features);

  return (
    <article className="type-card flex h-full w-full max-w-[360px] flex-col bg-white shadow-[0_8px_24px_-10px_rgba(0,0,0,0.14)]">
      <div className="relative aspect-[16/10] shrink-0 bg-slate-200">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.category}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4">
            <span className="text-center text-sm text-slate-500">{item.category}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center px-4 py-5 text-center sm:px-5 sm:py-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">{tag}</p>
        <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-slate-900 sm:text-xl">
          {item.category}
        </h3>
        <p className="mt-3 max-w-[300px] font-serif text-xs leading-relaxed text-slate-600 sm:text-[13px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function WebsiteTypesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (header) {
        fadeUpOnScroll(header, section, { y: 24, start: "top 82%" });
      }

      if (grid) {
        fadeUpOnScroll(grid.querySelectorAll(".type-card"), grid, {
          y: 28,
          stagger: 0.08,
          start: "top 85%",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-8 lg:mb-10">
          <SectionHeader
            align="left"
            eyebrow="Website Types"
            title="Solutions we"
            highlight="craft"
            className="max-w-xl"
          />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {WEBSITE_TYPES.map((item) => (
            <WebsiteTypeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
