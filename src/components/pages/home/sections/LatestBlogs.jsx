"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { CardMedia, CardMediaBody, CardMediaImage } from "@/components/ui/Card";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

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

export default function LatestBlogs() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const total = blogs.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(total - visibleCards, 0);
  const safeCurrent = Math.min(current, maxIndex);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="overflow-hidden bg-navy-950 px-6 py-16 md:px-12">
      <SectionHeader
        eyebrow="Insights"
        title="Stay Updated With Our Latest"
        highlight="Blogs"
        description="Our blogs offers in-depth insight, expert opinions, and the latest innovations shaping the future of healthcare."
        theme="dark"
        className="mb-10"
      />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-0">
        <button
          onClick={prev}
          disabled={safeCurrent === 0}
          aria-label="Previous"
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 text-3xl font-bold text-white transition-opacity hover:opacity-70 disabled:opacity-20 md:-left-10"
        >
          ‹‹
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${safeCurrent} * (100% / ${visibleCards} + 24px - 24px / ${visibleCards})))`,
            }}
          >
            {blogs.map((blog) => (
              <CardMedia
                key={blog.id}
                className="w-full flex-shrink-0 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
              >
                <CardMediaImage className="h-48 sm:h-56 sm:aspect-auto">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xxs font-bold uppercase tracking-widest text-slate-800 shadow-sm">
                    {blog.tag}
                  </span>
                </CardMediaImage>

                <CardMediaBody className="gap-4">
                  <p className={`${COMPONENT_STYLES.caption} ${TEXT_COLOR.teal} tracking-wide`}>
                    {blog.date} · {blog.readTime}
                  </p>

                  <h3 className={`${HEADING.h4} uppercase ${TEXT_COLOR.teal}`}>{blog.title}</h3>

                  <p className={`flex-1 ${BODY.small} ${TEXT_COLOR.muted}`}>{blog.excerpt}</p>

                  <Link
                    href={blog.href}
                    className={`mt-auto inline-flex items-center gap-1 ${COMPONENT_STYLES.linkAccent} group`}
                  >
                    Read More
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
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
                </CardMediaBody>
              </CardMedia>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={safeCurrent === maxIndex}
          aria-label="Next"
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 text-3xl font-bold text-white transition-opacity hover:opacity-70 disabled:opacity-20 md:-right-10"
        >
          ››
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
              i === safeCurrent ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
