"use client";

import React, { useState } from "react";

export default function HMSTrialSection() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    hospitalName: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const checkIcon = (
    <svg
      className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all";

  return (
    <section className="w-full bg-navy-950 py-16 md:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-teal-600 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xxs sm:text-xs font-semibold text-teal-400 uppercase tracking-widest mb-2">
            Free Trial
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Try Our Hospital Software <span className="text-teal-400">For Free</span>
          </h2>
        </div>
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* ── LEFT PANEL ── */}
            <div className="md:col-span-5 bg-[#07112e] p-8 sm:p-10 flex flex-col justify-between text-white">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight mb-5">
                  The Most Affordable Hospital Software
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-7">
                  Tired of monthly software payments? Never pay monthly again. Our
                  Hospital Management System is a highly affordable self-hosted
                  software solution. We&apos;re offering a pay-once lifetime
                  license—just pay once and forget about recurring monthly or
                  annual fees.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Portals for Doctors, Patients and Staff",
                    "OPD, IPD, OT, and Pharmacy Management",
                    "Electronic Medical Billing, Accounting, HR & Payroll",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-100"
                    >
                      {checkIcon}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-slate-700">
                <button className="bg-teal-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm hover:bg-teal-600 transition-colors">
                  Try For Free
                </button>
                <a
                  href="#quote"
                  className="text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-teal-400 transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            {/* ── RIGHT PANEL (form) ── */}
            <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
              <h3 className="text-xl sm:text-2xl font-black text-[#07112e] uppercase tracking-tight mb-2">
                Try Hospital Software For Free
              </h3>
              <p className="text-sm text-slate-500 mb-7">
                Start your free trial and experience the full-featured Hospital
                Management Software.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required placeholder="Your Name*" value={formData.name} onChange={handleChange} className={inputClass} />
                  <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="hospitalName" required placeholder="Hospital/Clinic Name*" value={formData.hospitalName} onChange={handleChange} className={inputClass} />
                  <input type="email" name="email" required placeholder="Work Email*" value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" required placeholder="Phone/WhatsApp*" value={formData.phone} onChange={handleChange} className={inputClass} />
                  <div className="relative">
                    <select name="country" required value={formData.country} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-10`}>
                      <option value="" disabled hidden>Select Country*</option>
                      <option value="NP">Nepal</option>
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AE">United Arab Emirates</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="pt-3">
                  <button type="submit" className="w-full bg-[#07112e] hover:bg-[#0f2050] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-md active:scale-[0.99] transition-all">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
