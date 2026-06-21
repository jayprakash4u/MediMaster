"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLIENT_MESSAGES } from "@/config/sections/client-messages";
import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ClientMessageCard({ item }) {
  return (
    <article className="relative min-h-[19rem] overflow-visible rounded-xl bg-[#0d2354] px-6 py-7 sm:min-h-[20rem] sm:px-8 sm:py-8 lg:pr-36">
      <Quote
        className="absolute right-5 top-4 h-14 w-14 fill-white/15 text-white/90 sm:h-16 sm:w-16"
        strokeWidth={0}
        aria-hidden
      />

      <div className="max-w-xl pr-4">
        <p className="text-sm leading-relaxed text-white sm:text-[15px] sm:leading-7">
          {item.quote}
        </p>

        <p className="mt-6 text-sm font-bold text-white sm:text-base">
          - {item.name}, {item.credentials},
        </p>
        <p className="mt-1 text-xs leading-relaxed text-white/85 sm:text-sm">{item.role}</p>
        <p className="text-xs leading-relaxed text-white/85 sm:text-sm">{item.organization}</p>
      </div>

      <div className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 sm:-right-4">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-[5px] border-sky-400 bg-[#0d2354] sm:h-32 sm:w-32">
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
  const [visibleCount, setVisibleCount] = useState(2);

  const { items } = CLIENT_MESSAGES;
  const maxIndex = Math.max(items.length - visibleCount, 0);

  useEffect(() => {
    const updateVisible = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(items.length - visibleCount, 0)));
  }, [visibleCount, items.length]);

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
      className="overflow-hidden bg-white py-14 font-sans antialiased sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div
          className={cn(
            "grid gap-6",
            visibleCount === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
          )}
        >
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
