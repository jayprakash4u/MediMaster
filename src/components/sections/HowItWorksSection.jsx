"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "60px 20px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 900,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          <Image
            src="/step image.png"
            alt="How Hospital Management Software Works"
            width={900}
            height={420}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
