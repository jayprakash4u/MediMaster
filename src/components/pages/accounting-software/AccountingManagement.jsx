"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "GST-compliant invoicing and billing",
  "Automated bookkeeping and ledger management",
  "Financial reporting and tax filing",
  "Multi-user access with role-based permissions",
];

export default function AccountingManagement() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase">
              Easy Accounting & GST Fillings
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
            Everything you need for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-navy-600">
              Accounting Software
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Smart accounting software for GST-compliant invoicing, bookkeeping, and financial
            reporting. Simplify your accounting workflow with automated processes and comprehensive
            financial insights.
          </p>

          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-slate-700 text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#accounting-trial"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Explore Features <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?product=accounting-software"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="rounded-lg bg-gradient-to-br from-slate-50 to-white p-6 shadow-md border border-slate-200">
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                <img
                  src="/products/accounting mgmnt.jpg"
                  alt="Accounting Software"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
