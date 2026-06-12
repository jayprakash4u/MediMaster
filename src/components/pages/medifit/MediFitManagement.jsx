"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "AI-powered predictive health scoring and risk assessment",
  "Personalized wellness plans tailored to individual health profiles",
  "Real-time health monitoring with wearable device integration",
  "Telemedicine integration for seamless virtual consultations",
];

export default function MediFitManagement() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase">Wellness & Health Tech</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Everything you need for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-navy-600">
              Patient Health Analytics
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Bridge the gap between clinical data and patient wellness through
            predictive health analytics. Manage every touchpoint—from health
            scoring to personalized care—with one unified platform.
          </p>

          <div className="pt-4 space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="mt-0.5 text-teal-600 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <p className="text-slate-700 font-semibold text-sm md:text-base leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-200 group transform hover:-translate-y-0.5 active:translate-y-0">
              <span>GET STARTED NOW</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center w-full">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-teal-400/10 to-navy-400/10 rounded-full blur-3xl -z-10" />

          <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl border-4 border-slate-100/80 bg-slate-50 shadow-2xl overflow-hidden group">
            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
              <svg className="w-32 h-32 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-4 max-w-[220px] animate-bounce" style={{ animationDuration: "5s" }}>
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-black text-lg shadow-inner shrink-0">
              2x
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider leading-none">Faster Care</h4>
              <p className="text-xxs text-slate-400 font-medium mt-1 leading-tight">AI-driven health insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
