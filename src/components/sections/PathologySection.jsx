"use client";

import Image from "next/image";

const pathologyCore = [
  {
    mobile: "1000+ lab investigations & test panel setups",
    desktop:
      "Comprehensive test catalog management with support for 1000+ lab investigations and panels",
  },
  {
    mobile: "Automated sample tracking from intake to delivery",
    desktop:
      "Automated sample collection tracking — from registration to processing to result delivery",
  },
  {
    mobile: "Barcode labels with strict chain-of-custody tracking",
    desktop:
      "Integrated barcode labeling for samples with chain-of-custody traceability at every step",
  },
  {
    mobile: "Normal range checking & critical result flags",
    desktop:
      "Smart result entry with normal range validation, critical value flagging, and auto-interpretation",
  },
];

const pathologyOperations = [
  {
    mobile: "Multi-branch lab control & consolidated MIS data",
    desktop:
      "Multi-lab branch management with centralized reporting and consolidated MIS dashboards",
  },
  {
    mobile: "Branded reports with signatures & doctor remarks",
    desktop:
      "Fully branded, printable lab reports with doctor remarks, letterhead, and digital signatures",
  },
  {
    mobile: "Home sample booking with tracking updates via SMS",
    desktop:
      "Home sample collection scheduling with field agent tracking and status updates via SMS",
  },
  {
    mobile: "NABL accreditation audit logs & QC safety checks",
    desktop:
      "NABL and accreditation-ready audit trails, QC logs, and compliance documentation",
  },
  {
    mobile: "Seamless integration with OPD, IPD & Radiology",
    desktop:
      "Seamless integration with hospital OPD, IPD, and radiology for unified patient diagnostics",
  },
];

export default function PathologySection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 font-sans">
      {/* LEFT COLUMN — Feature Matrix Lists */}
      <div className="w-full lg:flex-1 min-w-0">
        {/* Section label */}
        <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-navy-500 uppercase tracking-widest mb-2 lg:mb-3 text-left">
          Pathology Lab Management
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 lg:mb-10 text-left">
          Precision Lab Operations{" "}
          <span className="text-navy-500">Powered by Intelligence</span>
        </h2>

        {/* Feature Layout Stack */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Group 1: Sample & Test Management */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-teal-600">
              Sample & Test Management
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {pathologyCore.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full text-teal-600 shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-600 leading-relaxed">
                    {/* MOBILE LOGIC CODE: One-liner content restricted strictly to mobile layouts */}
                    <span className="block md:hidden whitespace-nowrap overflow-hidden text-ellipsis max-w-[78vw]">
                      {item.mobile}
                    </span>

                    {/* DESKTOP LOGIC CODE: Comprehensive descriptions displayed on tablets & PCs */}
                    <span className="hidden md:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Reporting & Compliance */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-teal-600">
              Reporting & Compliance
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {pathologyOperations.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full text-navy-600 shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-600 leading-relaxed">
                    {/* MOBILE LOGIC CODE: One-liner content restricted strictly to mobile layouts */}
                    <span className="block md:hidden whitespace-nowrap overflow-hidden text-ellipsis max-w-[78vw]">
                      {item.mobile}
                    </span>

                    {/* DESKTOP LOGIC CODE: Comprehensive descriptions displayed on tablets & PCs */}
                    <span className="hidden md:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — Premium Layered Graphic Frame */}
      {/* flex-col structural ordering ensures the graphic loads below headers on smartphones cleanly */}
      <div className="relative w-full max-w-sm sm:max-w-xl lg:max-w-none lg:w-[520px] h-[240px] sm:h-[360px] lg:h-[580px] shrink-0 lg:self-center mt-4 lg:mt-0">
        {/* Underlay decoration layer offset */}
        <div className="absolute top-3 left-3 right-[-12px] bottom-[-12px] sm:top-6 sm:left-6 sm:right-[-24px] sm:bottom-[-24px] bg-navy-50 border border-slate-100 rounded-xl sm:rounded-3xl z-10" />

        {/* Image Canvas Frame */}
        <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden bg-navy-50 border-2 lg:border-[3px] border-navy-500 shadow-sm lg:shadow-xl z-20">
          <Image
            src="/pathology/intro.jpg"
            alt="MediMaster Pathology Lab Management Interface"
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 520px"
            priority
          />
        </div>

        {/* Floating badge */}
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-4 lg:-right-4 z-30 bg-navy-500 text-[9px] sm:text-[11px] lg:text-xs font-bold text-white tracking-wider uppercase px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-md lg:shadow-lg">
          Pathology Module
        </div>

        {/* Floating stats tracker widget */}
        <div className="absolute bottom-2 -left-2 sm:bottom-8 sm:-left-8 lg:bottom-8 lg:-left-8 z-30 bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:px-5 lg:py-3.5 shadow-md lg:shadow-xl border border-slate-100 min-w-[100px] sm:min-w-[160px]">
          <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 sm:mb-1">
            Report Turnaround
          </p>
          <p className="text-sm sm:text-xl lg:text-2xl font-black text-navy-500 leading-none">
            2× Faster
          </p>
          <p className="text-[8px] sm:text-[11px] lg:text-xs text-slate-400 mt-0.5 sm:mt-1">
            Auto result entry
          </p>
        </div>
      </div>
    </section>
  );
}
