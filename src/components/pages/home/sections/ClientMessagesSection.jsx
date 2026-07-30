"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLIENT_MESSAGES } from "@/config/sections/client-messages";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ClientMessageCard({ item }) {
  return (
    <article className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-[#0d2354] p-3 sm:p-5 lg:min-h-[20rem] lg:overflow-visible lg:px-8 lg:py-8 lg:pr-36">
      <Quote
        className="absolute right-2 top-2 h-8 w-8 fill-white/15 text-white/90 sm:h-10 sm:w-10 lg:right-5 lg:top-4 lg:h-16 lg:w-16"
        strokeWidth={0}
        aria-hidden
      />

      <div className="flex flex-1 flex-col lg:max-w-xl lg:pr-4">
        <p className="text-[11px] leading-relaxed text-white sm:text-sm lg:text-[15px] lg:leading-7">
          {item.quote}
        </p>

        <div className="mt-3 flex items-center gap-2.5 lg:mt-6 lg:block">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-[3px] border-sky-400 bg-[#0d2354] sm:h-12 sm:w-12 lg:hidden">
            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold leading-snug text-white sm:text-sm lg:text-base">
              - {item.name}, {item.credentials},
            </p>
            <p className="mt-0.5 text-[10px] leading-snug text-white/85 sm:text-xs lg:text-sm">
              {item.role}
            </p>
            <p className="mt-0.5 hidden text-[10px] leading-snug text-white/85 sm:block sm:text-xs lg:text-sm">
              {item.organization}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-[5px] border-sky-400 bg-[#0d2354] xl:h-32 xl:w-32">
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="128px" />
        </div>
      </div>
    </article>
  );
}

export default function ClientMessagesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const { items } = CLIENT_MESSAGES;
  const visibleCount = 2;
  const maxIndex = Math.max(items.length - visibleCount, 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const visibleItems = items.slice(index, index + visibleCount);

  const prev = () => setIndex((current) => Math.max(current - 1, 0));
  const next = () => setIndex((current) => Math.min(current + 1, maxIndex));

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-12 font-sans antialiased sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <SectionHeader
            headerRef={headerRef}
            align="left"
            eyebrow={CLIENT_MESSAGES.eyebrow}
            title={CLIENT_MESSAGES.title}
            description={CLIENT_MESSAGES.description}
            className="max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {visibleItems.map((item) => (
            <ClientMessageCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center bg-sky-400 text-[#050a1a] transition-opacity hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center bg-sky-400 text-[#050a1a] transition-opacity hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
