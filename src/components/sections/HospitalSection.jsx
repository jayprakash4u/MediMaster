"use client";

import Image from "next/image";

const hospitalCore = [
  {
    mobile: "Complete OPD & IPD tracking with bed allocation",
    desktop:
      "Complete OPD & IPD management with bed allocation, ward transfers, and discharge summaries",
  },
  {
    mobile: "Doctor schedules, consult queues & OPD tokens",
    desktop:
      "Integrated doctor scheduling, consultation queues, and real-time OPD token management",
  },
  {
    mobile: "Patient registration with unified health records",
    desktop:
      "Automated patient registration with unique MR number, visit history, and unified health records",
  },
  {
    mobile: "OT booking with surgical records & checklists",
    desktop:
      "Operation Theatre (OT) scheduling with pre-op checklists, anesthesia notes, and surgical reports",
  },
];

const hospitalOperations = [
  {
    mobile: "Multi-dept billing, insurance & TPA workflows",
    desktop:
      "Multi-department billing with insurance claim processing, TPA management, and cashless workflows",
  },
  {
    mobile: "Nursing stations with vitals charts & care notes",
    desktop:
      "Nursing station module with shift-wise vitals charting, medication administration, and care notes",
  },
  {
    mobile: "Dietary meal planning & kitchen coordination",
    desktop:
      "Dietary management with patient-wise meal planning, diet orders, and kitchen coordination",
  },
  {
    mobile: "Waste tracking, housekeeping & compliance logs",
    desktop:
      "Biomedical waste tracking, housekeeping task management, and facility compliance reporting",
  },
  {
    mobile: "Live hospital-wide dashboards & revenue MIS",
    desktop:
      "Real-time hospital-wide dashboard with bed occupancy, revenue, and department-wise MIS reports",
  },
];

export default function HospitalSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 lg:py-24 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 font-sans">
      {/* LEFT COLUMN — Premium Layered Graphic Frame */}
      {/* flex-col-reverse ensures the image gracefully drops below headers on mobile devices */}
      <div className="relative w-full max-w-sm sm:max-w-xl lg:max-w-none lg:w-[520px] h-[240px] sm:h-[360px] lg:h-[580px] shrink-0 lg:self-center mb-4 lg:mb-0">
        {/* Underlay structural depth background */}
        <div className="absolute top-3 left-3 right-[-12px] bottom-[-12px] sm:top-6 sm:left-6 sm:right-[-24px] sm:bottom-[-24px] bg-navy-50 border border-slate-100 rounded-xl sm:rounded-3xl z-10" />

        {/* Canvas bounding box for product screen layout */}
        <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden bg-navy-50 border-2 lg:border-[3px] border-navy-500 shadow-sm lg:shadow-xl z-20">
          <Image
            src="/home/hospital-management.jpg"
            alt="MediMaster Hospital Management Interface"
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 520px"
            priority
          />
        </div>

        {/* Top left floating tag */}
        <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 lg:-top-4 lg:-left-4 z-30 bg-navy-500 text-[9px] sm:text-[11px] lg:text-xs font-bold text-white tracking-wider uppercase px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-md">
          Hospital Module
        </div>

        {/* Bottom right floating statistics banner */}
        <div className="absolute bottom-2 -right-2 sm:bottom-8 sm:-right-8 lg:bottom-8 lg:-right-8 z-30 bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:px-5 lg:py-3.5 shadow-md lg:shadow-xl border border-slate-100 min-w-[100px] sm:min-w-[160px]">
          <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 sm:mb-1">
            Bed Occupancy
          </p>
          <p className="text-sm sm:text-xl lg:text-2xl font-black text-navy-500 leading-none">
            Live Sync
          </p>
          <p className="text-[8px] sm:text-[11px] lg:text-xs text-slate-400 mt-0.5 sm:mt-1">
            Real-time tracking
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN — Feature Matrix Lists */}
      <div className="w-full lg:flex-1 min-w-0">
        <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-navy-500 uppercase tracking-widest mb-2 lg:mb-3 text-left">
          Hospital Management
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 lg:mb-10 text-left">
          Full-Spectrum{" "}
          <span className="text-navy-500">Hospital Operations</span> Under One
          Roof
        </h2>

        {/* Feature Stack Box */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Group 1: Clinical & Patient Care */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-teal-600">
              Clinical & Patient Care
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {hospitalCore.map((item, index) => (
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
                    {/* MOBILE LOGIC: One line text segment container */}
                    <span className="block md:hidden whitespace-nowrap overflow-hidden text-ellipsis max-w-[78vw]">
                      {item.mobile}
                    </span>

                    {/* DESKTOP LOGIC: Raw multi-line context layout */}
                    <span className="hidden md:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Administration & Facilities */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-navy-600">
              Administration & Facilities
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {hospitalOperations.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-navy-600"
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
                    {/* MOBILE LOGIC: One line text segment container */}
                    <span className="block md:hidden whitespace-nowrap overflow-hidden text-ellipsis max-w-[78vw]">
                      {item.mobile}
                    </span>

                    {/* DESKTOP LOGIC: Raw multi-line context layout */}
                    <span className="hidden md:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
