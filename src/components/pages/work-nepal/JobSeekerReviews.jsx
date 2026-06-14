"use client";

import { useState } from "react";
import PropTypes from "prop-types";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "UX Designer",
    company: "Figma",
    avatar: "PS",
    avatarColor: "bg-indigo-50 text-indigo-600",
    tag: "Design",
    review:
      "I had been job hunting for months with zero traction. Within three weeks of using this platform, I had four interviews lined up and landed my dream role at Figma.",
    highlight: "4 interviews in 3 weeks",
    timeToHire: "3w to hire",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Senior Backend Engineer",
    company: "Stripe",
    avatar: "MC",
    avatarColor: "bg-sky-50 text-sky-600",
    tag: "Engineering",
    review:
      "The salary transparency feature alone saved me from underselling myself by $40K. Companies actually reached out to me — I didn't have to send a single cold application.",
    highlight: "$40K more than expected",
    timeToHire: "11d to hire",
  },
  {
    id: 3,
    name: "Aisha Okafor",
    role: "Product Manager",
    company: "Notion",
    avatar: "AO",
    avatarColor: "bg-rose-50 text-rose-600",
    tag: "Product",
    review:
      "After two layoffs in one year, I was burnt out. This platform felt different. The company culture scores are legit — Notion's score matched my experience perfectly.",
    highlight: "Found authentic culture fit",
    timeToHire: "2w to hire",
  },
  {
    id: 4,
    name: "Tomás Varela",
    role: "Data Scientist",
    company: "Anthropic",
    avatar: "TV",
    avatarColor: "bg-emerald-50 text-emerald-600",
    tag: "Data & AI",
    review:
      "The skill-gap insights showed me exactly what I was missing. I spent two weeks on those gaps, updated my profile, and suddenly the quality of inbound changed.",
    highlight: "Skill gap → dream job",
    timeToHire: "19d to hire",
  },
  {
    id: 5,
    name: "Nadia Kowalski",
    role: "Head of Marketing",
    company: "Linear",
    avatar: "NK",
    avatarColor: "bg-amber-50 text-amber-600",
    tag: "Marketing",
    review:
      "I needed companies open to remote + relocation support. The filters saved me weeks of research. Linear's team was warm and the offer was above my ask.",
    highlight: "Remote + relocation match",
    timeToHire: "4w to hire",
  },
  {
    id: 6,
    name: "James Obi",
    role: "DevOps Engineer",
    company: "Vercel",
    avatar: "JO",
    avatarColor: "bg-zinc-100 text-zinc-700",
    tag: "Infrastructure",
    review:
      "Fastest hiring experience of my career — 8 days from profile publish to offer signed. The technical screening integrations actually tested relevant skills.",
    highlight: "Offer in 8 days flat",
    timeToHire: "8d flat",
  },
];

const stats = [
  { value: "94%", label: "Hired inside 60d" },
  { value: "3.2×", label: "More interviews" },
  { value: "$28K", label: "Avg. salary bump" },
];

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[190px]">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-full ${review.avatarColor} flex items-center justify-center text-xxs font-bold tracking-wider shrink-0`}
            >
              {review.avatar}
            </div>
            <div>
              <h4
                className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight text-slate-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {review.name}
              </h4>
              <p className="text-zinc-400 text-xxs">
                {review.role} @ <span className="font-medium text-zinc-700">{review.company}</span>
              </p>
            </div>
          </div>
          <span className="text-xxs font-medium text-zinc-400 px-1.5 py-0.5 bg-zinc-50 border border-zinc-100 rounded">
            {review.tag}
          </span>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed font-normal">
          &ldquo;{review.review}&rdquo;
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 mt-4 border-t border-zinc-100 text-xxs">
        <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
          <svg
            className="w-3 h-3 text-indigo-500 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{review.highlight}</span>
        </div>
        <span className="text-zinc-400 font-mono text-xxs tracking-tight shrink-0 bg-zinc-50 px-1.5 py-0.5 rounded">
          {review.timeToHire}
        </span>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    avatarColor: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    timeToHire: PropTypes.string.isRequired,
  }).isRequired,
};

export default function JobSeekerReviews() {
  JobSeekerReviews.propTypes = {};
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Engineering",
    "Design",
    "Product",
    "Data & AI",
    "Marketing",
    "Infrastructure",
  ];

  const filtered = activeFilter === "All" ? reviews : reviews.filter((r) => r.tag === activeFilter);

  return (
    <section
      id="worknepal-reviews"
      className="bg-zinc-50/60 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased"
    >
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-12 lg:gap-10 items-start">
        {/* LEFT COLUMN: Static Info Controls */}
        <div className="lg:col-span-4 mb-10 lg:mb-0 lg:sticky lg:top-10">
          <div className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 rounded-full px-2.5 py-0.5 mb-4 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xxs text-zinc-500 font-medium tracking-tight">Real matches</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            They found their next chapter.
          </h2>

          <p className="text-zinc-500 text-xs max-w-sm font-normal leading-relaxed mb-6">
            Over 40,000 tech professionals have launched careers using our curated,
            high-transparency platform tools.
          </p>

          {/* Inline Micro Stats */}
          <div className="grid grid-cols-3 gap-2 py-4 border-y border-zinc-200/60 mb-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <p className="text-lg font-bold text-zinc-900 tracking-tight">{stat.value}</p>
                <p className="text-xxs text-zinc-400 font-medium leading-none mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Vertically Packed Filter List */}
          <div className="flex flex-wrap lg:flex-col items-start gap-1">
            <p className="text-xxs font-bold text-zinc-400 uppercase tracking-wider w-full mb-1 lg:block hidden">
              Filter Tracks
            </p>
            <div className="flex flex-wrap gap-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-2.5 py-1 rounded-lg text-xxs font-medium tracking-tight transition-all duration-150 ${
                    activeFilter === f
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "bg-white text-zinc-500 hover:text-zinc-900 border border-zinc-200/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Compressed Inline CTA */}
          <div className="mt-6 hidden lg:block">
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium text-xs shadow-sm transition-all">
              Explore Open Roles &rarr;
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: The Compressed Scrollable Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Mobile Only CTA Button */}
          <div className="mt-6 block lg:hidden text-center">
            <button className="w-full bg-zinc-900 text-white py-2.5 rounded-xl font-medium text-xs">
              Explore Open Roles &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
