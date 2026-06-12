"use client";

import React from "react";
import { DollarSign, FileText, CreditCard, BarChart3, Users, Receipt } from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: DollarSign,
    title: "Create invoices & track expenses",
    body: "Generate GST-compliant invoices, track receipts, and categorize expenses automatically to maintain clean books.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Automate tax calculations",
    body: "Apply dynamic tax slabs, generate TDS/TCS reports, and stay audit-ready with automatic statutory filings.",
  },
  {
    num: 3,
    icon: CreditCard,
    title: "Reconcile bank transactions",
    body: "Match bank statements with ledger entries, flag discrepancies, and ensure accurate cash flow tracking.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Analyze financial performance",
    body: "View P&L, balance sheets, and margin analytics. Gain visibility into revenue, expenses, and profitability.",
  },
  {
    num: 5,
    icon: Users,
    title: "Process payroll & compliance",
    body: "Run payroll connected to attendance data, manage PF/ESI deductions, and ensure statutory compliance.",
  },
  {
    num: 6,
    icon: Receipt,
    title: "Generate statutory reports",
    body: "Export finalized reports for GST, income tax, and audit purposes. Maintain complete audit trails.",
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

export default function AccountMasterWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
        Streamline your Account Master workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
<p className={COMPONENT_STYLES.bodyLarge}>
          Our Account Master platform connects finance, operations, and compliance teams
          through a centralized system for invoicing, reconciliation, reporting,
          and statutory filings across all departments.
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
