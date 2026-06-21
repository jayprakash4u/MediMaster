"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CardMedia, CardMediaBody, CardMediaImage } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUpOnScroll } from "@/lib/gsap-scroll";

function getCategoryTag(category) {
  const primary = category.split("/")[0].trim();
  if (primary.length <= 14) return primary.toUpperCase();
  return primary.split(" ")[0].toUpperCase();
}

function getDescription(features) {
  return features.join(". ") + ".";
}

function TypeCard({ item }) {
  const tag = getCategoryTag(item.category);
  const description = getDescription(item.features);

  return (
    <CardMedia>
      <CardMediaImage>
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
      </CardMediaImage>

      <CardMediaBody className="card-media__body--center">
        <p className="card-eyebrow">{tag}</p>
        <h3 className="card-title mt-2 font-serif sm:text-xl">{item.category}</h3>
        <p className="card-desc mt-3 max-w-none font-serif text-xs sm:text-[13px]">{description}</p>
      </CardMediaBody>
    </CardMedia>
  );
}

export default function ServiceTypesSection({
  eyebrow = "Services",
  title = "Solutions we",
  highlight = "craft",
  types = [],
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (header) fadeUpOnScroll(header, section, { y: 24, start: "top 82%" });
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
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            className="max-w-xl"
          />
        </div>

        <div ref={gridRef} className="card-grid">
          {types.map((item) => (
            <TypeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
