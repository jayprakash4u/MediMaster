const facilities = [
  {
    label: "Small Clinics",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect
          x="8"
          y="20"
          width="48"
          height="40"
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
          x="26"
          y="38"
          width="12"
          height="12"
          rx="1.5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="32"
          y1="18"
          x2="32"
          y2="24"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="21"
          x2="36"
          y2="21"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Medium Hospitals",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect
          x="10"
          y="22"
          width="44"
          height="36"
          rx="3"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M10 30 L32 14 L54 30"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="22"
          y="38"
          width="8"
          height="10"
          rx="1.5"
          stroke="currentColor"
          className="text-teal-600"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="34"
          y="38"
          width="8"
          height="10"
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
    label: "Diagnostic Labs",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
    label: "Multi-Branch Chains",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
    label: "Enterprises",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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

export default function AccountingScalableSolution() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-4 max-w-3xl">
          Scalable accounting software for every business
        </h2>

        <div className="w-16 h-[3px] bg-gray-900 mb-5" />

        <p className="text-gray-500 text-base leading-relaxed max-w-4xl mb-12">
          Bring financial operations into your unique workflow with automated billing, real-time
          reconciliation, comprehensive reporting, and seamless integration across every touchpoint.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {facilities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-teal-600 mb-2">{item.icon}</div>
              <span className="text-xs font-semibold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
