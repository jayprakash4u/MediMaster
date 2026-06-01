"use client";

import Image from "next/image";

const features = [
  "Cloud-based Hospital Management System",
  "Multi-branch pharmacy & lab integration",
  "Fully Responsive Healthcare Platform",
  "Real-time patient reporting & analytics",
  "Automated appointment scheduling",
];

export default function WelcomeSection() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 24px",
      gap: 64,
      maxWidth: 1200,
      margin: "0 auto",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* LEFT — Text Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h2 style={{
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          lineHeight: 1.4,
          marginBottom: 24,
          display: "inline-block",
          backgroundColor: "#14B8A6",
          padding: "8px 20px",
          borderRadius: 6,
        }}>
          Welcome To Medi Master
        </h2>

        <p style={{
          fontSize: 14,
          lineHeight: 1.85,
          color: "#64748B",
          marginBottom: 32,
          maxWidth: 460,
        }}>
          Precision-engineered healthcare management systems designed for modern hospitals, pathology labs, pharmacies, and clinics. Experience seamless operations with cloud-based technology that scales with your practice.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {features.map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="10" cy="10" r="9" stroke="#14B8A6" strokeWidth="1.5" />
                <path d="M6 10.5L8.5 13L14 7.5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: 14, color: "#475569" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — Image */}
      <div style={{
        width: 520,
        height: 420,
        flexShrink: 0,
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        background: "#F1F5F9",
      }}>
        <Image
          src="/medimasterdescription.png"
          alt="MediMaster Healthcare Dashboard"
          fill
          className="object-cover"
          sizes="520px"
          priority
        />
      </div>
    </section>
  );
}
