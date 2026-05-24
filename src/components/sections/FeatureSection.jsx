"use client";

import React from "react";

export default function ServicesSection() {
  const services = [
    {
      image: "/medimaster service/website development.jpg",
      title: "Website Development",
      desc: "Highly functional & visually appealing website designed to meet your need.",
      isFeatured: true,
    },
    {
      image: "/medimaster service/web development.png",
      title: "App Development In Nepal",
      desc: "Innovative and user-friendly mobile application designed to engage users.",
      isFeatured: false,
    },
    {
      image: "/medimaster service/SystemSoftware Development.jpg",
      title: "System/Software Development",
      desc: "System/software developed according to your business needs.",
      isFeatured: false,
    },
    {
      image: "/medimaster service/ui ux.jpg",
      title: "UI/UX",
      desc: "Design eye-catching UI/UX interfaces for effortless user interaction",
      isFeatured: false,
    },
    {
      image: "/medimaster service/Search Engine Optimization (SEO).png",
      title: "Search Engine Optimization (SEO)",
      desc: "Custom SEO solutions for enhanced search engine visibility and growth",
      isFeatured: false,
    },
    {
      image: "/medimaster service/Social Media Marketing (SMM).jpg",
      title: "Social Media Marketing (SMM)",
      desc: "Build a strong online presence and engage with your targeted audience",
      isFeatured: false,
    },
    {
      image: "/medimaster service/graphic design.png",
      title: "Graphic Design",
      desc: "Designs that Speak Your Brand's Narrative and Connect with Your Audience",
      isFeatured: false,
    },
    {
      image: "/medimaster service/content writing.png",
      title: "Content Writing",
      desc: "Engaging and meaningful content to connect with your audience",
      isFeatured: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 font-sans text-slate-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Exceptional Services For Your{" "}
              <span className="relative inline-block text-emerald-600">
                Business Growth
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-normal max-w-xl pt-1">
              Discover our wide range of digital solutions designed to elevate
              your brand matrix and enhance your online footprint.
            </p>
          </div>

          {/* Clean Modern Call to Action Link */}
          <div className="flex-shrink-0">
            <button className="inline-flex items-center justify-center space-x-2 text-sm font-bold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors duration-200 group border-b-2 border-slate-900 hover:border-emerald-500 pb-1">
              <span>Explore All Frameworks</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
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

        {/* 4-Column Modernized Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 items-stretch">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl p-6 bg-white border border-slate-100 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0,05)]
                ${item.isFeatured ? "ring-2 ring-emerald-500/10 shadow-sm" : ""}`}
            >
              {/* Abstract decorative top strip for featured items */}
              {item.isFeatured && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-2xl" />
              )}

              <div className="space-y-6">
                {/* Image Container with Hover Scale Interface */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 shadow-xs relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-2.5">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Interaction Action Element */}
              <div className="pt-6 mt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-600 transition-colors duration-200">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transform transition-all duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
