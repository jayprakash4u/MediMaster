import { cn } from "@/lib/cn";

export default function PageSection({ children, className, theme = "light", containerClassName }) {
  return (
    <section
      className={cn(
        "section-shell",
        theme === "dark" ? "bg-navy-950 text-white" : "bg-gray-50",
        className
      )}
    >
      <div className={cn("relative mx-auto max-w-7xl", containerClassName)}>{children}</div>
    </section>
  );
}
