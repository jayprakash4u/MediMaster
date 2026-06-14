"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function PathologyModulesWithVideo() {
  const leftColumnModules = [
    "Test Catalog & Panel Management",
    "Sample Registration & Tracking",
    "Barcode-Based Sample Handling",
    "Result Entry & Validation",
    "Report Generation & Printing",
    "Home Collection Scheduling",
  ];

  const rightColumnModules = [
    "Multi-Lab Branch Support",
    "Doctor Remarks & Signatures",
    "Quality Control (QC) Logs",
    "NABL Compliance Reporting",
    "SMS/Email Notifications",
    "Lab Analytics Dashboard",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20 font-sans bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
          Pathology Lab Management Software Modules
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-3">
            {leftColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {rightColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full sticky top-6">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kl9bAZPgrOw"
              title="Pathology Lab Management Software - Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-3 px-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Video Demonstration
            </h4>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              Pathology Lab Management Software — Full Demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
