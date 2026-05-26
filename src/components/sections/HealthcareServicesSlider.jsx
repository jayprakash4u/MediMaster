"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const portalsData = [
  {
    id: "cutis-path-lab",
    portalName: "Cutis Path Lab Portal",
    badgeText: "Advanced Pathology Solutions",
    taglineFirstHalf: "Accurate diagnostics, right at ",
    taglineHighlight: "your doorstep",
    screenshotUrl: "/cutis-screenshot.png",
    actionLink: "/cutis-portal",
    features: [
      "Comprehensive Blood Testing — Schedule routine CBCs, metabolic profiles, or specialized biomarkers easily.",
      "Instant Test Booking — Select diagnostic combinations, pick slots, and confirm within moments.",
      "Curated Health Packages — All-inclusive health screenings tailored for age groups and medical histories.",
      "Home Sample Collection — Certified phlebotomists deployed directly to your home for safe extraction.",
      "Digital Report Delivery — Secure, structured PDF diagnostic records sent directly via WhatsApp or email.",
      "Rapid Turnaround Times — Advanced automation engines ensure ultra-fast diagnostic report compilation.",
    ],
  },
  {
    id: "everest-polyclinic",
    portalName: "Everest Polyclinic Platform",
    badgeText: "Multi-Specialty Clinical Frameworks",
    taglineFirstHalf: "Integrated outpatient care for your ",
    taglineHighlight: "entire family",
    screenshotUrl: "/everest-screenshot.png",
    actionLink: "/everest-portal",
    features: [
      "Specialist Appointments — Book physical consultations across Pediatrics, Cardiology, and Gynecology.",
      "Real-Time Slot Booking — Live doctor calendars allow conflict-free reservation of clinical sessions.",
      "Preventive Care Schemes — Structured wellness checkups, screening clinics, and family health tracking.",
      "Unified Medical History — Consolidated storage of past clinic notes, prescriptions, and vital statistics.",
      "Pharmacy Integration — Send digital prescriptions directly to the internal dispensary for express pickup.",
      "Walk-In Coordination — Intelligent token mechanisms manage waiting lounges and reduce delays.",
      "Online Doctor Booking — Book expert doctors through online consultations from anywhere.",
      "Health Packages — Curated health screening packages for preventive care and early detection.",
      "Ambulance Booking — 24/7 emergency ambulance services with real-time tracking and GPS navigation.",
      "Blood Bank Services — Access to blood bank inventory and request blood products when needed.",
      "24/7 Services — Round-the-clock medical assistance, emergency care, and pharmacy services.",
    ],
  },
];

export default function HealthcareServicesSlider() {
  const [index, setIndex] = useState(0);
  const current = portalsData[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? portalsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === portalsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Control Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="invisible sm:visible">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
              Product {index + 1} of {portalsData.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 bg-white border border-slate-200 hover:border-teal-400 text-slate-600 hover:text-teal-500 flex items-center justify-center rounded-full transition-colors duration-150"
              aria-label="Previous Portal"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 bg-white border border-slate-200 hover:border-teal-400 text-slate-600 hover:text-teal-500 flex items-center justify-center rounded-full transition-colors duration-150"
              aria-label="Next Portal"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Layout Grid: Image Left, Text Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Fixed aspect-ratio container matching image_704a41.png border style */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs w-full max-w-md">
              <div className="h-1 w-full bg-teal-400" />
              <div className="relative h-64">
                <Image
                  src={current.screenshotUrl}
                  alt={`${current.portalName} System Dashboard Preview`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist view layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Stack */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-300 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span className="text-teal-700 text-xs font-semibold tracking-widest uppercase">
                  {current.badgeText}
                </span>
              </span>
              <h3 className="text-xl font-medium text-navy-950 leading-normal max-w-xl mb-1">
                {current.portalName}
              </h3>
              <p className="text-slate-500 text-[14px] font-normal leading-relaxed">
                {current.taglineFirstHalf}
                <span className="text-teal-500 font-semibold">
                  {current.taglineHighlight}
                </span>
              </p>
            </div>

            {/* Checklist View */}
            <ul className="space-y-3 max-w-2xl mb-8">
              {current.features.map((feature, i) => (
                <li
                  key={`${current.id}-feat-${i}`}
                  className="flex items-start gap-3 text-slate-600 font-normal italic text-[14px] leading-relaxed"
                >
                  <span className="text-teal-500 font-bold not-italic shrink-0 text-base select-none mt-0.5">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Trigger Button */}
            <div>
              <Link
                href={current.actionLink}
                className="inline-flex items-center gap-2 border border-slate-700 bg-white hover:bg-slate-50 text-slate-800 text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-150 shadow-2xs"
              >
                Learn More
                <svg
                  className="w-3.5 h-3.5 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
