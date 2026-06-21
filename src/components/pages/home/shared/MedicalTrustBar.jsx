import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { MEDICAL_TRUST_ITEMS } from "@/lib/medical-visuals";

export default function MedicalTrustBar({ theme = "dark", className }) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        isDark ? "justify-center lg:justify-start" : "justify-center",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
          isDark
            ? "border-teal-500/25 bg-teal-500/10 text-teal-300"
            : "border-teal-500/20 bg-teal-50 text-teal-700"
        )}
      >
        <ShieldCheck className="h-3 w-3" strokeWidth={2.25} />
        Medical software
      </span>
      {MEDICAL_TRUST_ITEMS.map((item) => (
        <span
          key={item}
          className={cn(
            "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
            isDark
              ? "border-white/10 bg-white/[0.04] text-slate-300"
              : "border-slate-200 bg-white text-slate-600"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
