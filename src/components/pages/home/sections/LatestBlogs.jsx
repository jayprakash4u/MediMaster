"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/blog/10 Key Features Every Modern Healthcare ERP Should Have.jpg",
    title: "10 Key Features Every Modern Healthcare ERP Should Have",
    excerpt:
      "From real-time inventory management to HIPAA-compliant patient data handling, discover the must-have features that make or break a healthcare management system in 2026.",
    href: "/blog/10-key-features-healthcare-erp",
    date: "Jun 12, 2026",
    author: "Dr. Sarah Chen",
    tag: "Healthcare Tech",
    readTime: "6 min read",
  },
  {
    id: 2,
    image: "/blog/Telemedicine Compliance.jpg",
    title: "Telemedicine Compliance: A Complete Guide to Regulatory Standards",
    excerpt:
      "Navigate the complex landscape of telemedicine regulations across ACO, CMS, and state-level mandates with our comprehensive compliance checklist.",
    href: "/blog/telemedicine-compliance-guide",
    date: "Jun 8, 2026",
    author: "Marcus Rivera",
    tag: "Compliance",
    readTime: "8 min read",
  },
  {
    id: 3,
    image: "/blog/How AI-Powered Diagnostics Are Transforming Rural Healthcare.jpg",
    title: "How AI-Powered Diagnostics Are Transforming Rural Healthcare",
    excerpt:
      "Artificial intelligence is breaking down geographic barriers — see how remote diagnostic tools are delivering specialist-level care to underserved communities.",
    href: "/blog/ai-diagnostics-rural-healthcare",
    date: "Jun 3, 2026",
    author: "Dr. Priya Nair",
    tag: "Innovation",
    readTime: "7 min read",
  },
  {
    id: 4,
    image: "/blog/Building a Patient Portal That Actually Gets Used UX Best.jpg",
    title: "Building a Patient Portal That Actually Gets Used: UX Best Practices",
    excerpt:
      "A patient portal is only valuable if people use it. Learn the UX principles and design patterns that drive adoption, engagement, and better health outcomes.",
    href: "/blog/patient-portal-ux-best-practices",
    date: "May 28, 2026",
    author: "Aisha Johnson",
    tag: "Patient Experience",
    readTime: "5 min read",
  },
  {
    id: 5,
    image: "/blog/Pharmacy Management Systems What to Expect After.jpg",
    title: "Pharmacy Management Systems: What to Expect After Implementation",
    excerpt:
      "Deployment is just day one. Here is a practical roadmap for rolling out a pharmacy management system, training staff, and measuring real-world impact.",
    href: "/blog/pharmacy-management-after-implementation",
    date: "May 21, 2026",
    author: "Dr. Sarah Chen",
    tag: "Pharmacy Tech",
    readTime: "9 min read",
  },
  {
    id: 6,
    image: "/blog/Medical SEOWhy Your Practice Is Invisible Without It.jpg",
    title: "Medical SEO: Why Your Practice Is Invisible Without It",
    excerpt:
      "Healthcare consumers start their search for providers on Google — but the rules have changed. Here is how to earn visibility in 2026's evolving search landscape.",
    href: "/blog/medical-seo-2026",
    date: "May 15, 2026",
    author: "Kai Tanaka",
    tag: "Digital Marketing",
    readTime: "6 min read",
  },
];

const VISIBLE = 3;

export default function LatestBlogs() {
  const [current, setCurrent] = useState(0);
  const total = blogs.length;
  const maxIndex = Math.max(total - VISIBLE, 0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="bg-navy-950 py-16 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xxs sm:text-xs font-semibold text-teal-600 uppercase tracking-widest mb-2">
          Insights
        </p>
        <h2
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Stay Updated With Our Latest <span className="text-teal-400">Blogs</span>
        </h2>
        <p className="mt-4 text-white/80 text-base max-w-2xl mx-auto">
          Our blogs offers in-depth insight, expert opinions, and the latest
          innovations shaping the future of healthcare.
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous"
          className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold disabled:opacity-30 transition-opacity hover:opacity-70"
        >
          ‹‹
        </button>

        {/* Cards viewport */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 24px / ${VISIBLE})))`,
            }}
          >
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="flex-shrink-0 w-[calc((100%-48px)/3)] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
              >
                {/* Image area */}
                <div className="relative w-full h-56 bg-gray-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 text-xxs font-bold uppercase tracking-widest bg-white/90 text-slate-800 px-3 py-1 rounded-full shadow-sm">
                    {blog.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <p className="text-xs font-medium text-teal-600 tracking-wide mb-1">
                    {blog.date} · {blog.readTime}
                  </p>

                  <h3 className="text-teal-700 font-bold text-sm md:text-base uppercase leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={blog.href}
                    className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors mt-auto inline-flex items-center gap-1 group"
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={current === maxIndex}
          aria-label="Next"
          className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold disabled:opacity-30 transition-opacity hover:opacity-70"
        >
          ››
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
