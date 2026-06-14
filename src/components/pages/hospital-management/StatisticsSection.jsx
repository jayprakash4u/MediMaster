import React from "react";

export default function StatisticsSection() {
  const stats = [
    { label: "TRUSTED DAILY", value: "3,000+", description: "Doctors actively using DocPulse daily" },
    { label: "DELIVERED CARE", value: "10M+", description: "Appointments & records managed every year" },
    { label: "ALWAYS ON", value: "99.9%", description: "Uptime SLA with under 4-hour support response" },
    { label: "PROVEN EXPERTISE", value: "13+", description: "Years building healthcare technology in India" },
    { label: "FASTER BILLING", value: "3x", description: "Faster billing process" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center font-sans bg-white">
      <div className="space-y-3 mb-16 md:mb-20">
        <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
          Streamlining Care. Protecting Patient Trust.
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
          Numbers That <span className="text-teal-600 font-bold">Speak For Themselves</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 text-left">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <span className="text-xxs font-bold tracking-wider text-slate-500 uppercase">{stat.label}</span>
            <span className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">{stat.value}</span>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
