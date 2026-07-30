const facilities = [
  {
    label: "Individual Users",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <circle
          cx="32"
          cy="20"
          r="10"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M12 54 C12 42 20 36 32 36 C44 36 52 42 52 54"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Health Clinics",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <rect
          x="8"
          y="16"
          width="48"
          height="44"
          rx="3"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M8 28 L32 10 L56 28"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="16"
          y="36"
          width="10"
          height="12"
          rx="1.5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="38"
          y="36"
          width="10"
          height="12"
          rx="1.5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Corporate Wellness",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <rect
          x="14"
          y="10"
          width="36"
          height="48"
          rx="3"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="none"
        />
        <rect
          x="22"
          y="6"
          width="20"
          height="10"
          rx="2"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="22"
          y="24"
          width="20"
          height="20"
          rx="2"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="32"
          y1="28"
          x2="32"
          y2="40"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="34"
          x2="38"
          y2="34"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Insurance Providers",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <circle
          cx="32"
          cy="32"
          r="8"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <circle
          cx="10"
          cy="18"
          r="6"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="54"
          cy="18"
          r="6"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="10"
          cy="46"
          r="6"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="54"
          cy="46"
          r="6"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Hospitals & Labs",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <rect
          x="8"
          y="12"
          width="48"
          height="44"
          rx="3"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M8 24 L32 8 L56 24"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="18"
          y="34"
          width="10"
          height="12"
          rx="1.5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="36"
          y="34"
          width="10"
          height="12"
          rx="1.5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

import { HEADING } from "@/lib/typography";
import { COMPONENT_STYLES } from "@/lib/typography";

export default function MediFitScalableSolution() {
  return (
    <section className="section-shell bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="product-section-title text-slate-900">
          Scalable health analytics for every healthcare provider
        </h2>

        <div className="w-16 h-[3px] bg-gray-900 mb-5" />

        <p className={COMPONENT_STYLES.bodyLarge}>
          Bring predictive health analytics into your unique workflow with AI-powered insights,
          real-time monitoring, personalized care pathways, and seamless integration across every
          touchpoint.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {facilities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 bg-slate-50 rounded-xl p-3 hover:bg-teal-50 sm:rounded-2xl sm:p-4 lg:p-5 transition-colors duration-200 group cursor-pointer"
            >
              <div className="flex items-center justify-center">{item.icon}</div>
              <p className="text-xs font-semibold text-gray-700 text-center leading-snug group-hover:text-teal-700 transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
