"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CardMedia, CardMediaBody, CardMediaImage } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/config/sections/portfolio";
import { cn } from "@/lib/cn";

function ProjectCard({ project }) {
  return (
    <CardMedia>
      <CardMediaImage className="aspect-[4/3]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4">
            <span className="text-center text-sm font-medium text-slate-400">{project.title}</span>
          </div>
        )}
      </CardMediaImage>
      <CardMediaBody className="py-4 sm:py-5">
        <p className="card-eyebrow">{project.category}</p>
        <h3 className="card-title mt-1 text-sm sm:text-base">{project.title}</h3>
      </CardMediaBody>
    </CardMedia>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="portfolio-projects" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Projects"
          title="Client"
          highlight="work"
          className="mb-6 max-w-xl"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeFilter === category
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="card-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
