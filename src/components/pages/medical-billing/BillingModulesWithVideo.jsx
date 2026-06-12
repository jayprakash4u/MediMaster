"use client";

import React from "react";
import { CheckCircle2, FileText, CreditCard, BarChart3, ShieldCheck, Receipt, Users, PieChart } from "lucide-react";

export default function BillingModulesWithVideo() {
  const leftColumnModules = [
    "Claim Generation & TPA Reconciliation",
    "GST-Compliant Invoicing",
    "Multi-Channel Payment Processing",
    "Insurance Authorization Workflows",
    "Patient Ledger Management",
    "Revenue Analytics Dashboard",
  ];

  const rightColumnModules = [
    "Cash & Credit Billing",
    "Installment & Package Management",
    "Audit Trail & Compliance Reports",
    "Receivables Aging Reports",
    "Integration with OPD/IPD",
    "Multi-Branch Billing Support",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20 font-sans bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-700 tracking-tight">
          Medical Billing System Modules
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-3">
            {leftColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {rightColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full sticky top-6">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kl9bAZPgrOw"
              title="Medical Billing System - Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-3 px-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Video Demonstration
            </h4>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              Medical Billing System — Full Demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
