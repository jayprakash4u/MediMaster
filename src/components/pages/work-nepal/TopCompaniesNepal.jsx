"use client";

import { useMemo, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const COMPANIES = [
  { id: 1, name: "eSewa", color: "#00A651", bg: "#f0fdf4", sector: "Fintech" },
  { id: 2, name: "Khalti", color: "#5C2D91", bg: "#faf5ff", sector: "Fintech" },
  { id: 3, name: "IME Pay", color: "#E31E24", bg: "#fff5f5", sector: "Fintech" },
  { id: 4, name: "ConnectIPS", color: "#0057A8", bg: "#eff6ff", sector: "Fintech" },
  { id: 5, name: "FonePay", color: "#FF6600", bg: "#fff7ed", sector: "Fintech" },
  { id: 6, name: "NTC", color: "#005F73", bg: "#ecfeff", sector: "Telecom" },
  { id: 7, name: "Ncell", color: "#E40046", bg: "#fff1f2", sector: "Telecom" },
  { id: 8, name: "Smart Telecom", color: "#1B4FA0", bg: "#eff6ff", sector: "Telecom" },
  { id: 9, name: "UTL", color: "#2C2C2C", bg: "#f8f8f8", sector: "Telecom" },
  { id: 10, name: "CG Corp", color: "#C8102E", bg: "#fff5f5", sector: "Conglomerate" },
  { id: 11, name: "Golchha Group", color: "#B7791F", bg: "#fffbeb", sector: "Conglomerate" },
  { id: 12, name: "Triveni Group", color: "#166534", bg: "#f0fdf4", sector: "Conglomerate" },
  { id: 13, name: "Shankar Group", color: "#1E3A5F", bg: "#eff6ff", sector: "Conglomerate" },
  { id: 14, name: "Dugar Group", color: "#7C3AED", bg: "#faf5ff", sector: "Conglomerate" },
  { id: 15, name: "Daraz", color: "#F77F00", bg: "#fff7ed", sector: "E-Commerce" },
  { id: 16, name: "SastoDeal", color: "#E53E3E", bg: "#fff5f5", sector: "E-Commerce" },
  { id: 17, name: "HamroBazaar", color: "#2B6CB0", bg: "#ebf8ff", sector: "E-Commerce" },
  { id: 18, name: "Tootle", color: "#FF3C78", bg: "#fff0f6", sector: "E-Commerce" },
  { id: 19, name: "Pathao", color: "#FF6B00", bg: "#fff7ed", sector: "E-Commerce" },
  { id: 20, name: "Himalayan Bank", color: "#1B4F9E", bg: "#eff6ff", sector: "Banking" },
  { id: 21, name: "NMB Bank", color: "#00529B", bg: "#eff6ff", sector: "Banking" },
  { id: 22, name: "Nabil Bank", color: "#C8102E", bg: "#fff5f5", sector: "Banking" },
  { id: 23, name: "Sanima Bank", color: "#1A6B3C", bg: "#f0fdf4", sector: "Banking" },
  { id: 24, name: "Global IME", color: "#B7410E", bg: "#fff7ed", sector: "Banking" },
  { id: 25, name: "Laxmi Bank", color: "#702459", bg: "#fdf2f8", sector: "Banking" },
  { id: 26, name: "Kantipur", color: "#D32F2F", bg: "#fff5f5", sector: "Media" },
  { id: 27, name: "Mero Share", color: "#0069B4", bg: "#eff6ff", sector: "Fintech" },
  { id: 28, name: "Hamro Patro", color: "#D97706", bg: "#fffbeb", sector: "Tech" },
  { id: 29, name: "Mero Lagani", color: "#2563EB", bg: "#eff6ff", sector: "Fintech" },
  { id: 30, name: "Nepse Online", color: "#0369A1", bg: "#f0f9ff", sector: "Fintech" },
  { id: 31, name: "Foodmandu", color: "#E85D04", bg: "#fff7ed", sector: "E-Commerce" },
  { id: 32, name: "Bhoj.com", color: "#16A34A", bg: "#f0fdf4", sector: "E-Commerce" },
  { id: 33, name: "Khaaja Ghar", color: "#B45309", bg: "#fffbeb", sector: "E-Commerce" },
  { id: 34, name: "Nepal Airlines", color: "#003087", bg: "#eff6ff", sector: "Aviation" },
  { id: 35, name: "Yeti Airlines", color: "#1D4ED8", bg: "#eff6ff", sector: "Aviation" },
  { id: 36, name: "Buddha Air", color: "#D97706", bg: "#fffbeb", sector: "Aviation" },
  { id: 37, name: "Shree Airlines", color: "#C026D3", bg: "#fdf4ff", sector: "Aviation" },
  { id: 38, name: "Dhulikhel Hosp", color: "#0891B2", bg: "#ecfeff", sector: "Healthcare" },
  { id: 39, name: "Vaidya's", color: "#9D174D", bg: "#fdf2f8", sector: "Healthcare" },
  { id: 40, name: "Deerwalk", color: "#0F766E", bg: "#f0fdfa", sector: "Tech" },
  { id: 41, name: "CMS College", color: "#1E40AF", bg: "#eff6ff", sector: "Education" },
  { id: 42, name: "Bhat-Bhateni", color: "#16A34A", bg: "#f0fdf4", sector: "Retail" },
  { id: 43, name: "Salesberry", color: "#7C3AED", bg: "#faf5ff", sector: "Tech" },
  { id: 44, name: "Dish Media", color: "#1D4ED8", bg: "#eff6ff", sector: "Media" },
  { id: 45, name: "Muktinath Bank", color: "#065F46", bg: "#ecfdf5", sector: "Banking" },
  { id: 46, name: "Siddhartha Bk", color: "#92400E", bg: "#fffbeb", sector: "Banking" },
  { id: 47, name: "Kumari Bank", color: "#831843", bg: "#fdf2f8", sector: "Banking" },
  { id: 48, name: "Citizens Bank", color: "#1E3A8A", bg: "#eff6ff", sector: "Banking" },
  { id: 49, name: "Mega Bank", color: "#047857", bg: "#ecfdf5", sector: "Banking" },
  { id: 50, name: "Prime Comm.", color: "#6B21A8", bg: "#faf5ff", sector: "Banking" },
  { id: 51, name: "Prabhu Bank", color: "#B91C1C", bg: "#fff5f5", sector: "Banking" },
  { id: 52, name: "Machhapuchchre", color: "#0C4A6E", bg: "#f0f9ff", sector: "Banking" },
  { id: 53, name: "NIC Asia", color: "#7E22CE", bg: "#faf5ff", sector: "Banking" },
  { id: 54, name: "Everest Bank", color: "#1C4532", bg: "#ecfdf5", sector: "Banking" },
  { id: 55, name: "Rastriya Banijya", color: "#BE123C", bg: "#fff5f5", sector: "Banking" },
  { id: 56, name: "Nepal SBI", color: "#1D4ED8", bg: "#eff6ff", sector: "Banking" },
];

const STATS = [
  { value: "56+", label: "Companies", hint: "Verified employers" },
  { value: "14", label: "Sectors", hint: "Across Nepal" },
  { value: "200K+", label: "Employees", hint: "Combined workforce" },
  { value: "NPR T+", label: "Turnover", hint: "Market impact" },
];

const SECTORS = ["All", "Fintech", "Banking", "Telecom", "E-Commerce", "Conglomerate"];

function LogoCard({ company }) {
  return (
    <div
      className="group relative flex h-[58px] min-w-[128px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/30 hover:shadow-lg"
      title={company.name}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: company.bg }}
      />
      <span
        className="relative z-10 whitespace-nowrap font-display text-sm font-bold tracking-tight"
        style={{ color: company.color }}
      >
        {company.name}
      </span>
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: company.color }}
      />
    </div>
  );
}

function MarqueeRow({ companies, reverse = false }) {
  const track = useMemo(() => [...companies, ...companies], [companies]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-24" />
      <div
        className={cn(
          "flex w-max gap-3 py-1 hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {track.map((company, index) => (
          <LogoCard key={`${company.id}-${index}`} company={company} />
        ))}
      </div>
    </div>
  );
}

export default function TopCompaniesNepal() {
  const [activeSector, setActiveSector] = useState("All");

  const filtered = useMemo(
    () =>
      activeSector === "All"
        ? COMPANIES
        : COMPANIES.filter((company) => company.sector === activeSector),
    [activeSector]
  );

  const rowOne = filtered.filter((_, index) => index % 2 === 0);
  const rowTwo = filtered.filter((_, index) => index % 2 === 1);

  return (
    <section id="worknepal-top-companies" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Top Companies"
          title="Nepal's Leading"
          highlight="Organisations"
          description="Trusted employers across fintech, banking, telecom, and e-commerce — hiring through Work Nepal every day."
          className="mb-10"
        />

        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="card-surface px-4 py-5 text-center sm:px-5">
              <p className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-teal-600">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xxs text-slate-500">{stat.hint}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {SECTORS.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setActiveSector(sector)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200",
                activeSector === sector
                  ? "border-teal-600 bg-teal-600 text-white shadow-md shadow-teal-500/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-teal-500/30 hover:text-teal-700"
              )}
            >
              {sector}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <MarqueeRow companies={rowOne.length ? rowOne : filtered} />
          <MarqueeRow companies={rowTwo.length ? rowTwo : filtered} reverse />
        </div>
      </div>
    </section>
  );
}
