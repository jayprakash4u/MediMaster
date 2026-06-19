"use client";

import React from "react";
import {
  CalendarCheck,
  Stethoscope,
  ClipboardList,
  FileText,
  Receipt,
  Package,
} from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: CalendarCheck,
    title: "Register patients & capture history",
    body: "Register new patients with comprehensive demographics, medical history, allergies, and insurance details for complete profiles.",
  },
  {
    num: 2,
    icon: Stethoscope,
    title: "Schedule appointments & visits",
    body: "Book appointments across departments and providers with automated reminders, reducing no-shows and improving patient flow.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Conduct consultations & record notes",
    body: "Document clinical encounters with structured notes, attach images, and update treatment plans seamlessly.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Generate prescriptions & referrals",
    body: "Create electronic prescriptions, specialist referrals, and clinical reports with customizable templates and digital signatures.",
  },
  {
    num: 5,
    icon: Receipt,
    title: "Process billing & insurance",
    body: "Generate accurate invoices, verify insurance eligibility, process claims, and manage payment plans effortlessly.",
  },
  {
    num: 6,
    icon: Package,
    title: "Manage follow-ups & reviews",
    body: "Schedule follow-up appointments, track patient outcomes, and collect feedback to continuously improve care quality.",
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
        {[left, right].map((step, idx) => {
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

export default function PatientWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-2">
        Streamline your patient management workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-4xl">
        Our patient management platform connects front desk, clinical staff, and billing teams
        through a centralized system for registration, appointments, care documentation, and payment
        processing.
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
