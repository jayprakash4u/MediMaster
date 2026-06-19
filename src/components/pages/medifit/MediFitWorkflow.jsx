"use client";

import React from "react";
import { Activity, HeartPulse, Users, Monitor, Video, ShieldCheck } from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: Activity,
    title: "Collect health data & vitals",
    body: "Integrate wearable devices, EHR systems, and manual entry to build comprehensive health profiles with vital signs and lifestyle data.",
  },
  {
    num: 2,
    icon: HeartPulse,
    title: "AI-powered health risk scoring",
    body: "Run predictive analytics on collected data to identify health risks, flag anomalies, and generate personalized risk assessments.",
  },
  {
    num: 3,
    icon: Users,
    title: "Generate personalized care plans",
    body: "Create tailored wellness plans including diet, exercise, medication reminders, and scheduled checkups based on individual profiles.",
  },
  {
    num: 4,
    icon: Monitor,
    title: "Monitor progress & adherence",
    body: "Track patient adherence to care plans, monitor progress metrics, and send automated reminders for medications and appointments.",
  },
  {
    num: 5,
    icon: Video,
    title: "Enable telemedicine consultations",
    body: "Facilitate virtual doctor consultations, prescription management, and follow-up scheduling directly within the platform.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Generate health reports & insights",
    body: "Produce comprehensive health reports, trend analysis, and actionable insights for patients, doctors, and caregivers.",
  },
];

function Connector({ isFirstLeft, isLastRight }) {
  return (
    <div className="flex items-center px-6">
      {isFirstLeft ? (
        <div className="flex-1 border-t-2 border-dashed border-teal-300" />
      ) : (
        <div className="flex-1 h-0.5 bg-navy-600" />
      )}
      <div className="w-3 h-3 rounded-full bg-navy-600 flex-shrink-0 mx-0" />
      {isLastRight ? (
        <div className="flex-1 border-t-2 border-dashed border-teal-300" />
      ) : (
        <div className="flex-1 h-0.5 bg-navy-600" />
      )}
    </div>
  );
}

function StepPair({ left, right, pairIndex, totalPairs }) {
  const isFirstPair = pairIndex === 0;
  const isLastPair = pairIndex === totalPairs - 1;

  return (
    <div>
      <div className="grid grid-cols-2">
        {[left, right].map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="flex items-center gap-3 px-6 pt-6 pb-2">
              <span className="text-2xl font-medium text-navy-600 w-5 flex-shrink-0">
                {step.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-navy-600" />
              </div>
              <span className={COMPONENT_STYLES.stepTitle}>{step.title}</span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2">
        <Connector isFirstLeft={isFirstPair} isLastRight={false} />
        <Connector isFirstLeft={false} isLastRight={isLastPair} />
      </div>

      <div className="grid grid-cols-2">
        {[left, right].map((step) => (
          <div key={step.num} className="px-6 pt-4 pb-8">
            <p className={COMPONENT_STYLES.stepBody}>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MediFitWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
        Streamline your health analytics workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className={COMPONENT_STYLES.bodyLarge}>
        Our MediFit platform connects patients, healthcare providers, and caregivers through a
        centralized system for health monitoring, analytics, and proactive care management across
        all touchpoints.
      </p>

      <div className="rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
        {pairs.map(([left, right], pairIndex) => (
          <div
            key={left.num}
            className={pairIndex < pairs.length - 1 ? "border-b border-gray-100" : ""}
          >
            <StepPair left={left} right={right} pairIndex={pairIndex} totalPairs={pairs.length} />
          </div>
        ))}
      </div>
    </section>
  );
}
