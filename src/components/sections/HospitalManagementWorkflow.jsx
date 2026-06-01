"use client";

import { useState, useEffect } from "react";

const icons = {
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0h0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0h0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  ),
  laptop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const workflowSteps = [
  { role: "Patient", description: "comes to the Hospital", icon: "user", align: "start", offsetX: "md:ml-[25%]" },
  { role: "Doctor", description: "registers Patients in the HMS", icon: "stethoscope", align: "end", offsetX: "md:mr-[15%]" },
  { role: "Healthcare Partner", description: "manages Doctors", icon: "briefcase", align: "start", offsetX: "md:ml-[10%]" },
  { role: "Lead Therapist", description: "manages legal & finance info", icon: "scale", align: "center", offsetX: "" },
  { role: "Administrator", description: "tracks updates in the HMS", icon: "laptop", align: "end", offsetX: "md:mr-[10%]" },
  { role: "Super Admin", description: "manages the whole HMS", icon: "shield", align: "center", offsetX: "" },
];

function WorkflowItem({ step, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  let justifyClass = "justify-center";
  if (step.align === "start") justifyClass = "justify-start";
  if (step.align === "end") justifyClass = "justify-end";

  return (
    <div
      className={`flex w-full z-10 my-4 md:my-0 ${justifyClass}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div
        className={`flex items-start space-x-4 max-w-sm p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-none ${step.offsetX}`}
        style={{ background: "#fff" }}
      >
        <div className="relative flex-shrink-0">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-md"
            style={{ background: "#f0fdfa", borderColor: "#14b8a6", color: "#0d9488" }}
          >
            {icons[step.icon]}
          </div>
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#2dd4bf" }} />
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#14b8a6" }} />
          </span>
        </div>
        <div className="flex flex-col pt-1">
          <h4 className="text-xl font-bold leading-tight" style={{ color: "#1e3a8a" }}>{step.role}</h4>
          <p className="font-medium text-base" style={{ color: "#64748b" }}>{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HospitalManagementWorkflow() {
  return (
    <div
      className="w-full py-16 px-4 flex flex-col items-center justify-center font-sans overflow-hidden"
      style={{ background: "#f8fafc" }}
    >
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight uppercase" style={{ color: "#1e3a8a" }}>
          How Do Hospital Management<br />Software Work?
        </h2>
      </div>

      <div className="relative w-full max-w-4xl min-h-[700px] flex flex-col justify-between py-4">
        {workflowSteps.map((step, index) => (
          <WorkflowItem key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
