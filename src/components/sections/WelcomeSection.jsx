"use client";

import Image from "next/image";

const coreArchitecture = [
  {
    mobile: "Cloud-based Hospital Management Software",
    desktop:
      "Simple yet comprehensive Cloud-based Hospital Management Software",
  },
  {
    mobile: "No installation required — Runs in any browser",
    desktop:
      "No hardware or software installation required (Runs directly in your favorite browser)",
  },
  {
    mobile: "Designed for standalone Labs, Radiology & Pharmacies",
    desktop:
      "Designed for standalone Pathology Labs, Radiology/Imaging Labs, and Pharmacies operating independently from hospitals",
  },
  {
    mobile: "Native Apps for iOS, Android, Tablets & iPads",
    desktop:
      "Native multi-platform accessibility: Dedicated Apps for Android Mobiles, Android Tablets, iPhones, and iPads",
  },
];

const operationsCapabilities = [
  {
    mobile: "Manage multiple global branches remotely",
    desktop:
      "Manage multiple hospital & clinical branches remotely from any place in the world",
  },
  {
    mobile: "Detailed prescriptions & customized brand printing",
    desktop:
      "Detailed patient prescriptions and clinical reports with completely customized brand printing",
  },
  {
    mobile: "Automated workflow SMS communication channels",
    desktop:
      "Automated transactional SMS communication channels for each definitive step in the healthcare workflow",
  },
  {
    mobile: "Real-time performance, trends & predictive forecasts",
    desktop:
      "Advanced business intelligence tracking to review real-time staff performance, trends, and predictive forecasts",
  },
  {
    mobile: "Optimized for maximum patient satisfaction",
    desktop:
      "Engineered for improved customer interactions, resulting in vastly increased patient satisfaction",
  },
];

export default function WelcomeSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 lg:py-24 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 font-sans">
      {/* LEFT COLUMN — Dynamic Feature Lists */}
      <div className="w-full lg:flex-1 min-w-0">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 lg:mb-8 lg:whitespace-nowrap text-left">
          Platform Architecture &{" "}
          <span className="text-navy-500">Core Capabilities</span>
        </h2>

        {/* Feature Matrix Layout */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Group 1: Infrastructure */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-teal-600">
              System & Architecture
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {coreArchitecture.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-teal-600"
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
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-600 leading-relaxed truncate-none">
                    {/* Shows on mobile only */}
                    <span className="lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis max-w-[85vw] sm:max-w-none">
                      {item.mobile}
                    </span>
                    {/* Shows on desktop only */}
                    <span className="hidden lg:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Business & Operations */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-teal-600">
              Management & Operations
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {operationsCapabilities.map((item, index) => (
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
                    {/* Shows on mobile only */}
                    <span className="lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis max-w-[85vw] sm:max-w-none">
                      {item.mobile}
                    </span>
                    {/* Shows on desktop only */}
                    <span className="hidden lg:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — Image Framework */}
      <div className="relative w-full max-w-xs sm:max-w-xl lg:max-w-none lg:w-[520px] h-[200px] sm:h-[360px] lg:h-[580px] shrink-0 lg:self-center mb-2 lg:mb-0">
        <div className="absolute top-3 left-3 right-[-12px] bottom-[-12px] sm:top-6 sm:left-6 sm:right-[-24px] sm:bottom-[-24px] bg-navy-50 border border-slate-100 rounded-xl sm:rounded-3xl z-10" />
        <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden bg-navy-50 border-2 lg:border-[3px] border-navy-500 shadow-sm lg:shadow-xl z-20">
          <Image
            src="/home/description.png"
            alt="MediMaster Healthcare Management Dashboard Interface"
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 520px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
