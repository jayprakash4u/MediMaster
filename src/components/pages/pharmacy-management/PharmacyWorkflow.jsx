"use client";

import {
  Monitor,
  Layers,
  FileText,
  RefreshCw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: Monitor,
    title: "Upload pharmacy inventory",
    body: "Import a complete list of medicine and stock items into the system with a specially structured CSV/Excel file or add items within the pharmacy module.",
  },
  {
    num: 2,
    icon: Layers,
    title: "Manage medicine stock",
    body: "Track stock levels, update quantities, and manage new items to keep accurate and up-to-date medicine statuses shared with practitioners.",
  },
  {
    num: 3,
    icon: FileText,
    title: "Receive prescriptions",
    body: "Get digital prescriptions from doctors instantly transmitted to the pharmacy module, where pharmacists can view patients' prescribed medicine and stock availability.",
  },
  {
    num: 4,
    icon: RefreshCw,
    title: "Create invoices",
    body: "Generate a detailed bill for the pharmacy order based on a patient's prescription, which includes a listing of each item, its quantity, unit price, and total cost for payment processing and financial reporting.",
  },
  {
    num: 5,
    icon: Search,
    title: "Manage prescriptions",
    body: "Track and update the progress of each prescription from the moment it's received to the point it's completed. It involves real-time status monitoring across all staff.",
  },
  {
    num: 6,
    icon: SlidersHorizontal,
    title: "Control inventory stock",
    body: "Maintain optimal stock levels through accurate monitoring and timely adjustments. Sales statistics help to control required stock quantities and procurement decisions.",
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
              {Icon && (
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-navy-600" />
                </div>
              )}
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

export default function PharmacyWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">
        Organize your pharmacy management workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-4xl">
        LinkHMS helps to connect doctors, pharmacists, and administrative staff
        through a centralized solution for real-time prescription processing,
        inventory tracking, and billing. It covers efficiency and accuracy across
        varying clinical and pharmacy operations.
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
