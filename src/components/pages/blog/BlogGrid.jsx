"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CardCompact, CardMedia, CardMediaBody, CardMediaImage } from "@/components/ui/Card";
import { BLOG_POSTS, BLOG_STATS, BLOG_TAGS } from "@/config/sections/blog";
import { cn } from "@/lib/cn";
import { COMPONENT_STYLES } from "@/lib/typography";

function TagPill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-teal-600 text-white shadow-sm shadow-teal-600/20"
          : "border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:text-teal-700"
      )}
    >
      {label}
    </button>
  );
}

function ArticleCard({ post, featured = false }) {
  return (
    <CardMedia
      as={Link}
      href={post.href}
      className={cn("group h-full", featured && "lg:grid lg:grid-cols-2 lg:overflow-hidden")}
    >
      <CardMediaImage
        className={cn(
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[320px]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          priority={featured}
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700 shadow-sm">
          {post.tag}
        </span>
      </CardMediaImage>

      <CardMediaBody className={cn(featured && "justify-center lg:p-10")}>
        {featured ? (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-600">
            Featured
          </p>
        ) : null}

        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="text-slate-300">·</span>
          <span>{post.readTime}</span>
        </div>

        <h2
          className={cn(
            "font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-700",
            featured ? "text-xl sm:text-2xl lg:text-[1.65rem]" : "card-title"
          )}
        >
          {post.title}
        </h2>

        <p
          className={cn(
            "mt-3 flex-1 leading-relaxed text-slate-600 line-clamp-3",
            featured ? "text-sm sm:text-base" : "card-desc mt-2 text-sm"
          )}
        >
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-500 sm:text-sm">{post.author}</span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5",
              COMPONENT_STYLES.linkAccent,
              "group-hover:gap-2"
            )}
          >
            Read article
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </CardMediaBody>
    </CardMedia>
  );
}

export default function BlogGrid() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(
    () => (activeTag === "All" ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.tag === activeTag)),
    [activeTag]
  );

  const [featured, ...rest] = filteredPosts;

  return (
    <section id="blog-articles" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Articles"
          title="Browse by"
          highlight="topic"
          description="Practical insights on healthcare software, compliance, and digital growth — written for teams building better care."
          className="mb-8 max-w-2xl"
        />

        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {BLOG_STATS.map((stat) => (
            <CardCompact key={stat.label} className="text-center sm:text-left">
              <p className="text-lg font-extrabold tabular-nums text-slate-900 sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
            </CardCompact>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {BLOG_TAGS.map((tag) => (
            <TagPill
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            <ArticleCard post={featured} featured />

            {rest.length > 0 ? (
              <div>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="card-eyebrow">Latest</p>
                    <h3 className="card-title mt-1">More articles</h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    {rest.length} {rest.length === 1 ? "post" : "posts"}
                  </p>
                </div>

                <div className="card-grid">
                  {rest.map((post) => (
                    <ArticleCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <CardCompact className="py-16 text-center">
            <p className="text-sm text-slate-500">No articles in this category yet.</p>
          </CardCompact>
        )}
      </div>
    </section>
  );
}
