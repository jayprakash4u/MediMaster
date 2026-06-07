"use client";

import { useState } from "react";

const employerSteps = [
  {
    num: 1,
    title: "Create an employer account",
    body: "Sign up with your business email and set a secure password. Your account gives you full access to the employer dashboard and all hiring tools.",
  },
  {
    num: 2,
    title: "Set up your company profile",
    body: "Add your company name, logo, description, industry, and culture highlights. A complete profile increases trust and attracts stronger applicants.",
  },
  {
    num: 3,
    title: "Post a job listing",
    body: "Fill in the job title, description, required skills, salary range, location, and employment type. Clear listings attract more relevant candidates.",
  },
  {
    num: 4,
    title: "Set screening criteria",
    body: "Define must-have qualifications, experience level, and optional screening questions to automatically filter applicants before review.",
  },
  {
    num: 5,
    title: "Review applications",
    body: "Browse incoming applications in your dashboard. View resumes, cover letters, and candidate profiles. Shortlist, reject, or move candidates to interview stages.",
  },
  {
    num: 6,
    title: "Hire and close the role",
    body: "Send an offer to your chosen candidate directly through the platform. Mark the job as filled and optionally leave a review of the hiring experience.",
  },
];

const seekerSteps = [
  {
    num: 1,
    title: "Create a job seeker account",
    body: "Sign up with your email and choose job seeker as your account type. Immediately gain access to thousands of active listings and employer profiles.",
  },
  {
    num: 2,
    title: "Build your profile",
    body: "Add your work experience, education, skills, and a short bio. Upload your CV and a profile photo so employers can find and contact you directly.",
  },
  {
    num: 3,
    title: "Search and filter jobs",
    body: "Use filters for role, location, salary, job type, and industry to find listings that match your goals. Save searches to get notified of new matches.",
  },
  {
    num: 4,
    title: "Set up job alerts",
    body: "Enable email or push notifications for your preferred job criteria. Be among the first to apply when matching roles are posted — timing matters.",
  },
  {
    num: 5,
    title: "Apply for positions",
    body: "Submit applications in seconds using your saved profile and CV. Add a tailored cover letter when required and track every application's status.",
  },
  {
    num: 6,
    title: "Interview and get hired",
    body: "Receive interview invitations directly through the platform. Coordinate scheduling, prepare with company insights, and accept your offer — all in one place.",
  },
];

function Connector({ isFirstLeft, isLastRight, accent }) {
  const solid = `h-0.5 flex-1 ${accent}`;
  const dashed = `flex-1 border-t-2 border-dashed ${
    accent === "bg-blue-600" ? "border-blue-300" : "border-teal-300"
  }`;

  return (
    <div className="flex items-center px-6">
      {isFirstLeft ? <div className={dashed} /> : <div className={solid} />}
      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${accent}`} />
      {isLastRight ? <div className={dashed} /> : <div className={solid} />}
    </div>
  );
}

function StepPair({ left, right, pairIndex, totalPairs, theme }) {
  const isFirstPair = pairIndex === 0;
  const isLastPair = pairIndex === totalPairs - 1;

  const numColor = theme === "employer" ? "text-blue-700" : "text-teal-700";
  const accent = theme === "employer" ? "bg-blue-600" : "bg-teal-600";

  return (
    <div>
      <div className="grid grid-cols-2">
        {[left, right].map((step) => {
          return (
            <div
              key={step.num}
              className="flex items-center gap-3 px-6 pt-6 pb-2"
            >
              <span className={`text-2xl font-medium w-5 flex-shrink-0 ${numColor}`}>
                {step.num}
              </span>
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${theme === "employer" ? "bg-blue-50" : "bg-teal-50"}`}
              >
                <span className={`text-xs font-bold ${theme === "employer" ? "text-blue-700" : "text-teal-700"}`}>
                  {step.num}
                </span>
              </div>
              <span className="text-[15px] font-medium text-gray-800 leading-snug">
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2">
        <Connector isFirstLeft={isFirstPair} isLastRight={false} accent={accent} />
        <Connector isFirstLeft={false} isLastRight={isLastPair} accent={accent} />
      </div>

      <div className="grid grid-cols-2">
        {[left, right].map((step) => (
          <div key={step.num} className="px-6 pt-4 pb-8">
            <p className="text-[14px] text-gray-500 leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowPanel({ steps, theme }) {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <div className="rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
      {pairs.map(([left, right], pairIndex) => (
        <div
          key={left.num}
          className={pairIndex < pairs.length - 1 ? "border-b border-gray-100" : ""}
        >
          <StepPair
            left={left}
            right={right}
            pairIndex={pairIndex}
            totalPairs={pairs.length}
            theme={theme}
          />
        </div>
      ))}
    </div>
  );
}

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

export default function JobWorkflow() {
  const [active, setActive] = useState("employer");
  const current = tabs.find((t) => t.id === active);

  return (
    <section id="worknepal-workflow" className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-left mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
              <circle cx="22" cy="5" r="2" fill="#0D9488" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            How It Works
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.12] text-slate-900 mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          How our platform works
        </h2>
      </div>

      <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-5 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 ${
              active === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        {current.heading}
      </h3>
      <p className="text-[15px] text-gray-500 leading-relaxed mb-6 max-w-3xl">
        {current.description}
      </p>

      <WorkflowPanel steps={current.steps} theme={current.id} />
    </section>
  );
}
