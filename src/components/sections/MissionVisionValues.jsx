"use client";

import { useEffect, useRef } from "react";

const items = [
  {
    id: "vision",
    label: "Vision",
    accent: "#14B8A6",
    accentDark: "#0D9488",
    glow: "rgba(20,184,166,0.35)",
    desc: "We see a future where intelligent technology makes financial clarity universally accessible — empowering every individual and enterprise to make decisions with confidence, speed, and precision.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="28" r="10" />
        <circle cx="34" cy="28" r="10" />
        <path d="M24 28h-10M24 28h10" />
        <path d="M14 18V14M34 18V14" />
        <path d="M14 14h20" />
        <circle
          cx="14"
          cy="28"
          r="5"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
        <circle
          cx="34"
          cy="28"
          r="5"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "mission",
    label: "Mission",
    accent: "#3B66E2",
    accentDark: "#254DC8",
    glow: "rgba(59,102,226,0.35)",
    desc: "To dismantle financial complexity and replace it with clarity — delivering intelligent, flexible services that place real people at the center of every product decision we make.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 6a12 12 0 0 1 8 20.9V32H16v-5.1A12 12 0 0 1 24 6z" />
        <path d="M16 36h16M18 40h12" />
        <line x1="24" y1="32" x2="24" y2="38" />
      </svg>
    ),
  },
  {
    id: "goals",
    label: "Goals",
    accent: "#06B6D4",
    accentDark: "#0891B2",
    glow: "rgba(6,182,212,0.35)",
    desc: "Grow a trusted ecosystem of 50,000+ businesses by 2027. Build infrastructure that scales across borders, currencies, and industries — without ever losing the human touch.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="2" fill="white" />
        <line x1="24" y1="4" x2="24" y2="12" />
        <line x1="24" y1="36" x2="24" y2="44" />
        <line x1="4" y1="24" x2="12" y2="24" />
        <line x1="36" y1="24" x2="44" y2="24" />
      </svg>
    ),
  },
];

export default function MissionVisionValues() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const st = { trigger: sectionRef.current, start: "top 80%" };

        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: st,
          },
        );

        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              delay: 0.2 + index * 0.12,
              ease: "power3.out",
              scrollTrigger: st,
            },
          );
        });
      }, sectionRef);
    };
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 px-6 lg:px-12"
      style={{ fontFamily: "'DM Sans', 'Sora', sans-serif" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16)_0,_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-500">
            What we stand for
          </p>
          <h2
            ref={titleRef}
            className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            Vision, mission, and growth goals with clear direction.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Our approach is built around scalable strategy, dependable
            execution, and measurable outcomes for healthcare and enterprise
            clients.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-45px_rgba(15,23,42,0.18)]"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${item.accent} 0%, ${item.accentDark} 100%)`,
                }}
              >
                {item.icon}
              </div>
              <div className="mt-6 space-y-4">
                <h3
                  className="text-2xl font-black text-slate-950"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  →
                </span>
                Learn more
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
