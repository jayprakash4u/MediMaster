import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-teal-500/30 hover:text-teal-700",
  outlineDark:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-teal-400/50 hover:bg-white/15 hover:text-white",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50 hover:text-teal-700",
};

export default function Button({ href, variant = "primary", className, children, ...props }) {
  const classes = cn(variants[variant] ?? variants.primary, className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
