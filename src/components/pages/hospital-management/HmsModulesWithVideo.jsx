"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function HMSModulesWithVideo() {
  const leftColumnModules = [
    "Front Desk",
    "OPD ( Out-Patient Department)",
    "IPD ( In-Patient Department)",
    "OT ( Operation Theatres) Management",
    "Insurance Management",
    "Facility Management",
    "Services Management",
    "Patient Management",
    "Appointment Scheduling",
    "Store Management",
    "Pharmacy Inventory & Sales Management",
    "Pregnancy Management",
  ];

  const rightColumnModules = [
    "MLC (Medico-legal Cases)",
    "Death Report",
    "Ambulatory",
    "Pathology Labs",
    "Radiology Labs",
    "Dental Labs",
    "Account Management",
    "Payroll and Human Resource Management",
    "Patient and Staff Messaging System",
    "Business Analytics",
    "Master Data Management",
    "Application Security & Configuration",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20 font-sans bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
          HMS (Hospital Management Software) Modules
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-3">
            {leftColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {rightColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
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
              title="MediMaster Part 1 - Details of Lab Billing & Investigation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-3 px-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Video Demonstration
            </h4>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              MediMaster Part 1 - Details of Lab Billing & Investigation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
