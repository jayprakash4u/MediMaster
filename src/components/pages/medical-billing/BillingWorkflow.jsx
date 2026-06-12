"use client";

import React from "react";
import { FileText, CreditCard, Receipt, BarChart3, Send, ShieldCheck } from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: FileText,
    title: "Register patients & services",
    body: "Register patient details and capture all billable services during OPD, IPD, or lab visits.",
  },
  {
    num: 2,
    icon: CreditCard,
    title: "Generate invoices",
    body: "Create GST-compliant invoices with automated tax calculations and multi-payment channel support.",
  },
  {
    num: 3,
    icon: Receipt,
    title: "Process insurance claims",
    body: "Generate insurance and TPA claims with validation rules, authorization workflows and digital documentation.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Track collections",
    body: "Monitor real-time revenue, aging reports, and receivables with automated follow-up reminders.",
  },
  {
    num: 5,
    icon: Send,
    title: "Send alerts & notifications",
    body: "Automatically notify patients about outstanding balances and payment deadlines via SMS or email.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Audit & compliance",
    body: "Maintain detailed audit trails, QC logs, and compliance-ready documentation for financial audits.",
  },
];

function Connector({ isFirstLeft, isLastRight }) {
  return (
    <div className="flex items-center px-6">
      {isFirstLeft ? (
        <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
      ) : (
        <div className="flex-1 h-0.5 bg-navy-600" />
      )}
      <div className="w-3 h-3 rounded-full bg-navy-600 flex-shrink-0 mx-0" />
      {isLastRight ? (
        <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
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
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-emerald-600" />
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

export default function BillingWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">
        Streamline your billing workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-4xl">
        MediMaster connects billing staff, finance teams, and insurance providers through a
        centralized solution for invoice generation, claims processing, and revenue tracking.
        It ensures accuracy and efficiency across all billing operations.
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
