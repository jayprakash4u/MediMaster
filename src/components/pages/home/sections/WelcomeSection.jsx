"use client";

import Image from "next/image";

const systemArchitecture = [
  "Simple yet comprehensive Cloud-based Hospital Management Software",
  "No hardware or software installation required (Runs directly in your favorite browser)",
  "Designed for standalone Pathology Labs, Radiology/Imaging Labs, and Pharmacies operating independently from hospitals",
  "Native multi-platform accessibility: Dedicated Apps for Android Mobiles, Android Tablets, iPhones, and iPads",
];

const managementOperations = [
  "Manage multiple hospital & clinical branches remotely from any place in the world",
  "Detailed patient prescriptions and clinical reports with completely customized brand printing",
  "Automated transactional SMS communication channels for each definitive step in the healthcare workflow",
  "Advanced business intelligence tracking to review real-time staff performance, trends, and predictive forecasts",
  "Engineered for improved customer interactions, resulting in vastly increased patient satisfaction",
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-blue-700 shrink-0 mt-[3px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function WelcomeSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 lg:py-24 font-sans">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* ── LEFT — checklist content ── */}
        <div className="flex-1 min-w-0">
          <p className="text-xxs sm:text-xs font-semibold text-blue-700 uppercase tracking-widest mb-2">
            Platform Overview
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Platform Architecture & <span className="text-blue-700">Core Capabilities</span>
          </h2>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
            A cloud-native platform built for hospitals, labs, pharmacies, and clinics — accessible
            from any browser with no installation.
          </p>

          {/* Group 1 */}
          <div className="mb-6">
            <p className="text-xxs font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              System &amp; Architecture
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {systemArchitecture.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm lg:text-base text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2 */}
          <div className="mb-8">
            <p className="text-xxs font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">
              Management &amp; Operations
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {managementOperations.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm lg:text-base text-slate-700 leading-relaxed">
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
              src="/home/platform-overview.jpg"
              alt="MediMaster Platform Overview"
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
