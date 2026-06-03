import React from "react";
import { Check, ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function ClinicHeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── LEFT COLUMN: IMAGE ── */}
        <div className="lg:col-span-5 relative w-full">
          {/* Spacer so badges don't get clipped */}
          <div className="relative pt-6 pb-10 px-4 md:px-5">
            {/* Main image */}
            <div className="relative w-full h-[300px] sm:h-[380px] md:h-[440px] rounded-3xl overflow-hidden border border-slate-200">
              <Image
                src="/hospitalhero.jpg"
                alt="Hospital hero"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Top-left badge */}
            <div className="absolute top-0 left-0 w-28 h-28 sm:w-32 sm:h-32 bg-[#0f2460] text-white rounded-2xl p-4 flex flex-col justify-center shadow-lg z-10">
              <span className="text-xl font-bold">3,000+</span>
              <span className="text-[10px] leading-tight mt-1 opacity-90">
                Doctors using our platform every day
              </span>
            </div>

            {/* Bottom testimonial card */}
            <div className="absolute bottom-0 left-0 right-4 md:right-8 bg-[#07112e] text-white p-5 rounded-2xl shadow-xl z-10 flex flex-col justify-between min-h-[140px] md:min-h-[160px]">
              <p className="text-xs sm:text-sm italic leading-relaxed opacity-95">
                "I spend more time managing appointments and writing bills than
                actually seeing patients. I need something simple that just
                works."
              </p>
              <div className="flex justify-between items-end mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a3a7a] flex items-center justify-center text-white border border-[#2a4a8a] text-base flex-shrink-0">
                    👤
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider">
                      Solo Practitioner
                    </h4>
                    <p className="text-[10px] opacity-75">
                      Most common pain point
                    </p>
                  </div>
                </div>
                <span className="text-4xl md:text-5xl font-serif text-white/20 leading-none select-none">
                  "
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: CONTENT ── */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#1a4aaa] uppercase">
              For Hospitals &amp; Multi‑Specialty Centers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mt-2 leading-tight">
              Care at Scale. <br />
              <span className="font-extrabold text-slate-900">
                Operations Simplified.
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed max-w-xl">
              Manage inpatient beds, departments, billing, and clinical
              workflows across your hospital with a single integrated
              platform—secure, auditable, and built for scale.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-2">
            {[
              "IPD & bed management with real-time occupancy",
              "Multi-department scheduling & resource allocation",
              "Integrated billing, insurance claims & revenue cycle",
              "Lab, radiology & pharmacy integrations",
              "Operation theatre & staff rostering",
              "Enterprise EMR, audit logs & regulatory reports",
            ].map((title, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 bg-teal-50 rounded p-0.5 text-teal-600 flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm font-medium text-slate-700">{title}</p>
              </div>
            ))}
          </div>

          {/* Integration note */}
          <p className="text-xs md:text-sm text-slate-500 max-w-xl leading-relaxed border-t border-slate-100 pt-4">
            Designed for hospitals: coherent modules for IPD, OT, Pharmacy, Lab,
            Radiology, Inventory, Insurance and Hospital Administration.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors shadow-md shadow-teal-600/10 w-full sm:w-auto">
              <PhoneCall className="w-4 h-4 flex-shrink-0" />
              Request a Hospital Demo
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium text-sm px-6 py-3 rounded-full transition-colors w-full sm:w-auto">
              Learn More
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
