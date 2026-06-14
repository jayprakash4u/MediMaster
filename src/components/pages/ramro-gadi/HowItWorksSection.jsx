"use client";

import React, { useState } from "react";

const steps = [
  {
    id: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Filter & Find",
    description:
      "Search by Body Type, Fuel (EV/Petrol), and Budget to find verified second-hand cars across Nepal.",
  },
  {
    id: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Certified Condition Check",
    description:
      "Review detailed valuation sheets, true mileage readings, and ownership history records transparency.",
  },
  {
    id: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Close the Deal",
    description:
      "Connect instantly with verified owners or premium dealers in Kathmandu to complete secure payments.",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-slate-50 overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Structural Minimal Background Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* ── LEFT SECTION: HIGH-CONTRAST CONTENT & PIPELINE ── */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full w-fit">
              TRANSPARENT MARKETPLACE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
              Your Next Vehicle is Just{" "}
              <span className="text-emerald-600">3 Steps</span> Away
            </h2>
          </div>

          <p className="text-base text-slate-600 leading-relaxed max-w-md">
            We are simplifying the used and new automotive market in Nepal. No
            hidden commissions, just authenticated vehicle matching.
          </p>

          {/* Interactive Steps List */}
          <div className="flex flex-col gap-4 mt-2">
            {steps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white shadow-xl shadow-slate-200/60 border border-slate-200/80 translate-x-1"
                      : "hover:bg-slate-100/80 border border-transparent"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isSelected
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-400 group-hover:text-slate-600 shadow-sm border border-slate-200"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
                        {step.title}
                      </h4>
                      <span
                        className={`text-xs font-black tracking-widest ${isSelected ? "text-emerald-600" : "text-slate-300"}`}
                      >
                        {step.id}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT SECTION: DYNAMIC MODERN COLLAGE / UI PREVIEW ── */}
        <div className="lg:col-span-7 relative w-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center">
          {/* Main Simulated Vehicle Visualizer Display Card */}
          <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 transition-all duration-500 hover:scale-[1.01] z-20 overflow-hidden">
            <div className="w-full h-[62%] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 pointer-events-none" />

              {/* Dynamic Badges tailored to match user step selection state */}
              <div className="flex justify-between items-start z-10">
                <span className="text-xxs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                  {activeStep === 0
                    ? "SUV"
                    : activeStep === 1
                      ? "Verified"
                      : "Electric (EV)"}
                </span>
                <span className="text-sm font-black text-white bg-emerald-600 px-3 py-1 rounded-xl shadow-md">
                  {activeStep === 0
                    ? "NPR 46.5 Lakhs"
                    : activeStep === 1
                      ? "Single Owner"
                      : "Instant Finance"}
                </span>
              </div>

              <div className="z-10">
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-0.5">
                  Top Matched Listing
                </p>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white" style={{ fontFamily: "'Georgia', serif" }}>
                  {activeStep === 0
                    ? "Hyundai Creta SX"
                    : activeStep === 1
                      ? "Tata Nexon EV Max"
                      : "BYD Atto 3 Superior"}
                </h3>
              </div>
            </div>

            {/* Simulated Live Specs Bar Block */}
            <div className="grid grid-cols-3 gap-3 my-5">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                <span className="block text-xxs uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Mileage
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {activeStep === 0
                    ? "14,200 km"
                    : activeStep === 1
                      ? "9,800 km"
                      : "6,400 km"}
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                <span className="block text-xxs uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Transmission
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {activeStep === 0
                    ? "Automatic"
                    : activeStep === 1
                      ? "Automatic"
                      : "Manual"}
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                <span className="block text-xxs uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Location
                </span>
                <span className="text-xs font-bold text-slate-800">
                  Kathmandu
                </span>
              </div>
            </div>

            {/* Dynamic UI Status / Call to action prompt based on selected module */}
            <div className="w-full pt-1 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                <span
                  className={`w-2 h-2 rounded-full ${activeStep === 1 ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`}
                />
                {activeStep === 0
                  ? "12 Advanced Filters Active"
                  : activeStep === 1
                    ? "160+ Point Inspection Passed"
                    : "Secure ESCROW Gateway Ready"}
              </span>
              <button className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1">
                {activeStep === 2 ? "Contact Dealer" : "View Details"} &rarr;
              </button>
            </div>
          </div>

          {/* Underlay Minimalist Card Component for Composition Balance */}
          <div className="absolute top-12 right-4 w-[280px] h-[190px] rounded-3xl bg-gradient-to-tr from-slate-900 to-slate-950 p-5 shadow-xl hidden sm:flex flex-col justify-between border border-slate-800 transform rotate-3 translate-x-6 -translate-y-4 z-10 transition-transform duration-500 hover:rotate-1">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                KM
              </div>
              <span className="text-xxs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-900">
                Trending
              </span>
            </div>
            <div>
              <span className="text-white/40 text-xxs uppercase tracking-wider font-bold block mb-1">
                Avg. Local Price
              </span>
              <h4 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-white" style={{ fontFamily: "'Georgia', serif" }}>
                NPR 32.5L — 44L
              </h4>
              <p className="text-slate-400 text-xxs mt-1">
                Based on recent sales in Pokhara & KTM
              </p>
            </div>
          </div>

          {/* Decorative geometric details */}
          <div className="absolute -bottom-6 left-12 w-24 h-24 rounded-2xl bg-emerald-100 -z-0 transform -rotate-12 opacity-60" />
        </div>
      </div>
    </section>
  );
}
