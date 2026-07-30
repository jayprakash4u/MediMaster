"use client";

import { useState } from "react";
import {
  UserPlus,
  Building2,
  Briefcase,
  Filter,
  Users,
  CheckCircle,
  User,
  Search,
  Bell,
  Send,
  CalendarCheck,
} from "lucide-react";
import ProductWorkflowSection from "@/components/pages/products/shared/ProductWorkflowSection";

const employerSteps = [
  {
    num: 1,
    icon: UserPlus,
    title: "Create an employer account",
    body: "Sign up with your business email and set a secure password. Your account gives you full access to the employer dashboard and all hiring tools.",
  },
  {
    num: 2,
    icon: Building2,
    title: "Set up your company profile",
    body: "Add your company name, logo, description, industry, and culture highlights. A complete profile increases trust and attracts stronger applicants.",
  },
  {
    num: 3,
    icon: Briefcase,
    title: "Post a job listing",
    body: "Fill in the job title, description, required skills, salary range, location, and employment type. Clear listings attract more relevant candidates.",
  },
  {
    num: 4,
    icon: Filter,
    title: "Set screening criteria",
    body: "Define must-have qualifications, experience level, and optional screening questions to automatically filter applicants before review.",
  },
  {
    num: 5,
    icon: Users,
    title: "Review applications",
    body: "Browse incoming applications in your dashboard. View resumes, cover letters, and candidate profiles. Shortlist, reject, or move candidates to interview stages.",
  },
  {
    num: 6,
    icon: CheckCircle,
    title: "Hire and close the role",
    body: "Send an offer to your chosen candidate directly through the platform. Mark the job as filled and optionally leave a review of the hiring experience.",
  },
];

const seekerSteps = [
  {
    num: 1,
    icon: UserPlus,
    title: "Create a job seeker account",
    body: "Sign up with your email and choose job seeker as your account type. Immediately gain access to thousands of active listings and employer profiles.",
  },
  {
    num: 2,
    icon: User,
    title: "Build your profile",
    body: "Add your work experience, education, skills, and a short bio. Upload your CV and a profile photo so employers can find and contact you directly.",
  },
  {
    num: 3,
    icon: Search,
    title: "Search and filter jobs",
    body: "Use filters for role, location, salary, job type, and industry to find listings that match your goals. Save searches to get notified of new matches.",
  },
  {
    num: 4,
    icon: Bell,
    title: "Set up job alerts",
    body: "Enable email or push notifications for your preferred job criteria. Be among the first to apply when matching roles are posted — timing matters.",
  },
  {
    num: 5,
    icon: Send,
    title: "Apply for positions",
    body: "Submit applications in seconds using your saved profile and CV. Add a tailored cover letter when required and track every application's status.",
  },
  {
    num: 6,
    icon: CalendarCheck,
    title: "Interview and get hired",
    body: "Receive interview invitations directly through the platform. Coordinate scheduling, prepare with company insights, and accept your offer — all in one place.",
  },
];

const tabs = [
  {
    id: "employer",
    label: "Employer workflow",
    heading: "How employers register and post jobs",
    description:
      "From creating a company account to finding the right candidates — here's how hiring works on our platform.",
    steps: employerSteps,
  },
  {
    id: "seeker",
    label: "Job seeker workflow",
    heading: "How job seekers register and find work",
    description:
      "From building your profile to landing an interview — here's how finding your next role works on our platform.",
    steps: seekerSteps,
  },
];

export default function WorkNepalWorkflow() {
  const [active, setActive] = useState("employer");
  const current = tabs.find((t) => t.id === active);

  return (
    <section id="worknepal-workflow" className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-left mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path
                d="M0 5h20"
                stroke="currentColor"
                className="text-teal-600"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-600" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            How It Works
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-4">
          How our platform works
        </h2>
      </div>

      <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              active === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ProductWorkflowSection
        title={current.heading}
        description={current.description}
        steps={current.steps}
      />
    </section>
  );
}
