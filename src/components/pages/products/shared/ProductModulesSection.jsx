"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

export default function ProductModulesSection({
  title,
  leftModules = [],
  rightModules = [],
  modules,
  videoTitle,
  videoSubtitle = "Video Demonstration",
  showVideo = true,
  align = "center",
  id,
  iconClassName = "text-navy-600",
}) {
  const allModules = modules ?? [...leftModules, ...rightModules];
  const isCenter = align === "center";

  return (
    <section id={id} className="section-shell mx-auto max-w-7xl bg-white font-sans">
      <div className={cn("mb-6 sm:mb-8 lg:mb-10", isCenter ? "text-center" : "text-left")}>
        <h2 className="product-section-title text-slate-900">{title}</h2>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
        <div className={cn(showVideo ? "lg:col-span-7" : "lg:col-span-12")}>
          <div className="card-grid">
            {allModules.map((module) => (
              <div
                key={module}
                className="card-surface-sm flex h-full items-start gap-2 p-3 sm:gap-2.5 sm:p-3.5"
              >
                <CheckCircle2
                  className={cn("mt-0.5 h-4 w-4 shrink-0", iconClassName)}
                  strokeWidth={2.5}
                />
                <span className="text-xs leading-snug text-slate-700 sm:text-sm">{module}</span>
              </div>
            ))}
          </div>
        </div>

        {showVideo ? (
          <div className="hidden lg:col-span-5 lg:block lg:sticky lg:top-6">
            <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-900 shadow-2xl">
              <div className="text-center">
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-sm text-slate-400">Demo video coming soon</p>
              </div>
            </div>
            {videoTitle ? (
              <div className="mt-3 px-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {videoSubtitle}
                </h4>
                <p className="mt-0.5 text-sm font-semibold text-slate-800">{videoTitle}</p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
