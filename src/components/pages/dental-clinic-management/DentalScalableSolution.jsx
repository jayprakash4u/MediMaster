const facilities = [
  {
    label: "Dental clinics",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <path
          d="M20 10 C12 10 8 18 10 26 C12 34 16 36 18 44 C20 52 22 56 26 56 C30 56 30 48 32 48 C34 48 34 56 38 56 C42 56 44 52 46 44 C48 36 52 34 54 26 C56 18 52 10 44 10 C40 10 36 14 32 14 C28 14 24 10 20 10 Z"
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M22 14 Q28 20 32 18 Q36 20 42 14"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Multi-specialty",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
    label: "Solo practitioners",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
    label: "Clinic chains",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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

export default function DentalScalableSolution() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
          Scalable dental clinic management solution to fit any practice size
        </h2>

        <div className="w-16 h-[3px] bg-gray-900 mb-5" />

        <p className="text-gray-500 text-base leading-relaxed max-w-4xl mb-12">
          Bring dental clinic operations into your practice workflow with easy appointment booking,
          visual treatment planning, automated reminders, and smooth patient communication across
          every touchpoint.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {facilities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 bg-slate-50 rounded-2xl p-5 hover:bg-teal-50 transition-colors duration-200 group cursor-pointer"
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
