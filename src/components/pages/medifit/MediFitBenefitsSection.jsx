"use client";

import React from "react";
import { HEADING } from "@/lib/typography";

export default function MediFitBenefitsSection() {
  const benefits = [
    "Enables proactive health management with AI-powered predictive analytics and risk scoring",
    "Provides personalized wellness plans tailored to individual health profiles and goals",
    "Improves patient engagement with real-time health monitoring and wearable integration",
    "Reduces healthcare costs by preventing chronic conditions through early intervention",
    "Enables remote care delivery with integrated telemedicine and virtual consultations",
    "Provides actionable insights with comprehensive health reports and trend analysis",
  ];

  return (
    <section className="relative w-full bg-navy-950 text-white overflow-hidden py-20 px-6 sm:px-12 lg:px-20">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md md:max-w-lg aspect-square flex flex-col items-center justify-end pb-6">
            <div className="relative w-[85%] z-20 transform hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="bg-slate-900 p-2 pb-3 rounded-t-2xl shadow-2xl border border-slate-700/50">
                <div className="relative aspect-[16/10] bg-white rounded-lg overflow-hidden border border-slate-800">
                  <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                    <svg className="w-24 h-24 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-white" style={{ fontFamily: "'Georgia', serif" }}>
            Benefits of Using Health <br className="hidden md:block" />
            <span className="text-emerald-600">Analytics Platform</span>
          </h2>

          <ul className="space-y-4 max-w-2xl">
            {benefits.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3.5 group">
                <div className="flex-shrink-0 mt-1 flex items-center justify-center text-emerald-300">
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
