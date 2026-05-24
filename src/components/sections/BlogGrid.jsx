"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
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
    image: "blog-1",
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
    image: "blog-2",
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
    image: "blog-3",
    href: "/blog/ai-diagnostics-rural-healthcare",
  },
  {
    id: 4,
    title: "Building a Patient Portal That Actually Gets Used: UX Best Practices",
    excerpt:
      "A patient portal is only valuable if people use it. Learn the UX principles and design patterns that drive adoption, engagement, and better health outcomes.",
    date: "May 28, 2026",
    author: "Aisha Johnson",
    tag: "Patient Experience",
    readTime: "5 min read",
    image: "blog-4",
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
    image: "blog-5",
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
    image: "blog-6",
    href: "/blog/medical-seo-2026",
  },
];

const PLACEHOLDER_COLORS = [
  "linear-gradient(135deg, #14B8A6 0%, #0891B2 100%)",
  "linear-gradient(135deg, #0F1F4D 0%, #3B66E2 100%)",
  "linear-gradient(135deg, #0D9488 0%, #06B6D4 100%)",
  "linear-gradient(135deg, #155E75 0%, #14B8A6 100%)",
  "linear-gradient(135deg, #1A3BA8 0%, #3B66E2 100%)",
  "linear-gradient(135deg, #084C61 0%, #14B8A6 100%)",
];

export default function BlogGrid() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardTopsRef = useRef([]);
  const cardExcerptsRef = useRef([]);
  const cardMetaRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge fade + slide down
      gsap.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%" },
        },
      );

      // Headline wipe + slide up
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
        },
      );

      // Description fade in
      gsap.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        },
      );

      // Divider grow
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      // Blog cards staggered entrance — image area
      gsap.fromTo(
        cardTopsRef.current.filter(Boolean),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );

      // Title lines
      gsap.fromTo(
        cardTopsRef.current.filter(Boolean),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      // Excerpts
      gsap.fromTo(
        cardExcerptsRef.current.filter(Boolean),
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.25,
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        },
      );

      // Meta rows (date / author / read-time)
      gsap.fromTo(
        cardMetaRef.current.filter(Boolean),
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.35,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );

      // Whole cards slight lift on hover
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -6, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Badge ── */}
        <div ref={badgeRef} className="mb-4">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(15,31,77,0.05)",
              border: "1px solid rgba(15,31,77,0.12)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span
              className="text-[11px] font-black uppercase tracking-[0.35em]"
              style={{ color: "#0F1F4D" }}
            >
              Our Blog
            </span>
          </div>
        </div>

        {/* ── Heading ── */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2"
        >
          Insights from the{" "}
          <span className="text-teal-600 font-bold">Healthcare Tech Frontline</span>
        </h2>

        {/* ── Description ── */}
        <p
          ref={descRef}
          className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Thought leadership from engineers, clinicians, and strategists building
          the future of healthcare technology. Explore guides, case studies, and industry analysis.
        </p>

        {/* Glowing accent line */}
        <div className="flex items-center gap-3 justify-center mt-6 mb-12 md:mb-16">
          <div
            ref={dividerRef}
            className="h-0.5 w-14 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,transparent,#14B8A6,transparent)",
            }}
          />
        </div>

        {/* ── Blog Card Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              ref={(el) => {
                cardsRef.current[index] = el;
                cardTopsRef.current[index] = el?.querySelector(".card-top");
                cardExcerptsRef.current[index] = el?.querySelector(
                  ".card-excerpt",
                );
                cardMetaRef.current[index] = el?.querySelector(".card-meta");
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-300"
            >
              {/* Image / Gradient placeholder */}
              <div
                className="card-top relative h-48 md:h-52 flex items-center justify-center overflow-hidden"
                style={{ background: PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length] }}
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10" />

                {/* Category tag */}
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full border border-white/25">
                  {post.tag}
                </span>

                {/* Subtle grid lines */}
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg,white 0,white 1px,transparent 1px,transparent 20px), repeating-linear-gradient(0deg,white 0,white 1px,transparent 1px,transparent 20px)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                {/* Date + read time */}
                <p className="text-[11px] font-medium text-teal-600 tracking-wide mb-3 card-meta">
                  {post.date} · {post.readTime}
                </p>

                {/* Title */}
                <h3 className="card-top text-lg md:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-teal-700 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="card-excerpt text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author + Read More */}
                <div className="card-meta flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-600">
                    {post.author}
                  </span>
                  <Link
                    href={post.href}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
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
      </div>
    </section>
  );
}
