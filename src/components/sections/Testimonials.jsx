"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "MediMaster has completely transformed how we manage our hospital operations. Their in-depth knowledge of various infrastructure setups is highly intuitive, reliable, and solution-oriented.",
    position: "Chief Medical Officer",
    company: "Everest Polyclinic",
  },
  {
    quote:
      "The Cutis Path Lab integration was seamless. We have reduced our testing cycle time and can deliver new analytical capabilities faster with absolute accuracy.",
    position: "Pathology Director",
    company: "Central Diagnostics Lab",
  },
  {
    quote:
      "As a healthcare provider, the platform has been a complete game-changer for engagement. We went live with 100% financial accuracy and excellent workflow compliance.",
    position: "Wellness Director",
    company: "HealthFirst Wellness Center",
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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gray-50 antialiased font-sans"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Grid Layout with Right-Aligned Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 gap-6">
          <div className="testimonial-header-content space-y-1">
            <span className="text-teal-600 font-bold tracking-[0.2em] text-xs uppercase block">
              Testimonials
            </span>
            <h2 className="text-3xl font-black text-navy-950 sm:text-4xl lg:text-5xl tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigational Slider Arrows to match layout pattern */}
          <div className="testimonial-arrows flex items-center space-x-3 pb-1">
            <button className="w-11 h-11 rounded-xl border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-teal-500 hover:text-teal-500 transition-colors duration-200 shadow-xs">
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
            <button className="w-11 h-11 rounded-xl border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-teal-500 hover:text-teal-500 transition-colors duration-200 shadow-xs">
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

        {/* Testimonials Structural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-gray-100 rounded-3xl p-8 pt-12 shadow-card hover:shadow-cardHover border border-gray-200/50 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between text-center"
            >
              {/* Top-Centered Floating Quote Badge Layer */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-950 font-serif font-black text-3xl shadow-sm group-hover:border-teal-200 transition-colors duration-300 select-none">
                “
              </div>

              {/* Main Testimonial Copy Layer */}
              <div className="relative z-10 mb-8">
                <p className="text-gray-600 font-normal leading-relaxed text-sm sm:text-base">
                  {t.quote}
                </p>
              </div>

              {/* Identity Footer Info Meta Blocks */}
              <div className="space-y-1">
                <h4 className="font-extrabold text-teal-500 text-sm md:text-base tracking-wide uppercase">
                  {t.position}
                </h4>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
