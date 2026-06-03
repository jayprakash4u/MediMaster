"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const FEATURED_POST = {
  title: "Exploring Future Renewable Energy Innovations",
  date: "December 11, 2023",
  excerpt:
    "Embark on a journey with us as we delve into the realms of innovation, share insights, and explore the transformative power of technology. Our...",
  image: "/blog/featured.jpg",
  href: "/blog/exploring-future-renewable-energy",
};

const SIDEBAR_POSTS = [
  {
    id: 1,
    title: "From Ideas to Impact in a Startup's Journey",
    date: "November 20, 2023",
    image: "/blog/startup-journey.jpg",
    href: "/blog/from-ideas-to-impact",
  },
  {
    id: 2,
    title: "Navigating the Tech Landscape with Insights",
    date: "November 20, 2023",
    image: "/blog/tech-landscape.jpg",
    href: "/blog/navigating-tech-landscape",
  },
  {
    id: 3,
    title: "Behind the Scenes of Crafting Our Startup",
    date: "November 20, 2023",
    image: "/blog/behind-scenes.jpg",
    href: "/blog/behind-the-scenes",
  },
];

export default function BlogHero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const featuredRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.3 },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white pt-10 pb-0 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Our Insightful{" "}
            <span className="text-teal-600 underline underline-offset-4">
              Blog
            </span>
          </h1>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing vipu elit. Ut
            spelataras tellus luctus neulamcorper mattis, pibus leo dotu.
          </p>
        </div>

        {/* Featured + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          {/* Featured Post */}
          <Link
            ref={featuredRef}
            href={FEATURED_POST.href}
            className="group block"
          >
            <div className="relative rounded-xl overflow-hidden h-[340px] md:h-[400px]">
              <Image
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-xs text-white/70 flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {FEATURED_POST.date}
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mt-4 pb-6 border-b border-slate-100">
              {FEATURED_POST.excerpt}
            </p>
          </Link>

          {/* Sidebar Posts */}
          <div
            ref={sidebarRef}
            className="flex flex-col divide-y divide-slate-100"
          >
            {SIDEBAR_POSTS.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className="group flex gap-4 py-4 hover:bg-slate-50 transition-colors rounded-lg px-2 -mx-2"
              >
                {/* Thumbnail */}
                <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between min-w-0">
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.date}
                    </p>
                    <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg
                        className="w-3 h-3"
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
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
