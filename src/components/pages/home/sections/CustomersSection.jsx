"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";
import MedicalSectionBackdrop from "@/components/pages/home/shared/MedicalSectionBackdrop";
import { CUSTOMERS_SECTION } from "@/config/sections/customers";
import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CustomerCard({ category, cardRef }) {
  return (
    <article
      ref={cardRef}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm sm:rounded-2xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200 sm:aspect-[16/10]">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-7">
        <h3 className="text-xs font-bold leading-tight text-slate-900 sm:text-base">
          {category.title}
        </h3>

        <ul className="mt-2.5 flex-1 space-y-1.5 sm:mt-5 sm:space-y-2.5">
          {category.clients.map((client, index) => (
            <li
              key={client}
              className={cn("flex items-start gap-1.5 sm:gap-2.5", index >= 3 && "hidden lg:flex")}
            >
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500 sm:mt-2"
                aria-hidden
              />
              <span className="text-[10px] leading-snug text-slate-700 sm:text-sm sm:leading-relaxed">
                {client}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={category.href}
          className="mt-3 inline-flex w-fit items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-900 transition-colors hover:border-teal-500 hover:text-teal-700 sm:mt-6 sm:px-5 sm:py-2 sm:text-sm"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

export default function CustomersSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 font-sans antialiased sm:py-16 lg:py-20"
    >
      <MedicalSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <SectionHeader
          headerRef={headerRef}
          eyebrow={CUSTOMERS_SECTION.eyebrow}
          title={CUSTOMERS_SECTION.title}
          highlight={CUSTOMERS_SECTION.highlight}
          description={CUSTOMERS_SECTION.subtitle}
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {CUSTOMERS_SECTION.categories.map((category, index) => (
            <CustomerCard
              key={category.id}
              category={category}
              cardRef={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
