"use client";

import { CheckCircle2 } from "lucide-react";

export default function WorkNepalModulesSection() {
  const leftColumnModules = [
    "Verified Job Listings",
    "AI-Powered Job Matching",
    "Direct Recruiter Messaging",
    "Real-Time Application Tracking",
    "Resume Builder & Templates",
    "Salary Insights & Market Data",
  ];

  const rightColumnModules = [
    "Interview Scheduling & Reminders",
    "Career Coaching & Assessments",
    "Multi-Industry Job Categories",
    "Company Culture Ratings",
    "Skill Gap Analysis",
    "Job Alert Notifications",
  ];

  return (
    <section id="worknepal-modules" className="mx-auto max-w-7xl px-4 py-12 md:py-20 font-sans bg-white">
      <div className="text-left mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="#0D9488"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="#0D9488" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Modules
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
          Work Nepal Job Platform Modules
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-3">
            {leftColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {rightColumnModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="text-sm md:text-base text-slate-700 font-medium italic">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
