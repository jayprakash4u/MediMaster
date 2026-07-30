"use client";

import React from "react";

export default function PathologyBenefitsSection() {
  const benefits = [
    "Ensures accurate sample tracking and reduces mislabeling errors",
    "Streamlines lab workflow with automated test scheduling and prioritization",
    "Provides real-time result updates to doctors and patients",
    "Maintains comprehensive audit trails for accreditation compliance",
    "Reduces turnaround time with integrated reporting and analytics",
    "Minimizes manual data entry errors with barcode-based sample management",
    "Supports multi-lab operations with centralized data management",
  ];

  return (
    <section className="relative w-full bg-navy-950 text-white overflow-hidden py-12 px-3 sm:py-16 sm:px-6 lg:py-20 lg:px-20">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center relative z-10">
        <div className="order-2 hidden lg:order-none lg:col-span-5 lg:flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md md:max-w-lg aspect-square flex flex-col items-center justify-end pb-6">
            <div className="relative w-[85%] z-20 transform hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="bg-slate-900 p-2 pb-3 rounded-t-2xl shadow-2xl border border-slate-700/50">
                <div className="relative aspect-[16/10] bg-white rounded-lg overflow-hidden border border-slate-800">
                  <div className="w-full h-full bg-slate-50 flex flex-col p-2 text-slate-800 font-sans text-xxs">
                    <img
                      src="/pathology/benefits.png"
                      alt="Pathology Lab Benefits"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-none lg:col-span-7 flex flex-col justify-center text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-white">
            Benefits of Using Pathology <br className="hidden md:block" />
            Lab Management System
          </h2>

          <ul className="space-y-3 max-w-2xl sm:space-y-4">
            {benefits.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3.5 group">
                <div className="flex-shrink-0 mt-1 flex items-center justify-center text-teal-300">
                  <svg
                    className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base md:text-lg text-slate-200 font-medium group-hover:text-white transition-colors duration-200">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
