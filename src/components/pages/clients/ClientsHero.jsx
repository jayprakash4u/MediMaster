"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ClientsHero() {
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
          <div ref={contentRef} className="flex-1 max-w-2xl text-center lg:text-left">
            <div
              ref={badgeRef}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal-300/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] mb-6"
            >
              <span className="text-3xl font-black text-teal-300">C</span>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-300/80">
                Healthcare Partners
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Trusted by{" "}
                <span className="text-teal-300">500+</span> Healthcare
                <br className="hidden sm:block" /> Institutions
              </h1>
              <p className="text-sm sm:text-base leading-7 text-slate-300">
                Powering Nepal's hospitals, pharmacies, and diagnostic centers
                with intelligent medical software solutions that transform
                patient care.
              </p>
            </div>
          </div>

          <div ref={imageRef} className="flex-1 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md lg:max-w-lg"
              style={{ aspectRatio: "1 / 1" }}
            >
              <div
                className="absolute inset-[10%] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image
                    src="/clients/hero.png"
                    alt="Our Clients"
                    fill
                    className="object-contain rounded-full"
                    priority
                  />
                </div>
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