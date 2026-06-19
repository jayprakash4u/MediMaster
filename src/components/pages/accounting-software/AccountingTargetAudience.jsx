"use client";

import React from "react";
import { Check, Stethoscope, Building2, FlaskConical, ClipboardList } from "lucide-react";

const targetPoints = [
  "Small businesses needing simple GST-compliant invoicing",
  "Clinics managing day-to-day billing, receipts, and expenses",
  "Hospitals requiring multi-branch consolidation and financial reporting",
  "Enterprises requiring ERP-grade accounting with payroll and inventory",
];

const cards = [
  {
    icon: Stethoscope,
    title: "Clinics",
    color: "teal",
  },
  {
    icon: Building2,
    title: "Hospitals",
    color: "blue",
  },
  {
    icon: FlaskConical,
    title: "Diagnostic Labs",
    color: "indigo",
  },
  {
    icon: ClipboardList,
    title: "Enterprises",
    color: "teal",
  },
];

export default function AccountingTargetAudience() {
  const colorMap = {
    teal: {
      heading: "text-teal-700",
      check: "text-teal-600",
      iconBg: "bg-gradient-to-br from-teal-50 to-teal-100/40 border-teal-100 text-teal-600",
      iconHover: "hover:scale-105",
    },
    blue: {
      heading: "text-navy-700",
      check: "text-navy-600",
      iconBg: "bg-gradient-to-br from-navy-50 to-navy-100/40 border-navy-100 text-navy-600",
      iconHover: "hover:scale-105",
    },
    indigo: {
      heading: "text-indigo-700",
      check: "text-indigo-600",
      iconBg: "bg-gradient-to-br from-indigo-50 to-indigo-100/40 border-indigo-100 text-indigo-600",
      iconHover: "hover:scale-105",
    },
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
          Who Is This <span className="text-navy-600">Accounting Software For?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {targetPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => {
              const c = colorMap[card.color];
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`p-5 rounded-xl border bg-white ${c.iconBg} ${c.iconHover} transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <h4 className={`text-sm font-bold ${c.heading}`}>{card.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
