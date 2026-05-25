"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutImageSplitSection() {
  const sectionRef = useRef(null);
  const imageSideRef = useRef(null);
  const textSideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageSideRef.current, {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(textSideRef.current?.children || [], {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-neutral-50 py-20 md:py-28 font-sans text-gray-600 antialiased overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

        {/* LEFT COLUMN: THE COMPOSED ASYMMETRICAL IMAGE STRUCTURE */}
        <div
          ref={imageSideRef}
          className="lg:col-span-6 relative w-full max-w-xl mx-auto lg:max-w-none h-[480px] sm:h-[580px]"
        >
          {/* 1. Decorative Accent Frame */}
          <div className="absolute top-0 left-4 w-20 h-20 border-t-4 border-l-4 border-orange-500 rounded-tl-2xl pointer-events-none z-0" />

          {/* 2. Background Dot Matrix Pattern */}
          <div className="absolute bottom-4 left-0 grid grid-cols-6 gap-2 opacity-40 z-0 select-none">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            ))}
          </div>

{/* 3. MAIN/PRIMARY IMAGE HOLDER */}
           <div className="absolute top-8 left-12 w-[72%] h-[70%] rounded-3xl overflow-hidden border border-gray-200/60 shadow-card">
             <Image
               src="/about1.jpg"
               alt="About Main"
               fill
               className="object-cover"
               priority
             />
           </div>

           {/* 4. SECONDARY IMAGE HOLDER */}
           <div className="absolute bottom-12 right-4 w-[52%] h-[50%] rounded-3xl overflow-hidden border-4 border-neutral-50 shadow-cardHover">
             <Image
               src="/about2.jpg"
               alt="About Secondary"
               fill
               className="object-cover"
               priority
             />
           </div>

          {/* 5. FLOATING EXPERIENCE BADGE */}
          <div className="absolute top-[28%] right-[16%] transform translate-x-1/2 z-20">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 p-0.5 shadow-xl flex items-center justify-center animate-pulse duration-3000">
              <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center text-center p-2 select-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-navy-950 leading-none">10+</span>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mt-1 leading-tight">Years<br/>Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: BRANDING COPY & CORE FEATURE VERIFICATION LIST */}
        <div ref={textSideRef} className="lg:col-span-6 space-y-6 lg:pl-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-teal-600 font-bold tracking-widest text-xs uppercase">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>About Us</span>
            </div>

            <h2 className="text-3xl font-black text-navy-950 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Data-Driven <span className="text-teal-500">Insights</span> For Smart Decisions
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
            We engineer advanced health data infrastructure and full-stack web environments tailored to meet your clinical workflow and online branding goals. Regardless of structural scope or scale, we assure high-performance systems operating cleanly without hidden bugs or processing latency.
          </p>

          {/* Structured Verification List Checkmarks */}
          <ul className="space-y-3.5 pt-2">
            {[
              "Innovative Solutions for a Digital Future",
              "Empowering Businesses Through Modern Technology",
              "Your Verified Partner in System Infrastructure Transformation"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-gray-700 font-medium">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-500 shadow-inner">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
