"use client";

import React, { useState } from "react";

export default function PatientTrialSection() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    clinicName: "",
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

  return (
    <section id="patient-trial" className="relative w-full bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-teal-600 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        <div className="md:col-span-5 bg-gradient-to-b from-[#0D9488] to-[#0F766E] p-8 sm:p-10 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight mb-6">
              Smart Patient Management
            </h2>
            <p className="text-sm text-teal-50/90 leading-relaxed mb-8">
              Transform your patient experience with intelligent registration, smart
              appointment scheduling, and comprehensive care coordination. Our system
              ensures efficient operations while delivering exceptional patient care.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-50">
                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Comprehensive Patient Records</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-50">
                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Smart Appointment Scheduling</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-50">
                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Integrated Billing & Insurance</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-teal-400/30">
            <button className="bg-white text-[#0F766E] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm hover:bg-teal-50 transition-colors">
              Try For Free
            </button>
            <a href="#quote" className="text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-teal-200 transition-colors">
              Request a Quote
            </a>
          </div>
        </div>

        <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
          <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tight mb-2">
            Try Patient Management Software For Free
          </h3>
          <p className="text-sm text-slate-500 mb-8">
            Start your free trial and experience the full-featured Patient Management Software.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" required placeholder="Your Name*" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" />
              <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="clinicName" required placeholder="Clinic/Hospital Name*" value={formData.clinicName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" />
              <input type="email" name="email" required placeholder="Work Email*" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="tel" name="phone" required placeholder="Phone/WhatsApp*" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" />
              <select name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all appearance-none cursor-pointer">
                <option value="" disabled hidden>Select Country*</option>
                <option value="NP">Nepal</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="AE">United Arab Emirates</option>
              </select>
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full bg-navy-950 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-navy-900 shadow-md active:scale-[0.99] transition-all">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
