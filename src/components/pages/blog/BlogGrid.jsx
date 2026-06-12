"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Key Features Every Modern Healthcare ERP Should Have",
    excerpt:
      "From real-time inventory management to HIPAA-compliant patient data handling, discover the must-have features that make or break a healthcare management system in 2026.",
    date: "Jun 12, 2026",
    author: "Dr. Sarah Chen",
    tag: "Healthcare Tech",
    readTime: "6 min read",
    image: "/blog/10 Key Features Every Modern Healthcare ERP Should Have.jpg",
    href: "/blog/10-key-features-healthcare-erp",
  },
  {
    id: 2,
    title: "Telemedicine Compliance: A Complete Guide to Regulatory Standards",
    excerpt:
      "Navigate the complex landscape of telemedicine regulations across ACO, CMS, and state-level mandates with our comprehensive compliance checklist.",
    date: "Jun 8, 2026",
    author: "Marcus Rivera",
    tag: "Compliance",
    readTime: "8 min read",
    image: "/blog/Telemedicine Compliance.jpg",
    href: "/blog/telemedicine-compliance-guide",
  },
  {
    id: 3,
    title: "How AI-Powered Diagnostics Are Transforming Rural Healthcare",
    excerpt:
      "Artificial intelligence is breaking down geographic barriers — see how remote diagnostic tools are delivering specialist-level care to underserved communities.",
    date: "Jun 3, 2026",
    author: "Dr. Priya Nair",
    tag: "Innovation",
    readTime: "7 min read",
    image:
      "/blog/How AI-Powered Diagnostics Are Transforming Rural Healthcare.jpg",
    href: "/blog/ai-diagnostics-rural-healthcare",
  },
  {
    id: 4,
    title:
      "Building a Patient Portal That Actually Gets Used: UX Best Practices",
    excerpt:
      "A patient portal is only valuable if people use it. Learn the UX principles and design patterns that drive adoption, engagement, and better health outcomes.",
    date: "May 28, 2026",
    author: "Aisha Johnson",
    tag: "Patient Experience",
    readTime: "5 min read",
    image:
      "/blog/Building a Patient Portal That Actually Gets Used UX Best.jpg",
    href: "/blog/patient-portal-ux-best-practices",
  },
  {
    id: 5,
    title: "Pharmacy Management Systems: What to Expect After Implementation",
    excerpt:
      "Deployment is just day one. Here is a practical roadmap for rolling out a pharmacy management system, training staff, and measuring real-world impact.",
    date: "May 21, 2026",
    author: "Dr. Sarah Chen",
    tag: "Pharmacy Tech",
    readTime: "9 min read",
    image: "/blog/Pharmacy Management Systems What to Expect After.jpg",
    href: "/blog/pharmacy-management-after-implementation",
  },
  {
    id: 6,
    title: "Medical SEO: Why Your Practice Is Invisible Without It",
    excerpt:
      "Healthcare consumers start their search for providers on Google — but the rules have changed. Here is how to earn visibility in 2026's evolving search landscape.",
    date: "May 15, 2026",
    author: "Kai Tanaka",
    tag: "Digital Marketing",
    readTime: "6 min read",
    image: "/blog/Medical SEOWhy Your Practice Is Invisible Without It.jpg",
    href: "/blog/medical-seo-2026",
  },
];

export default function BlogGrid() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        },
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          },
        );

        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -6, duration: 0.3, ease: "power2.out" }),
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.35, ease: "power2.out" }),
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headingRef} className="mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 uppercase block">
            Our Case Studies
          </span>
          <h2
            className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Explore Our Latest{" "}
            <span className="text-teal-600">Articles</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal max-w-xl">
            Discover expert insights, practical guides, and the latest trends in technology, healthcare software, and digital innovation.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 md:h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 text-xxs font-bold uppercase tracking-widest bg-white/90 text-slate-800 px-3 py-1 rounded-full shadow-sm">
                  {post.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-xs font-medium text-teal-600 tracking-wide mb-2">
                  {post.date} · {post.readTime}
                </p>

                <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-600">
                    {post.author}
                  </span>
                  <Link
                    href={post.href}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1 group"
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
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
