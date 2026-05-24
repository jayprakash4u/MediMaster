"use client";

import { useEffect, useRef } from "react";

const features = [
  "Compliance-focused digital systems",
  "Predictable outcomes with transparent pricing",
  "Built for care teams and clinical workflows",
  "Dedicated specialists in healthcare technology",
];

export default function CompanyAbout() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const featureRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const st = { trigger: sectionRef.current, start: "top 80%" };

        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -80, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: st,
          },
        );

        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: st,
          },
        );

        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            delay: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: st,
          },
        );

        featureRefs.current.forEach((el, index) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: 0.4 + index * 0.12,
              ease: "power3.out",
              scrollTrigger: st,
            },
          );
        });

        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.6,
            ease: "power3.out",
            scrollTrigger: st,
          },
        );
      }, sectionRef);
    };

    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 py-24 px-6 lg:px-12"
      style={{ fontFamily: "'DM Sans', 'Sora', sans-serif" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12)_0,_transparent_36%)]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 -translate-x-1/2 translate-y-1/4 rounded-full bg-gradient-to-br from-teal-300/20 to-cyan-400/5 pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div ref={contentRef} className="space-y-8">
          <div className="inline-flex items-center gap-3">
            <div className="h-[2px] w-10 rounded-full bg-teal-400" />
            <p className="text-xs uppercase tracking-[0.28em] text-teal-500">
              Company About
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
              Healthcare technology built for speed, precision, and trusted
              outcomes.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              We partner with clinics, labs, and care networks to deliver
              scalable digital platforms that improve patient flows, operational
              efficiency, and decision transparency.
            </p>
          </div>

          <div
            ref={badgeRef}
            className="inline-flex items-center gap-4 rounded-full border border-teal-200/80 bg-white/90 px-5 py-3 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20">
              <span className="text-lg font-black">25+</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Years experience
              </p>
              <p className="text-sm text-slate-500">
                Delivering healthcare-grade digital transformation since day
                one.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature}
                ref={(el) => (featureRefs.current[index] = el)}
                className="rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3 text-slate-800">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  <p className="text-sm font-medium text-slate-700">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              ref={buttonRef}
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-teal-500/20 transition hover:bg-teal-400"
            >
              Get a quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Learn more
            </a>
          </div>
        </div>

        <div ref={imageRef} className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
              alt="Senior healthcare professional"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute -right-8 top-10 hidden h-64 w-64 rounded-[2.5rem] bg-gradient-to-br from-teal-400/20 to-cyan-400/10 shadow-2xl shadow-teal-400/20 lg:block" />
          <div className="absolute left-8 top-32 h-40 w-40 rounded-[2rem] bg-white/80 ring-1 ring-slate-200/90 backdrop-blur-xl shadow-xl" />
        </div>
      </div>
    </section>
  );
}
