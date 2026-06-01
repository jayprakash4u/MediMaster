"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "MediMaster has completely transformed how we manage our hospital operations. Their in-depth knowledge of various infrastructure setups is highly intuitive, reliable, and solution-oriented.",
    position: "Chief Medical Officer",
    company: "Everest Polyclinic",
    imageUrl: "/client.png",
  },
  {
    quote:
      "The Cutis Path Lab integration was seamless. We have reduced our testing cycle time and can deliver new analytical capabilities faster with absolute accuracy.",
    position: "Pathology Director",
    company: "Central Diagnostics Lab",
    imageUrl: "/aboutpagehero.png",
  },
  {
    quote:
      "As a healthcare provider, the platform has been a complete game-changer for engagement. We went live with 100% financial accuracy and excellent workflow compliance.",
    position: "Wellness Director",
    company: "HealthFirst Wellness Center",
    imageUrl: "/contact.png",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation Sequence
      gsap.from(".testimonial-header-content", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Slider Control Arrow Animation Sequence
      gsap.from(".testimonial-arrows", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Staggered Card Reveal Array
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-slate-900 text-white antialiased font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Grid Layout */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="testimonial-header-content space-y-2">
            <span className="text-teal-400 font-bold tracking-[0.2em] text-xs uppercase block">
              Case Studies & Reviews
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl tracking-tight">
              Proven Results, Trusted Software.
            </h2>
          </div>

          {/* Navigational Slider Arrows */}
          <div className="testimonial-arrows flex items-center space-x-3 pb-1">
            <button className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:border-teal-400 hover:text-teal-400 transition-all duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:border-teal-400 hover:text-teal-400 transition-all duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* High-Fidelity Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group flex flex-col justify-between bg-slate-950 rounded-3xl border border-slate-800/60 hover:border-teal-500/30 overflow-hidden shadow-2xl transition-all duration-300 min-h-[640px]"
            >
              {/* Top Section: Identity & Feedback */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  {/* Rating Accent */}
                  <div className="flex text-teal-400 gap-1 mb-6 text-lg tracking-widest select-none">
                    ★★★★★
                  </div>

                  {/* Feedback Copy */}
                  <p className="text-slate-300 font-normal leading-relaxed text-base">
                    “{t.quote}”
                  </p>
                </div>

                {/* Identity Metadata Footer */}
                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <h4 className="font-bold text-white text-base tracking-wide">
                    {t.position}
                  </h4>
                  <p className="text-sm text-slate-400 font-medium">
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Bottom Section: Browser Screen Showcase Container */}
              <div className="px-6 pb-6 mt-auto">
                <div className="relative w-full aspect-[4/3] rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                  {/* Mockup Top Browser Navigation Bar */}
                  <div className="h-6 bg-slate-900 border-b border-slate-800 flex items-center px-3 gap-1.5 select-none">
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="h-3 w-1/3 bg-slate-800/50 rounded ml-2"></div>
                  </div>

                  {/* Actual Full-Size Site Image */}
                  <div className="absolute inset-x-0 bottom-0 top-6 overflow-hidden">
                    <Image
                      src={t.imageUrl}
                      alt={`Platform interface deployed for ${t.company}`}
                      fill
                      sizes="(max-w-7xl) 33vw"
                      priority={index === 0}
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
