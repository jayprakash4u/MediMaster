"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "This HMS transformed how we manage patient records, billing, and appointments. Our daily operations have never been smoother.",
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer, City Hospital",
  },
  {
    quote: "The pharmacy and inventory modules alone saved us countless hours. Real-time stock tracking is a game changer.",
    name: "Rajesh Sharma",
    role: "Hospital Administrator, Metro Care",
  },
  {
    quote: "Implementation was seamless, and the support team is outstanding. Our staff adapted within days, not weeks.",
    name: "Emily Watson",
    role: "IT Director, Sunrise Medical",
  },
];

function TestimonialCard({ testimonial, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const timeout = setTimeout(
      () =>
        el.classList.add(
          "opacity-100",
          "translate-y-0",
          "transition-all",
          "duration-700",
          "ease-out"
        ),
      index * 150
    );
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm opacity-0 translate-y-4"
    >
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="h-4 w-4 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118l-3.37-2.448c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-600 md:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy-950">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhatOurUsersSay() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-navy-950 md:text-4xl">
            What Our Users Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Trusted by hospital administrators, doctors, and healthcare teams across the country.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} testimonial={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
