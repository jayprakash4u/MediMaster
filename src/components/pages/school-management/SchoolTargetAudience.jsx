"use client";

import React from "react";
import { Check, GraduationCap, Network, UserRound } from "lucide-react";
import { HEADING, FONT_FAMILY, COMPONENT_STYLES, BODY, TEXT_COLOR, FONT_WEIGHT } from "@/lib/typography";

const targetPoints = [
  "K-12 schools managing student records and academic performance",
  "Colleges requiring automated examination and grading workflows",
  "Coaching centers needing attendance and batch management",
  "International schools requiring multi-campus coordination",
];

const cards = [
  {
    icon: GraduationCap,
    title: "K-12 Schools",
    color: "teal",
  },
  {
    icon: Network,
    title: "Colleges",
    color: "blue",
  },
  {
    icon: UserRound,
    title: "Coaching Centers",
    color: "orange",
  },
];

export default function SchoolTargetAudience() {
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
         <h2 className={`${HEADING.h2} ${TEXT_COLOR.primary}`} style={{ fontFamily: FONT_FAMILY.serif }}>
          Who Is This{" "}
          <span className="text-navy-600">School Management System For?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-5 space-y-6">
            {targetPoints.map((text, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 flex items-center relative pt-1 text-teal-600">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <Check className="w-4 h-4 stroke-[3] absolute left-1 top-[7px] opacity-70" />
                </div>
                <p className={`${COMPONENT_STYLES.bodyLarge} ${BODY.base} leading-relaxed`}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 lg:pt-0">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              const cardColor = colorMap[card.color];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-6 p-4 rounded-2xl transition-all duration-200 hover:bg-slate-50/80"
                >
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br border flex items-center justify-center shadow-sm ${cardColor.iconBg} transition-transform duration-300 ${cardColor.iconHover}`}>
                    <IconComponent className="w-12 h-12 stroke-[1.25]" />
                  </div>
                  <h3 className={`${FONT_WEIGHT.bold} ${BODY.base} tracking-tight whitespace-nowrap ${cardColor.heading}`}>
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
