"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Website Development",
    "App Development",
    "UI/UX",
    "Social Media Marketing",
    "Social Media Handling",
    "Graphic Design",
    "Digital Marketing",
  ];

  const projects = [
    {
      id: 1,
      title: "Sinha Verma Law Concern",
      category: "Website Development",
      image: "",
    },
    {
      id: 2,
      title: "Cutis Path Lab",
      category: "Website Development",
      image: "",
    },
    {
      id: 3,
      title: "Everest Pathology",
      category: "Website Development",
      image: "",
    },
    {
      id: 4,
      title: "Padmakanya Sec School",
      category: "Website Development",
      image: "/portfolio/website development/padmakanyaschoollogo.jpeg",
    },
    {
      id: 5,
      title: "Next Stop Nepal",
      category: "App Development",
      image: "",
    },
    {
      id: 6,
      title: "Mero Patro Portal",
      category: "UI/UX",
      image: "",
    },
    {
      id: 7,
      title: "Destination Nepal Tours",
      category: "Digital Marketing",
      image: "",
    },
    {
      id: 8,
      title: "Global Education Platform",
      category: "Social Media Marketing",
      image: "",
    },
    {
      id: 9,
      title: "Patel Builders Pvt. Ltd.",
      category: "Graphic Design",
      image: "",
    },
    {
      id: 10,
      title: "Janakpur ENT",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/janakpur ent.jpg",
    },
    {
      id: 11,
      title: "Krishi Ghar Pvt Ltd",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/krishi ghar.jpg",
    },
    {
      id: 12,
      title: "Mahato Vet Pharma",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/Mahato vet pharma.jpg",
    },
    {
      id: 13,
      title: "Ramro Gaadi",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/Ramro gadi.jpg",
    },
    {
      id: 14,
      title: "Work Nepal",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/work nepal.jpg",
    },
    {
      id: 15,
      title: "EIPD Nepalgunj",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/eipd nepaljung.jpg",
    },
    {
      id: 16,
      title: "Capital Reference Lab",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/capital refrence lab.jpg",
    },
    {
      id: 17,
      title: "Medimaster ERP",
      category: "Social Media Marketing",
      image: "/portfolio/socialmediahandiling/medimaster.jpg",
    },
  ];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-shell bg-slate-50 text-slate-900 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          align="left"
          eyebrow="Our Case Studies"
          title="Showcase of Our Work"
          description="Explore our diverse portfolio across digital design, corporate systems, and robust technical infrastructure execution."
          className="mb-12 max-w-xl"
        />

        {/* --- HORIZONTAL STICKY FILTER MENU --- */}
        {/* Uses smart inline horizontal scrolling on smaller screens so the interface stays ultra-clean */}
        <div className="sticky top-0 z-30 bg-slate-50/90 backdrop-blur-md py-4 mb-10 border-b border-slate-200 overflow-x-auto scrollbar-none flex gap-2 items-center mask-image">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PORTFOLIO BALANCED GRID --- */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col overflow-hidden bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Visual Canvas Block */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Content Metadata Block */}
                <div className="p-3 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-0.5">
                    <span className="text-xxs font-mono font-bold tracking-widest text-teal-600 uppercase block">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Filter State Fallback */
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 text-sm font-medium">
              No projects showcase listed under this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
