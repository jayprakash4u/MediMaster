"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardMedia, CardMediaBody, CardMediaImage } from "@/components/ui/Card";
import { BLOG_POSTS, BLOG_TAGS } from "@/config/sections/blog";
import { cn } from "@/lib/cn";

function ArticleCard({ post }) {
  return (
    <CardMedia as={Link} href={post.href} className="group h-full">
      <CardMediaImage>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </CardMediaImage>

      <CardMediaBody>
        <p className="card-eyebrow">{post.tag}</p>
        <h2 className="card-title mt-2 transition-colors group-hover:text-teal-700">
          {post.title}
        </h2>
        <p className="card-desc mt-2 line-clamp-2">{post.excerpt}</p>
        <p className="mt-4 text-xs text-slate-400">
          {post.date} · {post.readTime}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
          Read more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
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

  return (
    <section id="blog-articles" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-2">
          {BLOG_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeTag === tag ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="card-grid">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-sm text-slate-500">
            No articles in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
