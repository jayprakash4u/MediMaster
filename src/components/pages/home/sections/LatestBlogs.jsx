"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MedicalSectionBackdrop from "@/components/pages/home/shared/MedicalSectionBackdrop";
import { CardMedia, CardMediaBody, CardMediaImage } from "@/components/ui/Card";
import { COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

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
  const [visibleCards, setVisibleCards] = useState(2);
  const [gapPx, setGapPx] = useState(12);
  const total = blogs.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCards(2);
        setGapPx(window.innerWidth < 640 ? 12 : 24);
      } else {
        setVisibleCards(3);
        setGapPx(24);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrent((value) => Math.min(value, Math.max(total - visibleCards, 0)));
  }, [visibleCards, total]);

  const maxIndex = Math.max(total - visibleCards, 0);
  const safeCurrent = Math.min(current, maxIndex);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="relative overflow-hidden bg-navy-950 px-3 py-12 sm:px-6 sm:py-16 md:px-12">
      <MedicalSectionBackdrop variant="dark" />
      <div className="hero-page__grid opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Healthcare Insights"
          title="Stay Updated With Our Latest"
          highlight="Blogs"
          description="Expert articles on healthcare software, compliance, patient experience, and digital transformation for medical teams."
          theme="dark"
          className="mb-8 sm:mb-10"
        />

        <div className="relative px-1 sm:px-0">
          <button
            type="button"
            onClick={prev}
            disabled={safeCurrent === 0}
            aria-label="Previous blogs"
            className="absolute -left-1 top-[42%] z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-navy-900/80 text-white transition-opacity hover:bg-navy-800 disabled:opacity-30 sm:-left-2 sm:h-9 sm:w-9 md:-left-10"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-500 ease-in-out sm:gap-6"
              style={{
                transform: `translateX(calc(-${safeCurrent} * (100% / ${visibleCards} + ${gapPx}px - ${gapPx}px / ${visibleCards})))`,
              }}
            >
              {blogs.map((blog) => (
                <CardMedia
                  key={blog.id}
                  className="w-[calc((100%-0.75rem)/2)] flex-shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                >
                  <CardMediaImage className="h-36 sm:h-48 sm:aspect-auto lg:h-56">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-800 shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xxs sm:tracking-widest">
                      {blog.tag}
                    </span>
                  </CardMediaImage>

                  <CardMediaBody className="gap-2 p-4 sm:gap-4 sm:p-5">
                    <p
                      className={`${COMPONENT_STYLES.caption} text-[10px] ${TEXT_COLOR.teal} tracking-wide sm:text-xs`}
                    >
                      {blog.date} · {blog.readTime}
                    </p>

                    <h3 className="line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:text-base">
                      {blog.title}
                    </h3>

                    <p
                      className={`hidden flex-1 line-clamp-2 text-[10px] leading-snug text-slate-500 sm:block sm:text-sm sm:leading-relaxed`}
                    >
                      {blog.excerpt}
                    </p>

                    <Link
                      href={blog.href}
                      className={`mt-auto inline-flex items-center gap-1 text-[10px] font-semibold text-teal-600 transition-colors hover:text-teal-700 sm:text-xs`}
                    >
                      Read More
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
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
            type="button"
            onClick={next}
            disabled={safeCurrent === maxIndex}
            aria-label="Next blogs"
            className="absolute -right-1 top-[42%] z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-navy-900/80 text-white transition-opacity hover:bg-navy-800 disabled:opacity-30 sm:-right-2 sm:h-9 sm:w-9 md:-right-10"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors duration-200 sm:h-2.5 sm:w-2.5 ${
                i === safeCurrent ? "bg-teal-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
