"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "APPOINTMENT MANAGEMENT",
    description:
      "Allow patients to schedule and fix appointments with the available doctors with a single click.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <rect
          x="8"
          y="10"
          width="48"
          height="6"
          rx="2"
          className="fill-teal-500/10 stroke-teal-500"
          strokeWidth="2.5"
        />
        <rect
          x="8"
          y="10"
          width="48"
          height="48"
          rx="4"
          className="stroke-teal-500"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="8"
          y1="22"
          x2="56"
          y2="22"
          className="stroke-teal-500"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="6"
          x2="20"
          y2="16"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="6"
          x2="44"
          y2="16"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="28"
          width="10"
          height="8"
          rx="1.5"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
        <rect
          x="30"
          y="28"
          width="10"
          height="8"
          rx="1.5"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
        <rect
          x="16"
          y="42"
          width="10"
          height="8"
          rx="1.5"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
        <rect
          x="30"
          y="42"
          width="10"
          height="8"
          rx="1.5"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
        <line
          x1="34"
          y1="48"
          x2="52"
          y2="48"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="34"
          y1="44"
          x2="52"
          y2="44"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="34"
          y1="52"
          x2="46"
          y2="52"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "DOCTOR RECORDS",
    description:
      "Make a complete profile of doctors and manage their availability and schedule their meetings.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <circle
          cx="32"
          cy="20"
          r="12"
          className="fill-teal-500/10 stroke-teal-500"
          strokeWidth="2.5"
        />
        <circle
          cx="32"
          cy="18"
          r="7"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="2"
        />
        <path
          d="M14 52c0-10 8-16 18-16s18 6 18 16"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect
          x="26"
          y="38"
          width="12"
          height="10"
          rx="2"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="1.5"
        />
        <path
          d="M28 44 Q32 40 36 44"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="32"
          y1="44"
          x2="32"
          y2="48"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="49" r="2" className="fill-teal-500" />
        <circle cx="32" cy="53" r="2" className="fill-teal-500" />
      </svg>
    ),
  },
  {
    title: "IN-PATIENT MANAGEMENT",
    description:
      "Manage records of in-patients along with their admission details, bed number, diet, payments and case scenario.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <rect
          x="14"
          y="6"
          width="36"
          height="52"
          rx="3"
          className="fill-teal-500/10 stroke-teal-500"
          strokeWidth="2.5"
        />
        <rect
          x="22"
          y="2"
          width="20"
          height="10"
          rx="2"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="2"
        />
        <line
          x1="22"
          y1="24"
          x2="42"
          y2="24"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="32"
          x2="42"
          y2="32"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="40"
          x2="36"
          y2="40"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="18"
          x2="32"
          y2="28"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="27"
          y1="23"
          x2="37"
          y2="23"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "OUTPATIENT MANAGEMENT",
    description:
      "Manage payments, services received, medicines and lab reports of patients who are not admitted to the hospital.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <rect
          x="6"
          y="26"
          width="52"
          height="28"
          rx="3"
          className="fill-teal-500/10 stroke-teal-500"
          strokeWidth="2.5"
        />
        <rect
          x="14"
          y="16"
          width="36"
          height="18"
          rx="2"
          className="fill-teal-500/15 stroke-teal-500"
          strokeWidth="2"
        />
        <rect
          x="20"
          y="10"
          width="24"
          height="12"
          rx="2"
          className="stroke-teal-500"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="14"
          y1="38"
          x2="50"
          y2="38"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="12"
          y="42"
          width="10"
          height="6"
          rx="1"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
        <rect
          x="26"
          y="42"
          width="10"
          height="6"
          rx="1"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
        <rect
          x="40"
          y="42"
          width="10"
          height="6"
          rx="1"
          className="fill-teal-500/30 stroke-teal-500"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "BILLINGS",
    description: "Manage all transactions related to payments and invoices.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <ellipse
          cx="32"
          cy="32"
          rx="28"
          ry="18"
          className="fill-teal-500/10 stroke-teal-500"
          strokeWidth="2.5"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="12"
          className="fill-teal-500/10 stroke-teal-500"
          strokeWidth="2"
        />
        <text
          x="32"
          y="37"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          className="fill-teal-500"
          fontFamily="sans-serif"
        >
          $
        </text>
        <path
          d="M10 38 Q32 50 54 38"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="18"
          y1="28"
          x2="22"
          y2="26"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="42"
          y1="26"
          x2="46"
          y2="28"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "BED MANAGEMENT SYSTEM",
    description: "Allocate and ensure a unique bed number for each patient.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          d="M6 42 L6 30 Q6 26 10 26 L54 26 Q58 26 58 30 L58 42"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect
          x="6"
          y="42"
          width="52"
          height="8"
          rx="2"
          className="fill-teal-500/15 stroke-teal-500"
          strokeWidth="2"
        />
        <line
          x1="6"
          y1="50"
          x2="6"
          y2="56"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="58"
          y1="50"
          x2="58"
          y2="56"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="10"
          y="18"
          width="18"
          height="12"
          rx="3"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="2"
        />
        <path
          d="M36 26 L36 20 Q36 16 40 16 L52 16 Q56 16 56 20 L56 26"
          className="stroke-teal-500"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="32"
          y1="26"
          x2="32"
          y2="42"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="22"
          x2="20"
          y2="26"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="17"
          y1="24"
          x2="23"
          y2="24"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "LABORATORY MANAGEMENT",
    description:
      "Keep detailed records of the tests performed on each patient.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          d="M24 8 L24 34 L10 52 Q8 56 12 58 L52 58 Q56 56 54 52 L40 34 L40 8"
          className="stroke-teal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="20"
          y="6"
          width="24"
          height="6"
          rx="2"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="2"
        />
        <path
          d="M18 46 Q32 40 46 46"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="22" cy="52" r="2" className="fill-teal-500" opacity="0.5" />
        <circle cx="30" cy="50" r="2" className="fill-teal-500" opacity="0.5" />
        <circle cx="38" cy="52" r="2" className="fill-teal-500" opacity="0.5" />
        <path
          d="M24 34 L40 34"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "PHARMACY MANAGEMENT",
    description:
      "Keep track of medicines prescribed and given to each patient.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          d="M32 8 L32 8 C32 8 20 8 16 20 C12 32 20 40 24 46 C26 50 28 54 32 56 C36 54 38 50 40 46 C44 40 52 32 48 20 C44 8 32 8 32 8 Z"
          className="stroke-teal-500"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="20"
          y1="24"
          x2="44"
          y2="24"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 14 Q28 10 32 8 Q36 10 40 14"
          className="stroke-teal-500"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="26"
          y1="32"
          x2="38"
          y2="32"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="28"
          x2="32"
          y2="36"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 40 Q27 36 32 38 Q37 36 42 40"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="28"
          y1="18"
          x2="36"
          y2="18"
          className="stroke-teal-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function KeyFeatures() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-16 px-6 sm:px-12 lg:px-16 antialiased selection:bg-teal-100">
      {/* Dynamic One-Line Header Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-200/80 pb-8 mb-12 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
              Platform Capabilities
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-navy-950"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Key Features
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group bg-background-card rounded-2xl border border-gray-200/60 p-8 flex flex-col gap-5 shadow-sm hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <div className="p-3 bg-gray-100 rounded-xl w-fit group-hover:bg-teal-50 group-hover:scale-105 transition-all duration-300">
              {feature.icon}
            </div>

            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm font-semibold tracking-wide text-navy-950 uppercase group-hover:text-teal-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
