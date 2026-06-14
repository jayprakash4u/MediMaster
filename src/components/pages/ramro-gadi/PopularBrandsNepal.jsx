"use client";

// ── Popular Bike Brands of Nepal ─────────────────────────────────────────────
// Logo grid layout matching the reference image:
// clean white cards, brand logo image centered, 4-column masonry-style grid.
// Replace each <BrandLogo> placeholder with <Image src="..." /> when ready.

const BRANDS = [
  {
    id: 1,
    name: "Hero",
    tagline: "India's No.1",
    color: "#E31E24",
    bg: "#fff5f5",
    textColor: "#E31E24",
  },
  {
    id: 2,
    name: "Yamaha",
    tagline: "Revs Your Heart",
    color: "#1B1B4B",
    bg: "#f0f1f8",
    textColor: "#1B1B4B",
  },
  {
    id: 3,
    name: "Bajaj",
    tagline: "Distinctly Ahead",
    color: "#0057A8",
    bg: "#f0f6ff",
    textColor: "#0057A8",
  },
  {
    id: 4,
    name: "TVS",
    tagline: "Racing DNA",
    color: "#E8181D",
    bg: "#fff5f5",
    textColor: "#E8181D",
  },
  {
    id: 5,
    name: "Honda",
    tagline: "The Power of Dreams",
    color: "#CC0000",
    bg: "#fff5f5",
    textColor: "#CC0000",
  },
  {
    id: 6,
    name: "KTM",
    tagline: "Ready To Race",
    color: "#FF6600",
    bg: "#fff8f2",
    textColor: "#FF6600",
  },
  {
    id: 7,
    name: "Royal Enfield",
    tagline: "Made Like a Gun",
    color: "#2C2C2C",
    bg: "#f5f5f5",
    textColor: "#2C2C2C",
  },
  {
    id: 8,
    name: "Suzuki",
    tagline: "Way of Life",
    color: "#1A4FA0",
    bg: "#f0f4ff",
    textColor: "#1A4FA0",
  },
  {
    id: 9,
    name: "CF Moto",
    tagline: "Power of Innovation",
    color: "#0081C9",
    bg: "#f0f8ff",
    textColor: "#0081C9",
  },
  {
    id: 10,
    name: "Ather",
    tagline: "Electric Future",
    color: "#00C28B",
    bg: "#f0fdf8",
    textColor: "#00C28B",
  },
  {
    id: 11,
    name: "Kawasaki",
    tagline: "Let the Good Times",
    color: "#1B7A1B",
    bg: "#f2faf2",
    textColor: "#1B7A1B",
  },
  {
    id: 12,
    name: "BMW",
    tagline: "Sheer Riding Pleasure",
    color: "#1C69D4",
    bg: "#f0f5ff",
    textColor: "#1C69D4",
  },
];

function BrandCard({ brand }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ minHeight: 140 }}
    >
      {/* Subtle color wash on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: brand.bg }}
      />

      {/* Logo placeholder — replace with <Image /> */}
      <div
        className="relative z-10 flex items-center justify-center w-full"
        style={{ height: 60 }}
      >
        {/* ── SWAP THIS DIV WITH YOUR LOGO IMAGE ── */}
        <div
          className="flex items-center justify-center rounded-xl px-3 py-2 transition-transform duration-300 group-hover:scale-110"
          style={{ background: brand.bg, minWidth: 80 }}
        >
          <span
            className="font-black tracking-tight leading-none"
            style={{
              color: brand.textColor,
              fontSize:
                brand.name.length > 8 ? 13 : brand.name.length > 5 ? 17 : 22,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing:
                brand.name === "KTM" || brand.name === "TVS"
                  ? "0.05em"
                  : "-0.01em",
            }}
          >
            {brand.name.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Brand name + tagline */}
      <div className="relative z-10 text-center">
        <p className="text-xs text-gray-400 font-medium tracking-wide leading-tight">
          {brand.tagline}
        </p>
      </div>

      {/* Color accent bar at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
        style={{ background: brand.color }}
      />
    </div>
  );
}

export default function PopularBrandsNepal() {
  return (
    <section
      className="w-full bg-white py-20 px-6"
      style={{ fontFamily: "'Barlow Condensed', 'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="mb-12">
          <p className="text-xxs sm:text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 lg:mb-3">
            Two Wheelers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Popular Bike Brands
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Top two-wheeler brands trusted by thousands of Nepali riders — from
            everyday commuters to premium machines.
          </p>
        </div>

        {/* ── Brand Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {BRANDS.map((brand, i) => (
            <div
              key={brand.id}
              style={{
                animationDelay: `${i * 60}ms`,
                animation: "fadeUp 0.5s ease both",
              }}
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>

        {/* ── Bottom strip ─────────────────────────────────────────── */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-gray-100"
          style={{ background: "#fafafa" }}
        >
          {[
            { value: "12+", label: "Brands Featured" },
            { value: "500+", label: "Showrooms Nationwide" },
            { value: "1M+", label: "Bikes on the Road" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span
                className="text-4xl font-black leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#111",
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border-2 transition-all duration-200 hover:bg-gray-900 hover:text-white hover:border-gray-900"
            style={{ borderColor: "#222", color: "#222" }}
          >
            View All Brands
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
