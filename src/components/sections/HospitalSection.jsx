"use client";

import Image from "next/image";

const clinicalPatientCare = [
  "Complete OPD & IPD management with bed allocation, ward transfers, and discharge summaries",
  "Integrated doctor scheduling, consultation queues, and real-time OPD token management",
  "Automated patient registration with unique MR number, visit history, and unified health records",
  "Operation Theatre (OT) scheduling with pre-op checklists, anesthesia notes, and surgical reports",
];

const administrationFacilities = [
  "Multi-department billing with insurance claim processing, TPA management, and cashless workflows",
  "Nursing station module with shift-wise vitals charting, medication administration, and care notes",
  "Dietary management with patient-wise meal planning, diet orders, and kitchen coordination",
  "Biomedical waste tracking, housekeeping task management, and facility compliance reporting",
  "Real-time hospital-wide dashboard with bed occupancy, revenue, and department-wise MIS reports",
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 text-blue-700 shrink-0 mt-[3px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function HospitalSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 lg:py-24 font-sans">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

        {/* ── LEFT — checklist content ── */}
        <div className="flex-1 min-w-0">

          <p className="text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-widest mb-2">
            Hospital Management
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Full-Spectrum{" "}
            <span className="text-blue-700">Hospital Operations</span> Under One Roof
          </h2>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
            Every clinical and administrative function — from bed allocation to billing — connected in real time across your entire hospital network.
          </p>

          {/* Group 1 */}
          <div className="mb-6">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Clinical &amp; Patient Care
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {clinicalPatientCare.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ArrowIcon />
                  <span className="text-sm lg:text-[15px] text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2 */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Administration &amp; Facilities
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {administrationFacilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ArrowIcon />
                  <span className="text-sm lg:text-[15px] text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full px-5 py-2 hover:bg-blue-50 transition-colors">
            Learn more
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* ── RIGHT — static image ── */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            <Image
              src="/home/hospital-management.jpg"
              alt="MediMaster Hospital Management Interface"
              width={840}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
