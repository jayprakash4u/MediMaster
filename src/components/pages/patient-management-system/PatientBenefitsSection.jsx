"use client";

import React from "react";
import { HEADING, COMPONENT_STYLES, BODY, TEXT_COLOR } from "@/lib/typography";

export default function PatientBenefitsSection() {
  const benefits = [
    "Reduces wait times with optimized patient flow and appointment scheduling",
    "Ensures accurate records with comprehensive patient history and allergy tracking",
    "Streamlines care coordination across departments and providers",
    "Minimizes administrative burden with automated billing and insurance processing",
    "Improves patient satisfaction with personalized care plans",
    "Provides real-time visibility into patient status and resource utilization",
    "Ensures compliance with healthcare data privacy regulations",
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
                  <img
                    src="/products/patient benefit.png"
                    alt="Patient Management Benefits"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-none lg:col-span-7 flex flex-col justify-center text-left">
          <h2 className={`product-section-title mb-5 sm:mb-6 lg:mb-8 text-white`}>
            Benefits of Using Patient <br className="hidden md:block" />
            <span className="text-teal-600">Management System</span>
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
                <p
                  className={`product-section-copy text-slate-200 sm:text-slate-100 group-hover:text-white transition-colors duration-200`}
                >
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
