"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const floatingIcons = [
  {
    name: "Google Analytics",
    delay: 0,
    top: "60%",
    left: "-8%",
    size: 64,
    bg: "#F15A22",
    textColor: "#fff",
    label: "GA",
    shape: "pill",
  },
  {
    name: "Google Search",
    delay: 0.4,
    top: "36%",
    left: "-2%",
    size: 48,
    bg: "#4285F4",
    textColor: "#fff",
    label: "G",
    shape: "square",
  },
  {
    name: "Keyword Tool",
    delay: 0.8,
    top: "2%",
    left: "28%",
    size: 52,
    bg: "#10B981",
    textColor: "#fff",
    label: "KW",
    shape: "circle",
  },
  {
    name: "Ahrefs",
    delay: 0.2,
    top: "4%",
    left: "58%",
    size: 52,
    bg: "#0074D9",
    textColor: "#fff",
    label: "Ah",
    shape: "circle",
  },
  {
    name: "SEMrush",
    delay: 1.0,
    top: "16%",
    left: "92%",
    size: 52,
    bg: "#FF6B00",
    textColor: "#fff",
    label: "SE",
    shape: "circle",
  },
  {
    name: "Moz",
    delay: 0.6,
    top: "38%",
    left: "96%",
    size: 52,
    bg: "#FF9900",
    textColor: "#fff",
    label: "Moz",
    shape: "circle",
  },
  {
    name: "Yoast",
    delay: 1.2,
    top: "58%",
    left: "90%",
    size: 56,
    bg: "#151515",
    textColor: "#fff",
    label: "Yoast",
    shape: "pill-sm",
  },
  {
    name: "Screaming Frog",
    delay: 0.3,
    top: "14%",
    left: "44%",
    size: 50,
    bg: "#2271B3",
    textColor: "#fff",
    label: "SF",
    shape: "circle",
  },
  {
    name: "Google My Business",
    delay: 0.9,
    top: "72%",
    left: "80%",
    size: 48,
    bg: "#FFFFFF",
    textColor: "#4285F4",
    label: "GMB",
    shape: "square",
  },
];

function FloatingIcon({ icon, index }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: -12,
      duration: 2.2 + index * 0.15,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: icon.delay,
    });
  }, [icon.delay, index]);

  const isSquare = icon.shape === "square";
  const isPill = icon.shape === "pill";
  const isPillSm = icon.shape === "pill-sm";

  const baseStyle = {
    position: "absolute",
    top: icon.top,
    left: icon.left,
    zIndex: 20,
    background: icon.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
    cursor: "default",
    userSelect: "none",
  };

  if (isPill) {
    Object.assign(baseStyle, {
      borderRadius: "50px",
      padding: "10px 18px",
      gap: "6px",
      flexDirection: "row",
      minWidth: "90px",
    });
  } else if (isPillSm) {
    Object.assign(baseStyle, {
      borderRadius: "50px",
      padding: "8px 14px",
      gap: "5px",
      flexDirection: "column",
      minWidth: "64px",
    });
  } else if (isSquare) {
    Object.assign(baseStyle, {
      borderRadius: "12px",
      width: icon.size,
      height: icon.size,
    });
  } else {
    Object.assign(baseStyle, {
      borderRadius: "50%",
      width: icon.size,
      height: icon.size,
    });
  }

  return (
    <div ref={ref} style={baseStyle} title={icon.name}>
      {isPill ? (
        <>
          <span
            style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              color: icon.textColor,
              fontFamily: "sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {icon.label}
          </span>
          <span
            style={{
              display: "block",
              width: 28,
              height: 2,
              borderRadius: 2,
              background: icon.textColor,
              opacity: 0.5,
              marginLeft: 2,
            }}
          />
        </>
      ) : isPillSm ? (
        <span
          style={{
            fontSize: "0.625rem",
            fontWeight: 700,
            color: icon.textColor,
            fontFamily: "sans-serif",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          {icon.label}
        </span>
      ) : (
        <span
          style={{
            fontSize: isSquare ? "1rem" : "0.875rem",
            fontWeight: 700,
            color: icon.textColor,
            fontFamily: "sans-serif",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          {icon.label}
        </span>
      )}
    </div>
  );
}

export default function SEOHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, rotation: -14 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.1, ease: "back.out(1.7)", delay: 0.25 }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.45 }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.92 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.4 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18)_0,_transparent_38%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.14)_0,_transparent_45%)]" />

      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div ref={contentRef} className="flex-1 max-w-2xl text-center lg:text-left">
            <div
              ref={badgeRef}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal-300/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] mb-6"
            >
              <span className="text-3xl font-black text-teal-300">S</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
                    <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="22" cy="5" r="2" fill="#0D9488" />
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400">
                  Services
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Search Engine <span className="text-teal-400">Optimization</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
                Boost your website&apos;s visibility in search results with our comprehensive SEO
                strategies. From keyword research and content optimization to technical SEO audits
                and link building, we help you rank higher and drive organic traffic to your
                business.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-xl shadow-teal-400/20 transition hover:bg-teal-300"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                All Services
              </Link>
            </div>
          </div>

          <div ref={imageRef} className="flex-1 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              style={{ aspectRatio: "1 / 1" }}
            >
              <div
                className="absolute inset-[10%] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/services/shared/website-development-hero.png"
                  alt="SEO Expert"
                  width={420}
                  height={420}
                  className="w-[60%] sm:w-[70%] md:w-[80%] lg:w-[85%] h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="hidden md:block">
                {floatingIcons.map((icon, i) => (
                  <FloatingIcon key={icon.name} icon={icon} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <path
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            fill="#FBFCFD"
          />
        </svg>
      </div>
    </section>
  );
}
