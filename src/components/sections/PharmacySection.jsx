"use client";

import Image from "next/image";

const pharmacyCore = [
  {
    mobile: "Real-time drug inventory & low-stock alerts",
    desktop:
      "Centralized drug inventory management with real-time stock tracking and low-stock alerts",
  },
  {
    mobile: "Auto-fetch doctor prescriptions directly",
    desktop:
      "Seamless integration with doctor prescriptions — auto-fetch and dispense directly from patient records",
  },
  {
    mobile: "Barcode & batch scanning for fast dispensing",
    desktop:
      "Barcode and batch number scanning for fast, error-free medicine dispensing at the counter",
  },
  {
    mobile: "Expiry tracking with automated safety alerts",
    desktop:
      "Expiry date tracking with automated alerts to prevent dispensing of expired medications",
  },
];

const pharmacyOperations = [
  {
    mobile: "Multi-branch stock visibility across locations",
    desktop:
      "Multi-branch pharmacy management with consolidated stock visibility across all locations",
  },
  {
    mobile: "Supplier purchase order & GRN tracking",
    desktop:
      "Supplier and purchase order management with GRN (Goods Received Note) tracking",
  },
  {
    mobile: "Automated billing & GST-compliant invoices",
    desktop:
      "Automated billing, GST-compliant invoicing, and detailed sales reports per shift or day",
  },
  {
    mobile: "Medication history & patient refill reminders",
    desktop:
      "Patient medication history and refill reminders for improved adherence and retention",
  },
  {
    mobile: "Controlled substance logs & compliance audits",
    desktop:
      "Controlled substance and narcotic drug register with audit-ready compliance reporting",
  },
];

export default function PharmacySection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 lg:py-24 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 font-sans">
      {/* LEFT COLUMN — Premium Layered Graphic Frame */}
      {/* On mobile, container dynamically resizes cleanly to prevent overlapping */}
      <div className="relative w-full max-w-sm sm:max-w-xl lg:max-w-none lg:w-[520px] h-[240px] sm:h-[360px] lg:h-[580px] shrink-0 lg:self-center mb-4 lg:mb-0">
        {/* Underlay structural weight element */}
        <div className="absolute top-3 left-3 right-[-12px] bottom-[-12px] sm:top-6 sm:left-6 sm:right-[-24px] sm:bottom-[-24px] bg-[#F8FAFC] border border-slate-100 rounded-xl sm:rounded-3xl z-10" />

        {/* Main Image Frame Canvas */}
        <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden bg-[#F0FDFE] border-2 lg:border-[3px] border-[#0D9488] shadow-sm lg:shadow-xl z-20">
          <Image
            src="/pharmecy.jpg"
            alt="MediMaster Pharmacy Management Interface"
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 520px"
            priority
          />
        </div>

        {/* Floating badge — top right */}
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-4 lg:-right-4 z-30 bg-[#0D9488] color-[#fff] text-[9px] sm:text-[11px] lg:text-xs font-bold text-white tracking-wider uppercase px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-md lg:shadow-lg">
          Pharmacy Module
        </div>

        {/* Floating stat card — bottom left */}
        <div className="absolute bottom-2 -left-2 sm:bottom-8 sm:-left-8 lg:bottom-8 lg:-left-8 z-30 bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:px-5 lg:py-3.5 shadow-md lg:shadow-xl border border-slate-100 min-w-[100px] sm:min-w-[160px]">
          <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 sm:mb-1">
            Stock Accuracy
          </p>
          <p className="text-sm sm:text-xl lg:text-2xl font-black text-[#0D9488] leading-none">
            99.8%
          </p>
          <p className="text-[8px] sm:text-[11px] lg:text-xs text-slate-400 mt-0.5 sm:mt-1">
            Real-time sync
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN — Feature Matrix Lists */}
      <div className="w-full lg:flex-1 min-w-0">
        {/* Section label */}
        <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-[#3B66E2] uppercase tracking-widest mb-2 lg:mb-3 text-left">
          Pharmacy Management
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 lg:mb-10 text-left">
          End-to-End <span className="text-[#3B66E2]">Pharmacy Control</span>{" "}
          Built for Healthcare
        </h2>

        {/* Feature Layout Stack */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Group 1: Inventory & Dispensing */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-[#0D9488]">
              Inventory & Dispensing
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {pharmacyCore.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D9488"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-600 leading-relaxed">
                    {/* One line content optimized for mobile devices */}
                    <span className="lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis max-w-[82vw] sm:max-w-none">
                      {item.mobile}
                    </span>
                    {/* Detailed structural content optimized for desktop viewing views */}
                    <span className="hidden lg:inline">{item.desktop}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Operations & Compliance */}
          <div>
            <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-500 uppercase tracking-wider pb-1 mb-3 lg:mb-4 border-b-2 border-teal-600">
              Operations & Compliance
            </h3>
            <ul className="flex flex-col gap-2.5 lg:gap-3.5 m-0 p-0 list-none">
              {pharmacyOperations.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D9488"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-600 leading-relaxed">
                    {/* One line content optimized for mobile devices */}
                    <span className="lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis max-w-[82vw] sm:max-w-none">
                      {item.mobile}
                    </span>
                    {/* Detailed structural content optimized for desktop viewing views */}
                    <span className="hidden lg:inline">{item.desktop}</span>
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
