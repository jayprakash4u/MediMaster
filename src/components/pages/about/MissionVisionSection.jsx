"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const companyValues = [
  {
    title: "OUR MISSION",
    description:
      "Our mission is to get regarded as one of the credible names in the IT industry. With our specialization in the field of website & Software Development, we prioritize quality, research and innovation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "OUR VISION",
    description:
      "Our vision is to go for long by continuously expanding our global reach in different industry verticals where quality, customer satisfaction and innovation will always be among our top priorities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
        />
      </svg>
    ),
  },
  {
    title: "OUR GOAL",
    description:
      "Our core value is to foster a culture of integrity, collaboration, and excellence, ensuring that we deliver innovative solutions while prioritizing our clients' needs and driving sustainable growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

export default function MissionVisionSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F8FAFC] py-20 font-sans text-gray-600 antialiased"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="currentColor"
                className="text-teal-500"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-500" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Our Values
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900 mb-12">
          Mission, Vision & <span className="text-teal-600">Goals</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {companyValues.map((value, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-[#F1F5F9]/60 rounded-2xl p-8 border border-slate-200/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:bg-white hover:border-teal-500/20 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.08)] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-teal-400 to-cyan-500 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-teal-600 group-hover:text-teal-500 transition-colors">
                    {value.icon}
                  </div>
                </div>

                <h3 className="text-md font-black tracking-wider text-navy-950 uppercase group-hover:text-teal-600 transition-colors duration-200">
                  {value.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed font-normal flex-1">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
