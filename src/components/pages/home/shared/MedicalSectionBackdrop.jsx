import { cn } from "@/lib/cn";

export default function MedicalSectionBackdrop({ variant = "light", className }) {
  if (variant === "dark") {
    return (
      <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.06),transparent_40%)]" />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-100/35 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-50/80 blur-3xl" />
      <div className="medical-dot-grid absolute inset-0" />
    </div>
  );
}
