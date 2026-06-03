"use client";

import React from "react";

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
    image: "/medimaster service/Emailhosting.png",
    title: "Email Hosting",
    desc: "Professional email hosting with custom domain and secure business email solutions.",
    isFeatured: false,
  },
  {
    image: "/medimaster service/webhosting.png",
    title: "Web Hosting",
    desc: "Reliable and scalable web hosting services with 99.9% uptime guarantee.",
    isFeatured: false,
  },
  {
    image: "/medimaster service/webdesign.png",
    title: "Web Design",
    desc: "Modern and responsive web design tailored to your brand and audience.",
    isFeatured: false,
  },
];

export default function FeatureSection() {
  const gradients = [
    "from-teal-500 to-teal-400",
    "from-navy-600 to-navy-500",
    "from-teal-600 to-teal-500",
    "from-navy-500 to-navy-400",
  ];

  const iconBgs = [
    "bg-teal-50",
    "bg-navy-50",
    "bg-teal-50",
    "bg-navy-50",
  ];

  const iconTexts = [
    "text-teal-600",
    "text-navy-600",
    "text-teal-600",
    "text-navy-600",
  ];

  const borders = [
    "border-teal-100",
    "border-navy-100",
    "border-teal-100",
    "border-navy-100",
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 font-sans text-slate-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2.5 text-xs font-bold uppercase tracking-widest text-navy-700 bg-teal-50 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span>Our Expertise</span>
            </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-950 tracking-tight leading-none">
              Exceptional Services For Your{" "}
              <span className="relative inline-block text-teal-600">
                Business Growth
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-normal max-w-xl pt-1">
              Discover our wide range of digital solutions designed to elevate your brand and enhance your online footprint.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 items-stretch">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl p-6 bg-white border ${borders[idx % 4]} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-lg`}
            >
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${gradients[idx % 4]} rounded-t-2xl`} />

              <div className="space-y-6 mt-2">
                <div className={`w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 shadow-xs relative ${iconBgs[idx % 4]}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-2.5">
                  <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-200 leading-snug ${iconTexts[idx % 4]}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-600 transition-colors duration-200">
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
