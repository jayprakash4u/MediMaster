"use client";

import React from "react";
import { Check, TestTube, Network, UserRound } from "lucide-react";

const targetPoints = [
  "Independent diagnostic labs seeking digital sample management",
  "Multi-specialty diagnostic centers handling diverse test panels",
  "Hospital laboratories requiring integrated reporting",
  "Clinic chains needing centralized test data management",
];

const cards = [
  {
    icon: TestTube,
    title: "Independent Labs",
    color: "teal",
  },
  {
    icon: Network,
    title: "Diagnostic Chains",
    color: "blue",
  },
  {
    icon: UserRound,
    title: "Hospital Labs",
    color: "orange",
  },
];

export default function DiagnosticCenterTargetAudience() {
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
    orange: {
      heading: "text-navy-700",
      check: "text-navy-600",
      iconBg: "bg-gradient-to-br from-navy-50 to-navy-100/40 border-navy-100 text-navy-600",
      iconHover: "hover:scale-105",
    },
  };

  return (
    <section className="section-shell w-full bg-white font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12">
        <h2 className="product-section-title text-slate-900">
          Who Is This{" "}
          <span className="text-navy-600">Diagnostic Center Management System For?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2 sm:gap-8 sm:pt-4">
          <div className="lg:col-span-5 space-y-6">
            {targetPoints.map((text, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 flex items-center relative pt-1 text-teal-600">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <Check className="w-4 h-4 stroke-[3] absolute left-1 top-[7px] opacity-70" />
                </div>
                <p className="product-feature-text font-medium">{text}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 pt-6 lg:pt-0">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              const c = colorMap[card.color];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 p-3 rounded-xl sm:space-y-6 sm:p-4 sm:rounded-2xl transition-all duration-200 hover:bg-slate-50/80"
                >
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br border flex items-center justify-center shadow-sm ${c.iconBg} transition-transform duration-300 ${c.iconHover}`}
                  >
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.25]" />
                  </div>
                  <h3
                    className={`font-bold text-base md:text-base tracking-tight whitespace-normal sm:whitespace-nowrap ${c.heading}`}
                  >
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
