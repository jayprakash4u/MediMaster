"use client";

import React, { useState } from "react";

export default function AccountingTrialSection() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
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
    <section id="accounting-trial" className="relative w-full bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-teal-600 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        <div className="md:col-span-5 bg-gradient-to-b from-[#0D9488] to-[#0F766E] p-8 sm:p-10 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight mb-6">
              Smart Accounting Software
            </h2>
            <p className="text-sm text-teal-50/90 leading-relaxed mb-8">
              Transform your financial operations with intelligent invoicing,
              automated reconciliation, and comprehensive reporting. Our system
              ensures accurate books while saving time and ensuring compliance.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-50">
                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Automated Invoicing & Billing</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-50">
                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time Financial Reporting</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-50">
                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>GST & Tax Compliance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-7 p-8 sm:p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Start Your Free Trial
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Accountant"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="ABC Pvt. Ltd."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="+91 00000 00000"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Nepal"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Start Free Trial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
