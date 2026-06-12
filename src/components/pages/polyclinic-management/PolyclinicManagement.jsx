"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Multi-specialty clinic management under one unified platform",
  "Centralized patient registration and medical history tracking",
  "Appointment scheduling across departments with resource allocation",
  "Integrated billing, pharmacy, lab, and radiology coordination",
];

export default function PolyclinicManagement() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase">Inbuilt HMS Module</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Everything you need for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-navy-600">
              Polyclinic Management
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            The complete polyclinic can be managed by an inbuilt module.
            You can manage multi-specialty appointments, coordinate departments,
            and streamline operations—all structured natively inside a single interface.
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
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center w-full">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-teal-400/10 to-navy-400/10 rounded-full blur-3xl -z-10" />

          <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl border-4 border-slate-100/80 bg-slate-50 shadow-2xl overflow-hidden group">
            <img
              src="/hospital/polyclinic.jpg"
              alt="Polyclinic Management Interface"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-4 max-w-[220px] animate-bounce" style={{ animationDuration: "5s" }}>
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-black text-lg shadow-inner shrink-0">
              2x
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider leading-none">Faster Ops</h4>
              <p className="text-xxs text-slate-400 font-medium mt-1 leading-tight">Multi-specialty coordination simplified.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
