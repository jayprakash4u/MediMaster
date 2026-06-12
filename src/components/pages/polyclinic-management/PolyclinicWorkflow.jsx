"use client";

import React from "react";
import { CalendarCheck, Stethoscope, ClipboardList, FileText, Receipt, Package, ShieldCheck } from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: CalendarCheck,
    title: "Book appointments across specialties",
    body: "Schedule patient visits across multiple specialties with unified calendar view and automated reminders for all departments.",
  },
  {
    num: 2,
    icon: Stethoscope,
    title: "Consult & refer patients",
    body: "Enable seamless referrals between specialists, maintain shared medical records, and coordinate care plans across departments.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Manage treatments & procedures",
    body: "Record treatments, procedures, and prescriptions with full history tracking and department-specific workflows.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Generate reports & prescriptions",
    body: "Create unified patient reports, specialist referrals, and prescriptions with customizable templates and digital signatures.",
  },
  {
    num: 5,
    icon: Receipt,
    title: "Process unified billing",
    body: "Generate consolidated invoices across specialties, process insurance claims, and track outstanding payments centrally.",
  },
  {
    num: 6,
    icon: Package,
    title: "Manage inventory & resources",
    body: "Track shared medical supplies, equipment scheduling, and resource allocation across all clinic departments.",
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
              <span className={COMPONENT_STYLES.stepTitle}>
                {step.title}
              </span>
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

export default function PolyclinicWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
        Streamline your polyclinic workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-4xl">
        Our polyclinic management platform connects multiple specialties, staff, and
        patients through a centralized system for appointments, referrals, billing,
        and resource management across all departments.
      </p>

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
            />
          </div>
        ))}
      </div>
    </section>
  );
}
