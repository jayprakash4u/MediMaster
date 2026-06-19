const facilities = [
  {
    label: "Helpdesk Teams",
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
      </svg>
    ),
  },
  {
    label: "IT Teams",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
      </svg>
    ),
  },
  {
    label: "SaaS Companies",
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
      </svg>
    ),
  },
  {
    label: "E-Commerce",
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
      </svg>
    ),
  },
  {
    label: "Service Providers",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <path
          d="M6 30 L32 10 L58 30"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10 28 L10 58 L54 58 L54 28"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="22"
          y="36"
          width="10"
          height="10"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="36"
          y="36"
          width="10"
          height="10"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function SupportTicketingScalableSolution() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-4 max-w-3xl">
          Scalable support ticketing solution for every business
        </h2>

        <div className="w-16 h-[3px] bg-gray-900 mb-5" />

        <p className="text-gray-500 text-base leading-relaxed max-w-4xl mb-12">
          Bring support operations into your team workflow with easy ticket management, automated
          routing, real-time reporting, and smooth customer communication across every touchpoint.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
