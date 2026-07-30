const facilities = [
  {
    label: "Diagnostic Labs",
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
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="none"
        />
        <rect
          x="22"
          y="6"
          width="20"
          height="10"
          rx="2"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="22"
          y="24"
          width="20"
          height="20"
          rx="2"
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="32"
          y1="28"
          x2="32"
          y2="40"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="34"
          x2="38"
          y2="34"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="52"
          x2="28"
          y2="52"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="36"
          y1="52"
          x2="42"
          y2="52"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Pathology Centers",
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
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="none"
        />
        <rect
          x="16"
          y="28"
          width="8"
          height="10"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="28"
          y="28"
          width="8"
          height="10"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="40"
          y="28"
          width="8"
          height="10"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="24"
          y="44"
          width="16"
          height="16"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M8 28 L32 10 L56 28"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="29"
          y1="16"
          x2="29"
          y2="22"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="19"
          x2="32"
          y2="19"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Radiology Centers",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <circle cx="32" cy="32" r="20" stroke="#6366f1" strokeWidth="2.5" fill="none" />
        <circle cx="32" cy="32" r="10" stroke="#6366f1" strokeWidth="2" fill="none" />
        <line
          x1="32"
          y1="12"
          x2="32"
          y2="20"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="44"
          x2="32"
          y2="52"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="32"
          x2="20"
          y2="32"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="32"
          x2="52"
          y2="32"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Independent Labs",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
      >
        <circle cx="32" cy="18" r="10" stroke="#6366f1" strokeWidth="2.5" fill="none" />
        <path
          d="M12 54 C12 42 20 36 32 36 C44 36 52 42 52 54"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="28" y="10" width="8" height="4" rx="1" fill="#6366f1" opacity="0.3" />
        <path
          d="M26 36 L26 44 L32 40 L38 44 L38 36"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Clinic Chains",
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
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="#6366f1"
          fillOpacity="0.15"
        />
        <circle cx="10" cy="18" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
        <circle cx="54" cy="18" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
        <circle cx="10" cy="46" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
        <circle cx="54" cy="46" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
        <line
          x1="16"
          y1="21"
          x2="25"
          y2="27"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="48"
          y1="21"
          x2="39"
          y2="27"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="43"
          x2="25"
          y2="37"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="48"
          y1="43"
          x2="39"
          y2="37"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function DiagnosticCenterScalableSolution() {
  return (
    <section className="section-shell bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="product-section-title text-slate-900 mb-4 max-w-3xl">
          Scalable diagnostic center solution for every lab setup
        </h2>

        <div className="w-16 h-[3px] bg-gray-900 mb-5" />

        <p className="product-section-copy max-w-4xl mb-6 sm:mb-8 lg:mb-12">
          Bring diagnostic center operations into your unique workflow with easy test requests,
          real-time result tracking, automatic integration with patient records, and smooth staff
          collaboration.
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
