"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle, Phone } from "lucide-react";
import { fadeUpOnScroll } from "@/lib/gsap-scroll";
import { SERVICE_NAV } from "@/lib/service-nav";
import { cn } from "@/lib/cn";
import gsap from "gsap";

export default function ServiceIntro({
  activeHref,
  detail,
  highlights = [],
  stats = [],
  imageBadge,
}) {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (imageWrap) {
        fadeUpOnScroll(imageWrap, section, { y: 32, duration: 0.85, start: "top 80%" });
      }
      if (content) {
        fadeUpOnScroll(content.children, content, { y: 24, stagger: 0.12, start: "top 82%" });
      }
      if (stats) {
        fadeUpOnScroll(stats.children, stats, { y: 20, stagger: 0.1, start: "top 90%" });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-white pb-4 pt-10 sm:pt-12 lg:pt-16"
    >
      <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-teal-400/10" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-10">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 lg:hidden"
          >
            Browse services
            <svg
              className={cn("h-4 w-4 transition-transform", sidebarOpen && "rotate-180")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <aside
            className={cn(
              "w-full shrink-0 lg:w-[260px]",
              sidebarOpen ? "block" : "hidden lg:block"
            )}
          >
            <div className="sticky top-28 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Services
                  </p>
                </div>
                <ul className="max-h-[360px] overflow-y-auto p-2">
                  {SERVICE_NAV.map((service) => {
                    const active = service.href === activeHref;
                    return (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className={cn(
                            "block rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
                            active
                              ? "bg-slate-900 font-semibold text-white shadow-sm"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          )}
                        >
                          {service.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-50 to-white p-5">
                <p className="text-sm font-bold text-slate-900">Need a quote?</p>
                <p className="mt-1 text-xs text-slate-500">We respond within 24 hours.</p>
                <div className="mt-4 space-y-2">
                  <a
                    href="https://wa.me/919643558215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:text-teal-700"
                  >
                    <MessageCircle className="h-4 w-4 text-teal-600" strokeWidth={2} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919643558215"
                    className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:text-teal-700"
                  >
                    <Phone className="h-4 w-4 text-teal-600" strokeWidth={2} />
                    Call us
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div
                ref={imageWrapRef}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:rounded-3xl"
              >
                <Image
                  src={detail.imageSrc}
                  alt={detail.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                {imageBadge ? (
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex rounded-full bg-slate-900/60 px-3 py-1 text-xs font-semibold text-white">
                      {imageBadge}
                    </span>
                  </div>
                ) : null}
              </div>

              <div ref={contentRef}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                  Overview
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
                  {detail.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                  {detail.description}
                </p>

                {highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm sm:h-6 sm:w-6">
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            {stats.length > 0 ? (
              <div
                ref={statsRef}
                className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-950 p-4 sm:mt-10 sm:gap-4 sm:p-8 lg:grid-cols-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-xl font-extrabold tabular-nums text-white sm:text-2xl lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400 sm:mt-1 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
