"use client";

import React from "react";

export default function MetricsCounterSection() {
  const stats = [
    {
      id: "lives",
      targetNumber: 150,
      suffix: "M+",
      label: "Lives Impacted",
    },
    {
      id: "customers",
      targetNumber: 400,
      suffix: "+",
      label: "Managed Services Customers",
    },
    {
      id: "centers",
      targetNumber: 20,
      suffix: "+",
      label: "Delivery Centers",
    },
  ];

  return (
    <section className="w-full bg-navy-900 py-16 md:py-20 font-sans text-neutral-50 antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center space-y-10 md:space-y-12">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl text-neutral-50">
          Delivering value for our customers
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="flex-1 w-full px-4 space-y-2">
                <span className="block text-5xl md:text-6xl font-black tracking-tight text-teal-400">
                  <span>{stat.targetNumber}</span>
                  <span>{stat.suffix}</span>
                </span>

                <span className="block text-sm md:text-base text-gray-300 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>

              {index < stats.length - 1 && (
                <div className="hidden md:block h-16 w-[1px] bg-navy-700/60 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
