import { cn } from "@/lib/cn";
import { TEXT_COLOR } from "@/lib/typography";

export default function EyebrowMarker({ label, className, labelClassName }) {
  return (
    <div className={cn("mb-4 flex items-center gap-3", className)}>
      <svg viewBox="0 0 24 10" className="h-3 w-8" fill="none" aria-hidden>
        <path
          d="M0 5h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-teal-600"
        />
        <circle cx="22" cy="5" r="2" fill="currentColor" className="text-teal-600" />
      </svg>
      {label ? (
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-widest text-teal-600",
            labelClassName
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}

export function EyebrowLine({ className }) {
  return (
    <svg
      viewBox="0 0 24 10"
      className={cn("h-3 w-8 text-teal-600", className)}
      fill="none"
      aria-hidden
    >
      <path d="M0 5h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="5" r="2" fill="currentColor" />
    </svg>
  );
}
