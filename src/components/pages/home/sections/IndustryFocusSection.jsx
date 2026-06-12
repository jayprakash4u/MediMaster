"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryFocusSection() {
  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      title: "Seamlessly delivering end-to-end digital health experiences",
      image: "/industries/healthcare.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "banking",
      name: "Banking & Financial Services",
      title: "Empowering secure, robust enterprise-grade banking operations",
      image: "/industries/banking and finance service.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: "insurance",
      name: "Insurance",
      title: "Optimized claiming pipelines & modernized system matrices",
      image: "/industries/insurance.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "telecom",
      name: "Telecom",
      title: "Building modern communications infrastructure arrays",
      image: "/industries/telecom.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-1.414a5 5 0 010-7.071m7.071 0a5 5 0 010 7.071M13 12a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      ),
    },
    {
      id: "lifesciences",
      name: "Life Sciences",
      title: "Accelerating discovery channels with analytical precision",
      image: "/industries/life science.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: "hightech",
      name: "High Technology",
      title: "Next-gen frameworks scaled for fast cloud implementation",
      image: null,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "media",
      name: "Media & Entertainment",
      title: "Interactive user layout structures engineered to scale",
      image: "/industries/media and entertenment.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
    },
    {
      id: "government",
      name: "Education & Learning",
      title: "Secure, humanized solutions for regional public utilities",
      image: "/industries/education and learning.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "manufacturing",
      name: "Human Resources & Recruitment",
      title: "Real-time process telemetry and material tracking models",
      image: "/industries/human resources managment.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "utilities",
      name: "Retail & eCommerce",
      title: "Optimized infrastructure distribution for sustainable growth",
      image: "/industries/retail and ecommerce.jpg",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section className="w-full bg-slate-50/50 py-20 md:py-28 font-sans text-slate-600 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Header Section */}
        <div className="max-w-4xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600">
              Market Segments
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Purpose-built, next-gen solutions grounded in deep industry
            expertise
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-3xl pt-1">
            We collaborate with clients across multiple critical global sectors
            to build highly tailored architectures that address unique
            structural friction vectors.
          </p>
        </div>

        {/* Core Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column Navigation List */}
          <div className="lg:col-span-5 flex flex-col justify-start bg-white rounded-2xl p-3 border border-slate-100 shadow-xs h-fit">
            {industries.map((item) => {
              const isSelected = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl group text-left transition-all duration-200
                    ${
                      isSelected
                        ? "bg-slate-900 text-white font-semibold shadow-md pl-6"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`transition-colors duration-200 
                      ${isSelected ? "text-emerald-400" : "text-slate-400 group-hover:text-slate-900"}`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm md:text-base tracking-wide font-medium">
                      {item.name}
                    </span>
                  </div>

                  {/* Right Arrow indicator showing state tracking */}
                  <svg
                    className={`w-4 h-4 transition-all duration-200 transform
                      ${isSelected ? "opacity-100 translate-x-0 text-emerald-400" : "opacity-0 -translate-x-2 text-slate-900 group-hover:opacity-100 group-hover:translate-x-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Column Interactive Canvas Showcase Container */}
          <div className="lg:col-span-7 w-full flex flex-col justify-stretch">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-md flex flex-col justify-between group">
              {/* Active Industry Image with key replacement mapping sequence */}
              {activeTab.image ? (
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                  <img
                    key={activeTab.id}
                    src={activeTab.image}
                    alt={activeTab.name}
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle dark layout gradient protection overlay mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent z-1" />
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none select-none bg-slate-50 z-0">
                  <svg
                    className="w-12 h-12 text-slate-300 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a1 1 0 011.414 0L14 16m-2-2l1.586-1.586a1 1 0 011.414 0L19 14m-5-7h1m-1 4h1m-5-4h1m-1 4h1M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold font-mono">
                    Image Showcase Layer: {activeTab.name}
                  </span>
                </div>
              )}

              {/* Bottom Card Overlay Container */}
              <div className="relative mt-auto mx-4 mb-4 sm:mx-6 sm:mb-6 p-6 sm:p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl z-10 space-y-5 max-w-xl border border-white/20 shadow-xl transition-all duration-300">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    Featured Vector
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-neutral-50 leading-snug tracking-tight">
                    {activeTab.title}
                  </h3>
                </div>

                <div>
                  <button className="inline-flex items-center justify-center bg-[#E0532B] hover:bg-[#C2411D] text-neutral-50 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-sm transition-colors duration-200 group/btn">
                    <span>Explore Framework</span>
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
