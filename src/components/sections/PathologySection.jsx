"use client";

import Image from "next/image";

const sampleTestManagement = [
  "Comprehensive test catalog management with support for 1000+ lab investigations and panels",
  "Automated sample collection tracking — from registration to processing to result delivery",
  "Integrated barcode labeling for samples with chain-of-custody traceability at every step",
  "Smart result entry with normal range validation, critical value flagging, and auto-interpretation",
];

const reportingCompliance = [
  "Multi-lab branch management with centralized reporting and consolidated MIS dashboards",
  "Fully branded, printable lab reports with doctor remarks, letterhead, and digital signatures",
  "Home sample collection scheduling with field agent tracking and status updates via SMS",
  "NABL and accreditation-ready audit trails, QC logs, and compliance documentation",
  "Seamless integration with hospital OPD, IPD, and radiology for unified patient diagnostics",
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

export default function PathologySection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 lg:py-24 font-sans">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

        {/* ── LEFT — checklist content ── */}
        <div className="flex-1 min-w-0">

          <p className="text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-widest mb-2">
            Pathology Lab Management
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Precision Lab Operations{" "}
            <span className="text-blue-700">Powered by Intelligence</span>
          </h2>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
            Automate sample tracking, reporting, and compliance with intelligent lab management built for modern diagnostics.
          </p>

          {/* Group 1 */}
          <div className="mb-6">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Sample &amp; Test Management
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {sampleTestManagement.map((item, i) => (
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
              Reporting &amp; Compliance
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {reportingCompliance.map((item, i) => (
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
              src="/pathology/intro.jpg"
              alt="MediMaster Pathology Lab Management Interface"
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
