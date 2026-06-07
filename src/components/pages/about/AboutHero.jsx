"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function AboutHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );
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
        },
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.45 },
      );
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
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18)_0,_transparent_38%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.14)_0,_transparent_45%)]" />

      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div
            ref={contentRef}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                  <path
                    d="M0 5h20"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="22" cy="5" r="2" fill="#14B8A6" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-300">
                About Us
              </span>
            </div>

            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Transforming <span className="text-teal-400">Healthcare</span>{" "}
                with Technology
              </h1>
              <p className="text-sm sm:text-base leading-7 text-slate-300">
                Transforming healthcare through precision-engineered technology
                solutions that make clinics, labs, and care providers
                future-ready.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-xl shadow-teal-400/20 transition hover:bg-teal-300"
              >
                Work with us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div
            ref={imageRef}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-md lg:max-w-lg"
              style={{ aspectRatio: "1 / 1" }}
            >
              <div
                className="absolute inset-[10%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/about/about-page-hero.png"
                  alt="About MediMaster"
                  width={420}
                  height={420}
                  className="w-[75%] h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <path
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            fill="#FBFCFD"
          />
        </svg>
      </div>
    </section>
  );
}
