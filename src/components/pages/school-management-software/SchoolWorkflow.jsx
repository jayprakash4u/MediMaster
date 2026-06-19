"use client";

import React from "react";
import { BookOpen, Users, CalendarCheck, FileText, CreditCard, MessageSquare } from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: BookOpen,
    title: "Register students & manage admissions",
    body: "Streamline student admission with digital registration, document collection, and automated class allocation based on merit and availability.",
  },
  {
    num: 2,
    icon: Users,
    title: "Assign teachers & create schedules",
    body: "Assign teachers to classes and subjects, generate timetables, and manage substitute arrangements with intelligent scheduling.",
  },
  {
    num: 3,
    icon: CalendarCheck,
    title: "Track attendance & performance",
    body: "Monitor daily attendance via biometric or manual entry, track student performance, and generate progress reports automatically.",
  },
  {
    num: 4,
    icon: FileText,
    title: "Conduct exams & publish results",
    body: "Create exam schedules, manage grading, auto-calculate results, and publish report cards with customizable templates.",
  },
  {
    num: 5,
    icon: CreditCard,
    title: "Manage fees & payments",
    body: "Generate fee invoices, track payments, send reminders for dues, and manage scholarships or discounts with complete transparency.",
  },
  {
    num: 6,
    icon: MessageSquare,
    title: "Communicate with parents",
    body: "Send SMS and app notifications for attendance, results, events, and fee reminders. Keep parents engaged with real-time updates.",
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

export default function SchoolWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-2">
        Streamline your school management workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-4xl">
        Our school management platform connects administrators, teachers, students, and parents
        through a centralized system for admissions, attendance, examinations, and communication
        across all departments.
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
