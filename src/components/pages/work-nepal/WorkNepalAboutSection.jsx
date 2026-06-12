"use client";

import Image from "next/image";

export default function WorkNepalAboutSection() {
  return (
    <section id="worknepal-about" className="relative w-full bg-white overflow-hidden py-20 px-4 md:px-8">
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="relative w-full min-h-[460px] md:min-h-[520px] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
          <Image src="/WorkNepal/aboutusimage.png" alt="Work Nepal" fill className="object-cover" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="5" r="2" fill="#0D9488" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              About Us
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Nepal's Trusted Job Platform
          </h2>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-md">
            Nepal's most trusted job platform — 100% free for employers to post jobs and free for seekers to apply. No hidden fees, no subscriptions, no barriers between talent and opportunity.
          </p>

          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3.5">
            <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm font-semibold text-emerald-800">
              ️ Employers post jobs free · Job seekers apply free
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <circle cx="20" cy="20" r="18" fill="#0D9488" opacity=".15" />
                  <path d="M12 20h16M20 12v16" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="4" fill="#0D9488" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Verified Employers</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Every job listing goes through validation to ensure authentic opportunities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <circle cx="20" cy="20" r="18" fill="#0D9488" opacity=".15" />
                  <circle cx="20" cy="16" r="5" stroke="#0D9488" strokeWidth="2.5" />
                  <path d="M10 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Trusted Platform</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Secure recruitment process with data protection and privacy for all users.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-3 pt-5 border-t border-slate-100">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full shadow-md shadow-teal-200 transition-colors"
            >
              Discover More
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
