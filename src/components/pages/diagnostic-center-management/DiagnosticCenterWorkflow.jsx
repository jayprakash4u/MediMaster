"use client";

import React from "react";
import { ClipboardPlus, Microscope, FileText, BarChart3, Bell, ShieldCheck } from "lucide-react";
import { COMPONENT_STYLES } from "@/lib/typography";

const steps = [
  {
    num: 1,
    icon: ClipboardPlus,
    title: "Register samples & patients",
    body: "Register patient samples with unique barcodes and capture all necessary demographic and clinical information for accurate tracking.",
  },
  {
    num: 2,
    icon: Microscope,
    title: "Collect and process samples",
    body: "Track sample collection, assign test panels, and monitor processing status with real-time updates across all lab stations.",
  },
  {
    num: 3,
    icon: FileText,
    title: "Enter test results",
    body: "Record test results with automated validation against normal ranges, flag critical values, and add doctor remarks seamlessly.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Generate reports",
    body: "Create comprehensive, branded lab reports with customizable templates, digital signatures, and automated delivery to doctors.",
  },
  {
    num: 5,
    icon: Bell,
    title: "Notify critical results",
    body: "Automatically alert doctors and patients about critical findings, abnormal results, and report availability via SMS or email.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Audit & compliance",
    body: "Maintain detailed audit trails, QC logs, and accreditation-ready documentation for regulatory compliance.",
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
      {/* Step headers */}
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

      {/* Connector lines */}
      <div className="grid grid-cols-2">
        <Connector isFirstLeft={isFirstPair} isLastRight={false} />
        <Connector isFirstLeft={false} isLastRight={isLastPair} />
      </div>

      {/* Step bodies */}
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

export default function DiagnosticCenterWorkflow() {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
        Streamline your diagnostic center workflow
      </h2>
      <div className="border-t-2 border-gray-900 mb-4" />
      <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-4xl">
        Connect diagnostic center staff, pathologists, and clinicians through a
        centralized solution for sample management, test processing, and result reporting.
        It ensures accuracy and efficiency across all diagnostic operations.
      </p>

      {/* Steps grid */}
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
