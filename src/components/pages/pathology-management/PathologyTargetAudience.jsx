"use client";

import React from "react";
import { Check, Hospital, Network, UserRound } from "lucide-react";

const targetPoints = [
  "Multi-specialty diagnostic labs handling diverse test panels",
  "Independent lab centers seeking digital sample management",
  "Hospital laboratories requiring integrated reporting",
  "Clinic chains needing centralized test data management",
];

const cards = [
  {
    icon: Hospital,
    title: "Hospital Labs",
    color: "teal",
  },
  {
    icon: Network,
    title: "Diagnostic Chains",
    color: "blue",
  },
  {
    icon: UserRound,
    title: "Independent Labs",
    color: "orange",
  },
];

export default function PathologyTargetAudience() {
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
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
          Who Is This <span className="text-navy-600">Pathology Lab Management System For?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-5 space-y-6">
            {targetPoints.map((text, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 flex items-center relative pt-1 text-teal-600">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <Check className="w-4 h-4 stroke-[3] absolute left-1 top-[7px] opacity-70" />
                </div>
                <p className="text-slate-600 font-medium text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 lg:pt-0">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              const c = colorMap[card.color];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-6 p-4 rounded-2xl transition-all duration-200 hover:bg-slate-50/80"
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br border flex items-center justify-center shadow-sm ${c.iconBg} transition-transform duration-300 ${c.iconHover}`}
                  >
                    <IconComponent className="w-12 h-12 stroke-[1.25]" />
                  </div>
                  <h3
                    className={`font-bold text-sm md:text-base tracking-tight whitespace-nowrap ${c.heading}`}
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
