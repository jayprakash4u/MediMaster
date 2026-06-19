"use client";

const CLIENTS = [
  {
    id: 1,
    name: "Grande International Hospital",
    color: "#DC2626",
    bg: "#FEE2E2",
    font: "700",
    size: 12,
  },
  { id: 2, name: "Nobel Medical College", color: "#2563EB", bg: "#EFF6FF", font: "700", size: 13 },
  {
    id: 3,
    name: "Kathmandu Medical College",
    color: "#059669",
    bg: "#ECFDF5",
    font: "700",
    size: 13,
  },
  {
    id: 4,
    name: "Manipal Teaching Hospital",
    color: "#7C3AED",
    bg: "#F5F3FF",
    font: "700",
    size: 14,
  },
  { id: 5, name: "Patan Hospital", color: "#0891B2", bg: "#ECFDF5", font: "700", size: 14 },
  { id: 6, name: "Bir Hospital", color: "#DC2626", bg: "#FEE2E2", font: "700", size: 14 },
  { id: 7, name: "Teku Hospital", color: "#059669", bg: "#ECFDF5", font: "700", size: 14 },
  { id: 8, name: "B&C Medical College", color: "#2563EB", bg: "#EFF6FF", font: "700", size: 12 },
  {
    id: 9,
    name: "Devdaha Medical College",
    color: "#7C3AED",
    bg: "#F5F3FF",
    font: "700",
    size: 11,
  },
  {
    id: 10,
    name: "Kathmandu Model Hospital",
    color: "#0891B2",
    bg: "#ECFDF5",
    font: "700",
    size: 12,
  },
  { id: 11, name: "Alka Hospital", color: "#DC2626", bg: "#FEE2E2", font: "700", size: 14 },
  { id: 12, name: "Sumeru Hospital", color: "#059669", bg: "#ECFDF5", font: "700", size: 14 },
  { id: 13, name: "Sagarmatha Hospital", color: "#2563EB", bg: "#EFF6FF", font: "700", size: 13 },
  {
    id: 14,
    name: "Norvic International Hospital",
    color: "#7C3AED",
    bg: "#F5F3FF",
    font: "700",
    size: 10,
  },
  { id: 15, name: "Ayurveda Hospital", color: "#0891B2", bg: "#ECFDF5", font: "700", size: 14 },
  { id: 16, name: "Shukla Pharmacy", color: "#F59E0B", bg: "#FFFBEB", font: "700", size: 13 },
  { id: 17, name: "MediCare Pharmacy", color: "#10B981", bg: "#ECFDF5", font: "700", size: 12 },
  { id: 18, name: "HealthPoint Pharmacy", color: "#8B5CF6", bg: "#FAF5FF", font: "700", size: 11 },
  { id: 19, name: "Lifeline Pharmacy", color: "#EC4899", bg: "#FCE7F3", font: "700", size: 12 },
  { id: 20, name: "City Pharmacy", color: "#6366F1", bg: "#E0E7FF", font: "700", size: 14 },
  { id: 21, name: "Nepal Medical Store", color: "#F59E0B", bg: "#FFFBEB", font: "700", size: 11 },
  { id: 22, name: "Sajha Pharmacy", color: "#10B981", bg: "#ECFDF5", font: "700", size: 14 },
  { id: 23, name: "Kantipur Pharmacy", color: "#8B5CF6", bg: "#FAF5FF", font: "700", size: 11 },
  { id: 24, name: "Guna Pharmacy", color: "#EC4899", bg: "#FCE7F3", font: "700", size: 14 },
  { id: 25, name: "Siddhi Pharmacy", color: "#6366F1", bg: "#E0E7FF", font: "700", size: 13 },
  {
    id: 26,
    name: "Everest Diagnostic Center",
    color: "#E11D48",
    bg: "#FFE4E6",
    font: "700",
    size: 10,
  },
  { id: 27, name: "Nepal Pathology Lab", color: "#00A651", bg: "#F0FDF4", font: "700", size: 12 },
  {
    id: 28,
    name: "Central Diagnostic Center",
    color: "#0D47A1",
    bg: "#E3F2FD",
    font: "700",
    size: 9,
  },
  {
    id: 29,
    name: "Kathmandu Medical Labs",
    color: "#B91C1C",
    bg: "#FEE2E2",
    font: "700",
    size: 10,
  },
  { id: 30, name: "National Pathology", color: "#1E40AF", bg: "#EFF6FF", font: "700", size: 13 },
  { id: 31, name: "Green City Diagnostic", color: "#E11D48", bg: "#FFE4E6", font: "700", size: 10 },
  { id: 32, name: "LifeCare Pathology", color: "#00A651", bg: "#F0FDF4", font: "700", size: 12 },
  { id: 33, name: "Sagarmatha Diagnostic", color: "#0D47A1", bg: "#E3F2FD", font: "700", size: 9 },
  { id: 34, name: "MediPath Laboratory", color: "#B91C1C", bg: "#FEE2E2", font: "700", size: 11 },
  { id: 35, name: "Himalayan Pathology", color: "#1E40AF", bg: "#EFF6FF", font: "700", size: 10 },
  { id: 36, name: "Dhulikhel Hospital", color: "#0891B2", bg: "#ECFDF5", font: "700", size: 12 },
  {
    id: 37,
    name: "Scheer Memorial Hospital",
    color: "#2563EB",
    bg: "#EFF6FF",
    font: "700",
    size: 10,
  },
  {
    id: 38,
    name: "Lumbini Medical College",
    color: "#7C3AED",
    bg: "#F5F3FF",
    font: "700",
    size: 10,
  },
  {
    id: 39,
    name: "Pokhara Academy of Health Sciences",
    color: "#DC2626",
    bg: "#FEE2E2",
    font: "700",
    size: 7,
  },
  { id: 40, name: "BiratMedical College", color: "#059669", bg: "#ECFDF5", font: "700", size: 12 },
  {
    id: 41,
    name: "Janaki Medical College",
    color: "#0891B2",
    bg: "#ECFDF5",
    font: "700",
    size: 11,
  },
  {
    id: 42,
    name: "College of Medical Sciences",
    color: "#2563EB",
    bg: "#EFF6FF",
    font: "700",
    size: 9,
  },
  { id: 43, name: "Om Hospital", color: "#7C3AED", bg: "#F5F3FF", font: "700", size: 14 },
  {
    id: 44,
    name: "Research Institute of Health Science",
    color: "#059669",
    bg: "#ECFDF5",
    font: "700",
    size: 7,
  },
  { id: 45, name: "Miteri Hospital", color: "#0891B2", bg: "#ECFDF5", font: "700", size: 14 },
  { id: 46, name: "Namaste Pharmacy", color: "#F59E0B", bg: "#FFFBEB", font: "700", size: 12 },
  { id: 47, name: "Swasthya Pharmacy", color: "#10B981", bg: "#ECFDF5", font: "700", size: 12 },
  { id: 48, name: "Daily Pharmacy", color: "#8B5CF6", bg: "#FAF5FF", font: "700", size: 13 },
  { id: 49, name: "Prime Pharmacy", color: "#EC4899", bg: "#FCE7F3", font: "700", size: 14 },
  { id: 50, name: "Care Pharmacy", color: "#6366F1", bg: "#E0E7FF", font: "700", size: 14 },
  {
    id: 51,
    name: "Quality Diagnostic Center",
    color: "#E11D48",
    bg: "#FFE4E6",
    font: "700",
    size: 9,
  },
  { id: 52, name: "Shree Diagnostic Lab", color: "#00A651", bg: "#F0FDF4", font: "700", size: 10 },
  { id: 53, name: "Metro Pathology", color: "#0D47A1", bg: "#E3F2FD", font: "700", size: 12 },
  { id: 54, name: "Ace Laboratory", color: "#B91C1C", bg: "#FEE2E2", font: "700", size: 13 },
  { id: 55, name: "Nirmal Pathology", color: "#1E40AF", bg: "#EFF6FF", font: "700", size: 12 },
  { id: 56, name: "Divine Diagnostic", color: "#E11D48", bg: "#FFE4E6", font: "700", size: 12 },
  { id: 57, name: "WellCare Diagnostic", color: "#00A651", bg: "#F0FDF4", font: "700", size: 11 },
  { id: 58, name: "Women's Hospital", color: "#DC2626", bg: "#FEE2E2", font: "700", size: 12 },
  { id: 59, name: "Birgunj Hospital", color: "#059669", bg: "#ECFDF5", font: "700", size: 13 },
  {
    id: 60,
    name: "Chitwan Medical College",
    color: "#2563EB",
    bg: "#EFF6FF",
    font: "700",
    size: 9,
  },
];

function ClientCard({ client }) {
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
        e.currentTarget.style.background = client.bg;
        e.currentTarget.style.borderColor = client.color + "55";
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 4px 20px " + client.color + "22";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        className="font-syne"
        style={{
          color: client.color,
          fontWeight: client.font,
          fontSize: client.size,
          letterSpacing: client.size >= 20 ? "-0.02em" : "0.01em",
          whiteSpace: "nowrap",
          lineHeight: 1.1,
        }}
      >
        {client.name}
      </span>
    </div>
  );
}

export default function ClientsGrid() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-10 lg:px-16">
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
            Our Clients
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-4">
          Trusted by <span className="text-teal-600">500+</span> Healthcare Partners
        </h2>

        <div className="w-full h-px bg-slate-200 mb-8" />

        <div className="flex flex-wrap gap-2.5 justify-center">
          {CLIENTS.map((co, i) => (
            <div
              key={co.id}
              className="logo-in"
              style={{ animationDelay: Math.min(i * 25, 600) + "ms" }}
            >
              <ClientCard client={co} />
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-slate-200 mt-8 mb-10" />

        <div className="flex flex-wrap items-center justify-center gap-12">
          {[
            { n: "500+", label: "Clients" },
            { n: "3", label: "Sectors" },
            { n: "14+", label: "Cities" },
            { n: "98%", label: "Retention Rate" },
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
