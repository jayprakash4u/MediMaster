"use client";

import React, { useState } from "react";

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState("Web Development");

  const categories = [
    "Web Development",
    "App Development",
    "Database",
    "Cloud Platform",
  ];

  const techStack = {
    "Web Development": [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Django",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "WordPress",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
    ],
    "App Development": [
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Swift",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      },
      {
        name: "Kotlin",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
    ],
    Database: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
    "Cloud Platform": [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Google Cloud",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      },
    ],
  };

  // Hardcoded layout calculations to prevent stacking/clumping bugs
  const orbitBadges = [
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      style: { bottom: "25%", left: "2%" },
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      style: { top: "35%", left: "6%" },
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      style: { top: "15%", left: "22%" },
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      style: { top: "8%", left: "50%", transform: "translateX(-50%)" },
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      style: { top: "20%", right: "12%" },
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      style: { bottom: "30%", right: "4%" },
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 pt-16 pb-0 md:pt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-8 pb-12 lg:pb-20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                  <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="22" cy="5" r="2" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
                Our Expertise
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-navy-950"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Technologies We Rely On To{" "}
              <span className="text-teal-500 relative inline-block">
                Achieve
                <span className="absolute bottom-1 left-0 w-full h-2 bg-teal-100 -z-10 rounded-sm" />
              </span>{" "}
              <span className="text-teal-500">Success</span>
            </h2>

            <div className="flex items-center gap-1 border-b border-gray-200 pb-4">
              {categories.map((category, idx) => (
                <React.Fragment key={category}>
                  <button
                    onClick={() => setActiveTab(category)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md whitespace-nowrap
                      ${
                        activeTab === category
                          ? "text-teal-600 bg-teal-50 font-semibold"
                          : "text-gray-500 hover:text-navy-500 hover:bg-gray-100"
                      }`}
                  >
                    {category}
                  </button>
                  {idx < categories.length - 1 && (
                    <span className="text-gray-300">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 pt-4">
              {techStack[activeTab]?.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-neutral-50 p-4 transition-all duration-300 ease-out hover:border-teal-200 hover:bg-white hover:shadow-md"
                >
                  <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="h-full w-full object-contain transition-all duration-300"
                    />
                  </div>
                  <span className="mt-2 font-medium text-xxs text-gray-600 group-hover:text-navy-900 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Frame */}
          <div className="relative lg:col-span-6 w-full flex flex-col justify-end items-center lg:items-end">
            {/* Explicitly defined container box using standard tailwind shadow rules */}
            <div className="relative w-full max-w-[500px] aspect-[1/1] flex items-end">
              {/* Badges positioned utilizing native inline styles to prevent arbitrary Tailwind purges */}
              {orbitBadges.map((badge, index) => (
                <div
                  key={index}
                  className="absolute z-30 p-2.5 bg-white rounded-full shadow-lg border border-gray-200/80 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={badge.style}
                >
                  <div className="w-6 h-6 md:w-7 md:h-7 relative flex items-center justify-center">
                    <img
                      src={badge.logo}
                      alt="Tech badge"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Verified palette image graphic asset */}
              <div className="relative w-full h-full z-10 select-none flex items-end">
                <img
                  src="/home/techstack.gif"
                  alt="Developer engineering section graphic"
                  className="w-full h-auto max-h-full object-contain object-bottom block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
