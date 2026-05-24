import React from "react";

const ecosystemItems = [
  {
    title: "Healthcare",
    subtitle: "Software",
    color: "teal",
    icon: (
      <svg viewBox="0 0 54 54" fill="none" className="w-9 h-9">
        <rect
          x="7"
          y="10"
          width="40"
          height="27"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="20"
          x2="24"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="26"
          x2="30"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <polyline
          points="28,26 31,20 34,28 37,23 40,26 43,26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="27"
          y1="37"
          x2="27"
          y2="44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="44"
          x2="35"
          y2="44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Software",
    subtitle: "Solutions",
    color: "navy",
    icon: (
      <svg viewBox="0 0 54 54" fill="none" className="w-9 h-9">
        <polygon
          points="27,7 40,14 40,28 27,35 14,28 14,14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="27"
          y1="14"
          x2="27"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="27" cy="44" r="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="10" cy="37" r="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="44" cy="37" r="5" stroke="currentColor" strokeWidth="1.6" />
        <line
          x1="27"
          y1="35"
          x2="27"
          y2="39"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="28"
          x2="11"
          y2="32"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="28"
          x2="43"
          y2="32"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Digital",
    subtitle: "Marketing",
    color: "aqua",
    icon: (
      <svg viewBox="0 0 54 54" fill="none" className="w-9 h-9">
        <path
          d="M10 24 L10 32 L18 32 L30 40 L30 16 L18 24 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 20 Q41 24 41 28 Q41 32 34 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M37 16 Q47 22 47 28 Q47 34 37 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2,2"
        />
        <rect
          x="19"
          y="33"
          width="5"
          height="11"
          rx="1.5"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Security",
    subtitle: "Compliance",
    color: "navy",
    icon: (
      <svg viewBox="0 0 54 54" fill="none" className="w-9 h-9">
        <path
          d="M27 6 L46 13 L46 29 Q46 43 27 49 Q8 43 8 29 L8 13 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="18,28 24,35 38,21"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    subtitle: "Branding",
    color: "teal",
    icon: (
      <svg viewBox="0 0 54 54" fill="none" className="w-9 h-9">
        <polygon
          points="27,7 46,18 27,46 8,18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="18"
          x2="46"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="18"
          x2="27"
          y2="46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="46"
          y1="18"
          x2="27"
          y2="46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="27"
          y1="7"
          x2="27"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Creative",
    subtitle: "Design",
    color: "aqua",
    icon: (
      <svg viewBox="0 0 54 54" fill="none" className="w-9 h-9">
        <rect
          x="10"
          y="8"
          width="11"
          height="30"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          transform="rotate(-35 15 24)"
        />
        <circle
          cx="36"
          cy="20"
          r="7"
          stroke="currentColor"
          strokeWidth="1.6"
          className="opacity-40"
        />
        <circle
          cx="44"
          cy="30"
          r="7"
          stroke="currentColor"
          strokeWidth="1.6"
          className="opacity-65"
        />
        <circle cx="36" cy="40" r="7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

// ✅ No TypeScript type annotation — this is a .jsx file
const colorStyles = {
  teal: "bg-teal-50 border-teal-200 text-teal-700 group-hover:bg-teal-100",
  navy: "bg-navy-50 border-navy-200 text-navy-600 group-hover:bg-navy-100",
  aqua: "bg-aqua-50 border-aqua-200 text-aqua-600 group-hover:bg-aqua-100",
};

export default function HealthcareEcosystem() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
            Complete Healthcare Technology Ecosystem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Specialized solutions designed to modernize medical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ecosystemItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-4 transition-all duration-300 shadow-card hover:shadow-cardHover hover:-translate-y-1.5"
            >
              <div
                className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${colorStyles[item.color]}`}
              >
                {item.icon}
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-navy-900 leading-tight">
                  {item.title}
                </p>
                <p className="text-xs font-medium text-gray-400 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
