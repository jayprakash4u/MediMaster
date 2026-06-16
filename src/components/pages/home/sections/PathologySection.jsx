"use client";

import Image from "next/image";
import Link from "next/link";

const allItems = [
  "1000+ Lab Investigations & Test Panels",
  "Automated Sample Collection Tracking",
  "Barcode Labeling & Chain-of-Custody Tracking",
  "Normal Range Validation & Critical Flags",
  "Home Sample Collection Scheduling",
  "Specimen Rejection & Re-collection Workflows",
  "Outsourced Lab Test Referral Management",
  "Result Entry with Auto-interpretation",
  "Branded Reports with Digital Signatures",
  "Multi-branch Lab Management & MIS",
  "NABL Accreditation Audit Trails & QC Logs",
  "SMS & WhatsApp Report Delivery",
  "Integration with OPD, IPD & Radiology",
  "Patient Portal for Online Report Access",
  "Reagent & Consumable Inventory Control",
  "Revenue & Collection Analytics Dashboard",
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 text-teal-400 shrink-0 mt-[3px]"
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
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-16 font-sans relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pathology/pathalogy.jpg"
          alt="Pathology Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-start gap-10 lg:gap-14">
          {/* ── LEFT — single bullet grid ── */}
          <div className="flex-1 min-w-0">
            <p className="text-xxs sm:text-xs font-semibold text-teal-400 uppercase tracking-widest mb-2">
              Pathology Lab Management
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Precision Lab Operations{" "}
              <span className="text-teal-400">Powered by Intelligence</span>
            </h2>

            <ul className="m-0 p-0 list-none grid grid-cols-2 gap-x-6 gap-y-2 mt-8">
              {allItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 overflow-hidden">
                  <span className="inline-flex items-start gap-2 w-full">
                    <ArrowIcon />
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/pathology-management"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 border border-teal-400 rounded-full px-5 py-2 hover:bg-teal-500 hover:text-white transition-colors mt-6"
            >
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
            </Link>
          </div>

          {/* ── RIGHT — static image overlay ── */}
          <div className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-10">
            <div className="rounded-xl overflow-hidden border-2 border-teal-400 bg-navy-950/50">
              <Image
                src="/home/homeherosction/a_high_quality_professional_hero_banner_image_for_a_pathology_management.png"
                alt="MediMaster Pathology Lab Management Interface"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
