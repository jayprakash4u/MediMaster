"use client";

const S = `stroke="#1F2937" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"`;

const icons = {
  financial: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect
        x="2"
        y="18"
        width="4"
        height="8"
        rx="1"
        fill="#14B8A6"
        opacity="0.8"
      />
      <rect
        x="8"
        y="13"
        width="4"
        height="13"
        rx="1"
        fill="#14B8A6"
        opacity="0.8"
      />
      <rect
        x="14"
        y="8"
        width="4"
        height="18"
        rx="1"
        fill="#14B8A6"
        opacity="0.8"
      />
      <rect
        x="20"
        y="4"
        width="4"
        height="22"
        rx="1"
        fill="#14B8A6"
        opacity="0.8"
      />
      <polyline points="3,17 9,11 15,7 22,3" strokeWidth="1.8" />
      <polyline points="19,3 22,3 22,6" />
    </svg>
  ),
  security: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path
        d="M14 3 L24 7 L24 14 C24 19 19 23 14 25 C9 23 4 19 4 14 L4 7 Z"
        fill="#14B8A622"
      />
      <path d="M14 3 L24 7 L24 14 C24 19 19 23 14 25 C9 23 4 19 4 14 L4 7 Z" />
      <rect x="10" y="13" width="8" height="7" rx="1.5" />
      <path d="M11 13 L11 10.5 A3 3 0 0 1 17 10.5 L17 13" />
      <circle cx="14" cy="16.5" r="1" fill="#14B8A6" />
    </svg>
  ),
  mis: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="2" y="2" width="24" height="18" rx="2" />
      <line x1="2" y1="22" x2="26" y2="22" />
      <line x1="11" y1="22" x2="11" y2="26" />
      <line x1="17" y1="22" x2="17" y2="26" />
      <line x1="8" y1="26" x2="20" y2="26" />
      <polyline points="6,16 9,11 13,14 17,8 22,10" strokeWidth="1.8" />
      <circle cx="22" cy="10" r="1.5" fill="#14B8A6" />
    </svg>
  ),
  print: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="7" y="2" width="14" height="9" rx="1" />
      <path d="M7 11 H4 A2 2 0 0 0 2 13 L2 20 A2 2 0 0 0 4 22 H7" />
      <path d="M21 11 H24 A2 2 0 0 1 26 13 L26 20 A2 2 0 0 1 24 22 H21" />
      <rect x="7" y="17" width="14" height="9" rx="1" />
      <line x1="10" y1="20" x2="18" y2="20" />
      <line x1="10" y1="22" x2="15" y2="22" />
      <circle cx="22" cy="15" r="1.2" fill="#14B8A6" />
    </svg>
  ),
  admin: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <circle cx="14" cy="8" r="5" />
      <path d="M4 24 C4 19 9 16 14 16 C19 16 24 19 24 24" />
      <rect x="18" y="18" width="8" height="8" rx="1.5" />
      <line x1="22" y1="18" x2="22" y2="26" />
      <line x1="18" y1="22" x2="26" y2="22" />
    </svg>
  ),
  calendar: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="5" width="22" height="20" rx="2" />
      <line x1="3" y1="11" x2="25" y2="11" />
      <line x1="9" y1="3" x2="9" y2="8" />
      <line x1="19" y1="3" x2="19" y2="8" />
      <rect
        x="7"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        fill="#14B8A6"
        opacity="0.7"
      />
      <rect
        x="12"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        fill="#14B8A6"
        opacity="0.7"
      />
      <rect
        x="17"
        y="14"
        width="4"
        height="4"
        rx="0.5"
        fill="#14B8A6"
        opacity="0.3"
      />
      <rect
        x="7"
        y="19"
        width="4"
        height="4"
        rx="0.5"
        fill="#14B8A6"
        opacity="0.3"
      />
      <rect
        x="12"
        y="19"
        width="4"
        height="4"
        rx="0.5"
        fill="#14B8A6"
        opacity="0.3"
      />
    </svg>
  ),
  billing: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M4 8 C10 4 18 12 24 8" strokeWidth="1.8" />
      <path d="M8 14 C5 18 8 23 14 23 C20 23 23 18 20 14" strokeWidth="1.6" />
      <circle cx="14" cy="15" r="5" fill="#14B8A618" />
      <circle cx="14" cy="15" r="5" />
      <text
        x="14"
        y="19"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#1F2937"
        stroke="none"
      >
        $
      </text>
    </svg>
  ),
  opd: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="2" y="12" width="16" height="12" rx="1.5" />
      <path d="M6 12 L6 9 A4 4 0 0 1 14 9 L14 12" />
      <line x1="10" y1="15" x2="10" y2="21" />
      <line x1="7" y1="18" x2="13" y2="18" />
      <rect x="20" y="6" width="6" height="10" rx="1" />
      <line x1="23" y1="6" x2="23" y2="16" />
      <line x1="20" y1="10" x2="26" y2="10" />
      <path d="M18 22 L22 18" />
    </svg>
  ),
  lab: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M10 3 L10 14 L4 22 A2 2 0 0 0 6 25 L22 25 A2 2 0 0 0 24 22 L18 14 L18 3" />
      <line x1="8" y1="3" x2="20" y2="3" />
      <path d="M6 20 C9 17 12 20 15 17 C18 14 20 18 22 20" strokeWidth="1.4" />
      <circle cx="8" cy="21" r="1.5" fill="#14B8A6" opacity="0.6" />
      <circle cx="13" cy="19" r="1" fill="#14B8A6" opacity="0.4" />
      <circle cx="19" cy="21" r="1.2" fill="#14B8A6" opacity="0.6" />
    </svg>
  ),
  pharmacy: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="6" width="22" height="18" rx="2" />
      <line x1="3" y1="12" x2="25" y2="12" />
      <line x1="10" y1="6" x2="10" y2="24" />
      <ellipse cx="19" cy="18" rx="4" ry="2.5" fill="#14B8A620" />
      <ellipse cx="19" cy="18" rx="4" ry="2.5" />
      <line x1="19" y1="15.5" x2="19" y2="20.5" />
      <circle cx="6.5" cy="9" r="1.2" fill="#14B8A6" opacity="0.6" />
      <line x1="5" y1="17" x2="8" y2="17" />
      <line x1="6.5" y1="15.5" x2="6.5" y2="18.5" />
    </svg>
  ),
  inventory: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="8" y="16" width="12" height="10" rx="1" />
      <rect x="3" y="10" width="9" height="8" rx="1" />
      <rect x="16" y="10" width="9" height="8" rx="1" />
      <rect x="5" y="4" width="18" height="8" rx="1" />
      <line x1="9" y1="4" x2="9" y2="12" />
      <line x1="19" y1="4" x2="19" y2="12" />
      <line x1="14" y1="10" x2="14" y2="18" />
    </svg>
  ),
  payroll: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke="#1F2937"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="5" width="22" height="18" rx="2" />
      <circle cx="14" cy="14" r="5" fill="#14B8A615" />
      <circle cx="14" cy="14" r="5" />
      <text
        x="14"
        y="18"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#1F2937"
        stroke="none"
      >
        $
      </text>
      <line x1="3" y1="10" x2="25" y2="10" />
      <line x1="8" y1="5" x2="8" y2="10" />
      <line x1="20" y1="5" x2="20" y2="10" />
    </svg>
  ),
};

const leftData = [
  { label: ["Financial", "Account"], key: "financial" },
  { label: ["Security", "Control"], key: "security" },
  { label: ["MIS"], key: "mis" },
  { label: ["Print", "Receipt"], key: "print" },
  { label: ["Administration", "& Monitoring"], key: "admin" },
  { label: ["Appointment &", "Scheduling"], key: "calendar" },
];

const rightData = [
  { label: ["Cash/Billing", "Center"], key: "billing" },
  { label: ["O.P.D &", "L.P.D Center"], key: "opd" },
  { label: ["Laboratory"], key: "lab" },
  { label: ["Pharmacy &", "Medicine"], key: "pharmacy" },
  { label: ["Inventory &", "Stock"], key: "inventory" },
  { label: ["Payroll", "Management"], key: "payroll" },
];

function Pill({ lines, side }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        border: "1.5px solid #ddd",
        padding: "9px 14px",
        fontSize: 11.5,
        fontWeight: 600,
        color: "#1a1a1a",
        lineHeight: 1.35,
        textAlign: "center",
        borderRadius: side === "left" ? "6px 0 0 6px" : "0 6px 6px 0",
      }}
    >
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  );
}

function ArrowRight() {
  return (
    <div
      style={{
        position: "relative",
        width: 0,
        height: 0,
        flexShrink: 0,
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        borderLeft: "14px solid #ddd",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -17,
          top: -19,
          width: 0,
          height: 0,
          borderTop: "19px solid transparent",
          borderBottom: "19px solid transparent",
          borderLeft: "13px solid #fff",
        }}
      />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div
      style={{
        position: "relative",
        width: 0,
        height: 0,
        flexShrink: 0,
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        borderRight: "14px solid #ddd",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -17,
          top: -19,
          width: 0,
          height: 0,
          borderTop: "19px solid transparent",
          borderBottom: "19px solid transparent",
          borderRight: "13px solid #fff",
        }}
      />
    </div>
  );
}

function Circle({ iconKey }) {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        flexShrink: 0,
        background: "linear-gradient(145deg, #14B8A6, #06B6D4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(20,184,166,0.35)",
        border: "2.5px solid #fff",
      }}
    >
      {icons[iconKey]}
    </div>
  );
}

function Row({ item, side }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: side === "right" ? "row-reverse" : "row",
      }}
    >
      <Pill lines={item.label} side={side} />
      {side === "left" ? <ArrowRight /> : <ArrowLeft />}
      <Circle iconKey={item.key} />
    </div>
  );
}

export default function HMSCrossLayout() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');`}</style>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
          Hospital Management Ecosystem
        </h2>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "28px 20px",
          fontFamily: "'Outfit', sans-serif",
          borderRadius: 16,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 480,
          gap: 8,
        }}
      >
        {/* Left column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 270,
          }}
        >
          {leftData.map((item) => (
            <Row key={item.key} item={item} side="left" />
          ))}
        </div>

        {/* Center */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            minWidth: 200,
            padding: "0 12px",
          }}
        >
          {/* Cross */}
          <div
            style={{
              position: "relative",
              width: 80,
              height: 80,
              marginBottom: 4,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                width: "100%",
                height: "32%",
                background: "#ccc",
                borderRadius: 5,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                height: "100%",
                width: "32%",
                background: "#ccc",
                borderRadius: 5,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "#111",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            HMS
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#555",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Hospital Management
            <br />
            System
          </div>
        </div>

        {/* Right column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 270,
          }}
        >
          {rightData.map((item) => (
            <Row key={item.key} item={item} side="right" />
          ))}
        </div>
      </div>
    </>
  );
}
