import { cn } from "@/lib/cn";

export default function EyebrowMarker({ label, className, labelClassName }) {
  return (
    <div className={cn("mb-4 flex items-center gap-3 text-teal-600", className, labelClassName)}>
      <svg viewBox="0 0 24 10" className="h-3 w-8 shrink-0 text-current" fill="none" aria-hidden>
        <path d="M0 5h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="5" r="2" fill="currentColor" />
      </svg>
      {label ? (
        <span className="text-xs font-bold uppercase tracking-widest text-current">{label}</span>
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
