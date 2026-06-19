"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="currentColor"
          className="text-teal-600"
          opacity=".15"
        />
        <path
          d="M12 20h16M20 12v16"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="4" fill="currentColor" className="text-teal-600" />
      </svg>
    ),
    title: "Vehicle Verification",
    desc: "Every listing goes through multi-point inspection verification. Buy with confidence knowing the vehicle history is transparent and accurate.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="currentColor"
          className="text-teal-600"
          opacity=".15"
        />
        <circle
          cx="20"
          cy="16"
          r="5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
        />
        <path
          d="M10 30c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Trusted Platform",
    desc: "Secure payment escrow system with buyer protection. Funds are only released when both parties confirm the transaction is complete.",
  },
];

export default function RamroGadiAboutSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-4 md:px-8">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50 -z-0" />
      <div className="absolute left-0 bottom-0 w-32 h-32 rounded-full bg-teal-50 -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── LEFT: IMAGE COLLAGE ── */}
        <div className="relative w-full min-h-[460px] md:min-h-[520px]">
          {/* BIG image — top left, slightly tall */}
          <div className="absolute top-0 left-0 w-[58%] h-[62%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10 bg-slate-100">
            <Image src="/Ramro gadi/1.png" alt="Vehicle Listing" fill className="object-cover" />
          </div>

          {/* SMALL image — top right, overlapping */}
          <div className="absolute top-4 right-0 w-[40%] h-[40%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10 bg-slate-100">
            <Image src="/Ramro gadi/2.png" alt="Inspection" fill className="object-cover" />
          </div>

          {/* BOTTOM image — bottom center, overlapping both above */}
          <div className="absolute bottom-0 left-[18%] w-[55%] h-[44%] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20 bg-slate-100">
            <Image src="/Ramro gadi/3.png" alt="Happy Customers" fill className="object-cover" />
          </div>

          {/* Teal badge — bottom left */}
          <div className="absolute bottom-10 -left-2 z-30 bg-teal-600 text-white rounded-2xl px-5 py-4 shadow-lg flex flex-col items-center min-w-[110px]">
            <span className="text-2xl font-black leading-none">10+</span>
            <span className="text-xxs font-semibold uppercase tracking-wide leading-tight mt-1 text-center opacity-90">
              Years Of
              <br />
              Quality Service
            </span>
          </div>

          {/* Decorative dots grid */}
          <div className="absolute -bottom-4 right-4 grid grid-cols-5 gap-1.5 z-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-200" />
            ))}
          </div>
        </div>

        {/* ── RIGHT: CONTENT ── */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path
                  d="M0 5h20"
                  stroke="currentColor"
                  className="text-teal-600"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-600" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
            Our Automotive Marketplace <span className="text-teal-600 italic">Inspires</span> You
            More.
          </h2>

          {/* Body */}
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-md">
            Nepal&apos;s leading automotive marketplace connecting buyers and sellers with verified
            listings, secure transactions, and integrated financing tools. Trusted by thousands of
            customers nationwide.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-5 mt-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* Numbered circle with icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight text-slate-900">
                    {f.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: CTA + phone */}
          <div className="flex flex-wrap items-center gap-5 mt-3 pt-5 border-t border-slate-100">
            <a
              href="https://ramrogaadi.com/"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full shadow-md shadow-teal-200 transition-colors"
            >
              Discover More
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 16 16"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            <a href="tel:+9779801234567" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xxs text-slate-400 uppercase tracking-widest">Call Us Now</p>
                <p className="text-sm font-bold text-slate-800">+977-9801234567</p>
              </div>
            </a>

            {/* Large decorative quote number */}
            <span className="ml-auto text-[80px] font-black leading-none text-slate-100 select-none hidden xl:block">
              99
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
