"use client";

import React from "react";

export default function HMSBenefitsSection() {
  const benefits = [
    "Prevents stock shortages and unexpected emergency purchases",
    "Reduces inventory wastage, leakage, and costly overstocking",
    "Improves live visibility into medicine batches and clinical supply usage",
    "Enhances seamless stock coordination between wards and central stores",
    "Saves administrative time with automated expiration & low-stock notifications",
    "Ensures continuous, guaranteed availability of life-saving critical medicines",
    "Supports data-driven purchasing decisions through advanced analytical reporting",
  ];

  return (
    <section className="relative w-full bg-navy-950 text-white overflow-hidden py-12 px-3 sm:py-16 sm:px-6 lg:py-20 lg:px-20">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-navy-500 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center relative z-10">
        <div className="order-2 hidden lg:order-none lg:col-span-5 lg:flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md md:max-w-lg aspect-square flex flex-col items-center justify-end pb-6">
            <div className="relative w-[85%] z-20 transform hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="bg-slate-900 p-2 pb-3 rounded-t-2xl shadow-2xl border border-slate-700/50">
                <div className="relative aspect-[16/10] bg-white rounded-lg overflow-hidden border border-slate-800">
                  <div className="w-full h-full bg-slate-50 flex flex-col p-2 text-slate-800 font-sans text-xxs">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-navy-600" />
                        <span className="font-bold text-xxs tracking-tight text-navy-900">
                          MediMaster Hub
                        </span>
                      </div>
                      <div className="w-12 h-2 bg-slate-200 rounded" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="bg-white p-1.5 rounded border border-slate-200 shadow-sm">
                        <div className="text-xxs text-slate-400">Total Stock</div>
                        <div className="font-bold text-slate-800 mt-0.5">1,240 Units</div>
                      </div>
                      <div className="bg-white p-1.5 rounded border border-slate-200 shadow-sm">
                        <div className="text-xxs text-slate-400">Near Expiry</div>
                        <div className="font-bold text-teal-400 mt-0.5">14 Batches</div>
                      </div>
                      <div className="bg-white p-1.5 rounded border border-slate-200 shadow-sm">
                        <div className="text-xxs text-slate-400">Fulfilled</div>
                        <div className="font-bold text-teal-400 mt-0.5">98.4%</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded border border-slate-200 p-1.5">
                      <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                      <div className="w-3/4 h-2 bg-slate-100 rounded mb-2" />
                      <div className="space-y-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-0.5 border-b border-slate-100 last:border-0"
                          >
                            <div className="w-16 h-1.5 bg-slate-200 rounded" />
                            <div className="w-6 h-1.5 bg-slate-200 rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-3 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-xl shadow-md border-t border-white/40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-500 rounded-b" />
              </div>
            </div>
            <div className="absolute bottom-0 w-[90%] h-24 bg-gradient-to-b from-[#163c82] to-[#0c2452] rounded-full border-t border-teal-400/30 shadow-2xl z-10 flex items-start justify-center">
              <div className="w-full h-6 bg-black/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-none lg:col-span-7 flex flex-col justify-center text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-white">
            Benefits of Using Hospital Stock and <br className="hidden md:block" />
            Inventory Management System
          </h2>

          <ul className="space-y-3 max-w-2xl sm:space-y-4">
            {benefits.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3.5 group">
                <div className="flex-shrink-0 mt-1 flex items-center justify-center text-teal-400">
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
