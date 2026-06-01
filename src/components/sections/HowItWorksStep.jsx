"use client";

import Image from "next/image";

export default function HowItWorksStep() {
  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <Image
          src="/step image.jpg"
          alt="How Hospital Management Software Works"
          width={1000}
          height={500}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority
        />
      </div>
    </section>
  );
}
