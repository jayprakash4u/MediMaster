"use client";

import PropTypes from "prop-types";

const COMPANIES = [
  { id: 1, name: "eSewa", color: "#00A651", bg: "#f0fdf4", font: "800", size: 18 },
  { id: 2, name: "Khalti", color: "#5C2D91", bg: "#faf5ff", font: "800", size: 18 },
  { id: 3, name: "IME Pay", color: "#E31E24", bg: "#fff5f5", font: "800", size: 16 },
  { id: 4, name: "ConnectIPS", color: "#0057A8", bg: "#eff6ff", font: "800", size: 13 },
  { id: 5, name: "FonePay", color: "#FF6600", bg: "#fff7ed", font: "800", size: 16 },
  { id: 6, name: "NTC", color: "#005F73", bg: "#ecfeff", font: "900", size: 22 },
  { id: 7, name: "Ncell", color: "#E40046", bg: "#fff1f2", font: "900", size: 22 },
  { id: 8, name: "Smart Telecom", color: "#1B4FA0", bg: "#eff6ff", font: "700", size: 13 },
  { id: 9, name: "UTL", color: "#2C2C2C", bg: "#f8f8f8", font: "900", size: 22 },
  { id: 10, name: "CG Corp", color: "#C8102E", bg: "#fff5f5", font: "800", size: 18 },
  { id: 11, name: "Golchha Group", color: "#B7791F", bg: "#fffbeb", font: "700", size: 15 },
  { id: 12, name: "Triveni Group", color: "#166534", bg: "#f0fdf4", font: "700", size: 15 },
  { id: 13, name: "Shankar Group", color: "#1E3A5F", bg: "#eff6ff", font: "700", size: 15 },
  { id: 14, name: "Dugar Group", color: "#7C3AED", bg: "#faf5ff", font: "700", size: 16 },
  { id: 15, name: "Daraz", color: "#F77F00", bg: "#fff7ed", font: "900", size: 22 },
  { id: 16, name: "SastoDeal", color: "#E53E3E", bg: "#fff5f5", font: "800", size: 15 },
  { id: 17, name: "HamroBazaar", color: "#2B6CB0", bg: "#ebf8ff", font: "700", size: 14 },
  { id: 18, name: "Tootle", color: "#FF3C78", bg: "#fff0f6", font: "800", size: 18 },
  { id: 19, name: "Pathao", color: "#FF6B00", bg: "#fff7ed", font: "800", size: 18 },
  { id: 20, name: "Himalayan Bank", color: "#1B4F9E", bg: "#eff6ff", font: "700", size: 13 },
  { id: 21, name: "NMB Bank", color: "#00529B", bg: "#eff6ff", font: "800", size: 16 },
  { id: 22, name: "Nabil Bank", color: "#C8102E", bg: "#fff5f5", font: "800", size: 16 },
  { id: 23, name: "Sanima Bank", color: "#1A6B3C", bg: "#f0fdf4", font: "700", size: 16 },
  { id: 24, name: "Global IME", color: "#B7410E", bg: "#fff7ed", font: "700", size: 16 },
  { id: 25, name: "Laxmi Bank", color: "#702459", bg: "#fdf2f8", font: "700", size: 16 },
  { id: 26, name: "Kantipur", color: "#D32F2F", bg: "#fff5f5", font: "800", size: 18 },
  { id: 27, name: "Mero Share", color: "#0069B4", bg: "#eff6ff", font: "700", size: 16 },
  { id: 28, name: "Hamro Patro", color: "#D97706", bg: "#fffbeb", font: "800", size: 16 },
  { id: 29, name: "Mero Lagani", color: "#2563EB", bg: "#eff6ff", font: "700", size: 15 },
  { id: 30, name: "Nepse Online", color: "#0369A1", bg: "#f0f9ff", font: "700", size: 14 },
  { id: 31, name: "Foodmandu", color: "#E85D04", bg: "#fff7ed", font: "800", size: 16 },
  { id: 32, name: "Bhoj.com", color: "#16A34A", bg: "#f0fdf4", font: "800", size: 18 },
  { id: 33, name: "Khaaja Ghar", color: "#B45309", bg: "#fffbeb", font: "700", size: 15 },
  { id: 34, name: "Nepal Airlines", color: "#003087", bg: "#eff6ff", font: "700", size: 14 },
  { id: 35, name: "Yeti Airlines", color: "#1D4ED8", bg: "#eff6ff", font: "700", size: 16 },
  { id: 36, name: "Buddha Air", color: "#D97706", bg: "#fffbeb", font: "700", size: 16 },
  { id: 37, name: "Shree Airlines", color: "#C026D3", bg: "#fdf4ff", font: "700", size: 15 },
  { id: 38, name: "Dhulikhel Hosp", color: "#0891B2", bg: "#ecfeff", font: "600", size: 13 },
  { id: 39, name: "Vaidya's", color: "#9D174D", bg: "#fdf2f8", font: "700", size: 18 },
  { id: 40, name: "Deerwalk", color: "#0F766E", bg: "#f0fdfa", font: "700", size: 16 },
  { id: 41, name: "CMS College", color: "#1E40AF", bg: "#eff6ff", font: "700", size: 15 },
  { id: 42, name: "Bhat-Bhateni", color: "#16A34A", bg: "#f0fdf4", font: "800", size: 14 },
  { id: 43, name: "Salesberry", color: "#7C3AED", bg: "#faf5ff", font: "700", size: 15 },
  { id: 44, name: "Dish Media", color: "#1D4ED8", bg: "#eff6ff", font: "700", size: 15 },
  { id: 45, name: "Muktinath Bank", color: "#065F46", bg: "#ecfdf5", font: "700", size: 13 },
  { id: 46, name: "Siddhartha Bk", color: "#92400E", bg: "#fffbeb", font: "700", size: 13 },
  { id: 47, name: "Kumari Bank", color: "#831843", bg: "#fdf2f8", font: "700", size: 15 },
  { id: 48, name: "Citizens Bank", color: "#1E3A8A", bg: "#eff6ff", font: "700", size: 13 },
  { id: 49, name: "Mega Bank", color: "#047857", bg: "#ecfdf5", font: "700", size: 16 },
  { id: 50, name: "Prime Comm.", color: "#6B21A8", bg: "#faf5ff", font: "700", size: 15 },
  { id: 51, name: "Prabhu Bank", color: "#B91C1C", bg: "#fff5f5", font: "700", size: 16 },
  { id: 52, name: "Machhapuchchre", color: "#0C4A6E", bg: "#f0f9ff", font: "700", size: 12 },
  { id: 53, name: "NIC Asia", color: "#7E22CE", bg: "#faf5ff", font: "700", size: 16 },
  { id: 54, name: "Everest Bank", color: "#1C4532", bg: "#ecfdf5", font: "700", size: 15 },
  { id: 55, name: "Rastriya Banijya", color: "#BE123C", bg: "#fff5f5", font: "700", size: 12 },
  { id: 56, name: "Nepal SBI", color: "#1D4ED8", bg: "#eff6ff", font: "700", size: 16 },
];

function LogoCard({ company }) {
  return (
    <div
      className="flex items-center justify-center px-5 py-3 rounded-xl border cursor-pointer"
      style={{
        background: "#fff",
        borderColor: "rgba(0,0,0,0.08)",
        minWidth: 110,
        height: 60,
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = company.bg;
        e.currentTarget.style.borderColor = company.color + "55";
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 4px 20px " + company.color + "22";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          color: company.color,
          fontFamily: "'Syne', sans-serif",
          fontWeight: company.font,
          fontSize: company.size,
          letterSpacing: company.size >= 20 ? "-0.02em" : "0.01em",
          whiteSpace: "nowrap",
          lineHeight: 1.1,
        }}
      >
        {company.name}
      </span>
    </div>
  );
}

LogoCard.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    font: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
};

export default function TopCompaniesNepal() {
  TopCompaniesNepal.propTypes = {};
  return (
    <section id="worknepal-top-companies" className="w-full bg-white py-20 px-4 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="currentColor"
                className="text-teal-600"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-600" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Top Companies
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-4">
          Nepal&apos;s Leading Organisations
        </h2>

        <div className="w-full h-px bg-slate-200 mb-8" />

        <div className="flex flex-wrap gap-2.5 justify-center">
          {COMPANIES.map((co, i) => (
            <div
              key={co.id}
              className="logo-in"
              style={{ animationDelay: Math.min(i * 25, 600) + "ms" }}
            >
              <LogoCard company={co} />
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-slate-200 mt-8 mb-10" />

        <div className="flex flex-wrap items-center justify-center gap-12">
          {[
            { n: "56+", label: "Companies" },
            { n: "14", label: "Sectors" },
            { n: "200K+", label: "Employees" },
            { n: "NPR T+", label: "Combined Turnover" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-extrabold text-slate-900 leading-none">{s.n}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
