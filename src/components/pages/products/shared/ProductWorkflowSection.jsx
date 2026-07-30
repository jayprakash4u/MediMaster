"use client";

import { COMPONENT_STYLES } from "@/lib/typography";
import { cn } from "@/lib/cn";

function Connector({ isFirstLeft, isLastRight }) {
  return (
    <div className="flex items-center px-6">
      {isFirstLeft ? (
        <div className="flex-1 border-t-2 border-dashed border-teal-300" />
      ) : (
        <div className="flex-1 h-0.5 bg-navy-600" />
      )}
      <div className="mx-0 h-3 w-3 shrink-0 rounded-full bg-navy-600" />
      {isLastRight ? (
        <div className="flex-1 border-t-2 border-dashed border-teal-300" />
      ) : (
        <div className="flex-1 h-0.5 bg-navy-600" />
      )}
    </div>
  );
}

function MobileStep({ step }) {
  const Icon = step.icon;

  return (
    <article className="card-surface-sm flex h-full flex-col p-3 sm:p-3.5">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-semibold text-navy-600 sm:text-sm">{step.num}</span>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-100 sm:h-8 sm:w-8">
          <Icon size={14} className="text-navy-600 sm:h-4 sm:w-4" />
        </div>
      </div>
      <h3 className={cn(COMPONENT_STYLES.stepTitle, "line-clamp-2 text-left text-xs sm:text-sm")}>
        {step.title}
      </h3>
      <p
        className={cn(
          COMPONENT_STYLES.stepBody,
          "mt-1.5 line-clamp-3 text-[10px] sm:mt-2 sm:text-xs"
        )}
      >
        {step.body}
      </p>
    </article>
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
            <div key={step.num} className="flex items-center gap-3 px-6 pb-2 pt-6">
              <span className="w-5 shrink-0 text-2xl font-medium text-navy-600">{step.num}</span>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-100">
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
          <div key={step.num} className="px-6 pb-8 pt-4">
            <p className={COMPONENT_STYLES.stepBody}>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductWorkflowSection({ title, description, steps }) {
  const pairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <section className="section-shell mx-auto max-w-5xl">
      <h2 className="product-section-title mb-2">{title}</h2>
      <div className="mb-4 border-t-2 border-gray-900" />
      <p className="product-section-copy mb-6 max-w-4xl sm:mb-8">{description}</p>

      <div className="card-grid md:hidden">
        {steps.map((step) => (
          <MobileStep key={step.num} step={step} />
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 md:block">
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
