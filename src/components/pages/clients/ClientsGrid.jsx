"use client";

// Color palette for different client types with varied hues
const colorPalettes = {
  Hospital: [
    { color: "#DC2626", bg: "#FEE2E2" },
    { color: "#2563EB", bg: "#EFF6FF" },
    { color: "#059669", bg: "#ECFDF5" },
    { color: "#7C3AED", bg: "#F5F3FF" },
    { color: "#0891B2", bg: "#ECFDF5" },
  ],
  Pharmacy: [
    { color: "#F59E0B", bg: "#FFFBEB" },
    { color: "#10B981", bg: "#ECFDF5" },
    { color: "#8B5CF6", bg: "#FAF5FF" },
    { color: "#EC4899", bg: "#FCE7F3" },
    { color: "#6366F1", bg: "#E0E7FF" },
  ],
  Pathology: [
    { color: "#E11D48", bg: "#FFE4E6" },
    { color: "#00A651", bg: "#F0FDF4" },
    { color: "#0D47A1", bg: "#E3F2FD" },
    { color: "#B91C1C", bg: "#FEE2E2" },
    { color: "#1E40AF", bg: "#EFF6FF" },
  ],
};

// Get color based on client type and id
const getClientColor = (type, id) => {
  const palette = colorPalettes[type] || colorPalettes.Hospital;
  return palette[(id - 1) % palette.length];
};

export default function ClientsGrid() {
  const clientsData = [
    { id: 1, name: "Grande International Hospital", type: "Hospital" },
    { id: 2, name: "Nobel Medical College", type: "Hospital" },
    { id: 3, name: "Kathmandu Medical College", type: "Hospital" },
    { id: 4, name: "Manipal Teaching Hospital", type: "Hospital" },
    { id: 5, name: "Patan Hospital", type: "Hospital" },
    { id: 6, name: "Bir Hospital", type: "Hospital" },
    { id: 7, name: "Teku Hospital", type: "Hospital" },
    { id: 8, name: "B&C Medical College", type: "Hospital" },
    { id: 9, name: "Devdaha Medical College", type: "Hospital" },
    { id: 10, name: "Kathmandu Model Hospital", type: "Hospital" },
    { id: 11, name: "Alka Hospital", type: "Hospital" },
    { id: 12, name: "Sumeru Hospital", type: "Hospital" },
    { id: 13, name: "Sagarmatha Hospital", type: "Hospital" },
    { id: 14, name: "Norvic International Hospital", type: "Hospital" },
    { id: 15, name: "Ayurveda Hospital", type: "Hospital" },
    { id: 16, name: "Shukla Pharmacy", type: "Pharmacy" },
    { id: 17, name: "MediCare Pharmacy", type: "Pharmacy" },
    { id: 18, name: "HealthPoint Pharmacy", type: "Pharmacy" },
    { id: 19, name: "Lifeline Pharmacy", type: "Pharmacy" },
    { id: 20, name: "City Pharmacy", type: "Pharmacy" },
    { id: 21, name: "Nepal Medical Store", type: "Pharmacy" },
    { id: 22, name: "Sajha Pharmacy", type: "Pharmacy" },
    { id: 23, name: "Kantipur Pharmacy", type: "Pharmacy" },
    { id: 24, name: "Guna Pharmacy", type: "Pharmacy" },
    { id: 25, name: "Siddhi Pharmacy", type: "Pharmacy" },
    { id: 26, name: "Everest Diagnostic Center", type: "Pathology" },
    { id: 27, name: "Nepal Pathology Lab", type: "Pathology" },
    { id: 28, name: "Central Diagnostic Center", type: "Pathology" },
    { id: 29, name: "Kathmandu Medical Labs", type: "Pathology" },
    { id: 30, name: "National Pathology", type: "Pathology" },
    { id: 31, name: "Green City Diagnostic", type: "Pathology" },
    { id: 32, name: "LifeCare Pathology", type: "Pathology" },
    { id: 33, name: "Sagarmatha Diagnostic", type: "Pathology" },
    { id: 34, name: "MediPath Laboratory", type: "Pathology" },
    { id: 35, name: "Himalayan Pathology", type: "Pathology" },
    { id: 36, name: "Dhulikhel Hospital", type: "Hospital" },
    { id: 37, name: "Scheer Memorial Hospital", type: "Hospital" },
    { id: 38, name: "Lumbini Medical College", type: "Hospital" },
    { id: 39, name: "Pokhara Academy of Health Sciences", type: "Hospital" },
    { id: 40, name: "BiratMedical College", type: "Hospital" },
    { id: 41, name: "Janaki Medical College", type: "Hospital" },
    { id: 42, name: "College of Medical Sciences", type: "Hospital" },
    { id: 43, name: "Om Hospital", type: "Hospital" },
    { id: 44, name: "Research Institute of Health Science", type: "Hospital" },
    { id: 45, name: "Miteri Hospital", type: "Hospital" },
    { id: 46, name: "Namaste Pharmacy", type: "Pharmacy" },
    { id: 47, name: "Swasthya Pharmacy", type: "Pharmacy" },
    { id: 48, name: "Daily Pharmacy", type: "Pharmacy" },
    { id: 49, name: "Prime Pharmacy", type: "Pharmacy" },
    { id: 50, name: "Care Pharmacy", type: "Pharmacy" },
    { id: 51, name: "Quality Diagnostic Center", type: "Pathology" },
    { id: 52, name: "Shree Diagnostic Lab", type: "Pathology" },
    { id: 53, name: "Metro Pathology", type: "Pathology" },
    { id: 54, name: "Ace Laboratory", type: "Pathology" },
    { id: 55, name: "Nirmal Pathology", type: "Pathology" },
    { id: 56, name: "Divine Diagnostic", type: "Pathology" },
    { id: 57, name: "WellCare Diagnostic", type: "Pathology" },
    { id: 58, name: "Women's Hospital", type: "Hospital" },
    { id: 59, name: "Birgunj Hospital", type: "Hospital" },
    { id: 60, name: "Chitwan Medical College", type: "Hospital" },
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden py-20 px-4 md:px-8">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="#0D9488"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="#0D9488" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Our Clients
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-slate-900"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Trusted by <span className="text-teal-600">500+</span> Healthcare
          Partners
        </h2>

        <main className="max-w-6xl mx-auto px-4 md:px-8 pb-24 mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-gray-100">
            {clientsData.map((client) => {
              const clientColor = getClientColor(client.type, client.id);
              const displayName =
                client.name.length > 30
                  ? client.name.substring(0, 27) + "..."
                  : client.name;

              return (
                <div
                  key={client.id}
                  className="flex flex-col items-center justify-between h-40 p-4 border-2 border-gray-200 transition-all duration-300 hover:shadow-md group rounded-lg"
                  style={{
                    backgroundColor: clientColor.bg,
                    borderColor: clientColor.color + "40",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 8px 16px ${clientColor.color}20`;
                    e.currentTarget.style.borderColor = clientColor.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor =
                      clientColor.color + "40";
                  }}
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <span
                      className="text-center font-bold leading-snug select-none transition-all duration-300"
                      style={{
                        color: clientColor.color,
                        fontSize: displayName.length > 20 ? "12px" : "13px",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        fontFamily: "'Syne', 'Segoe UI', sans-serif",
                      }}
                    >
                      {displayName}
                    </span>
                  </div>
                  <span
                    className="text-[9px] font-bold tracking-[0.15em] uppercase pt-2 transition-colors duration-300"
                    style={{ color: clientColor.color }}
                  >
                    {client.type}
                  </span>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
