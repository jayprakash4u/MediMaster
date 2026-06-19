import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  className,
  headerRef,
  as: Tag = "h2",
  children,
}) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      ref={headerRef}
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            COMPONENT_STYLES.badge,
            "mb-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
            isDark
              ? "border-teal-500/30 bg-teal-500/10 text-teal-400"
              : "border-teal-500/20 bg-teal-500/10 text-teal-600"
          )}
        >
          {!isDark ? <span className="h-1 w-1 rounded-full bg-teal-500" /> : null}
          {eyebrow}
        </span>
      ) : null}

      <Tag
        className={cn(
          HEADING.h2,
          isDark ? "text-white" : TEXT_COLOR.primary,
          isCenter && "mx-auto"
        )}
      >
        {children ?? (
          <>
            {title}
            {highlight ? (
              <>
                {" "}
                {isDark ? (
                  <span className="text-teal-400">{highlight}</span>
                ) : (
                  <span className="text-gradient-brand">{highlight}</span>
                )}
              </>
            ) : null}
          </>
        )}
      </Tag>

      {description ? (
        <p
          className={cn(
            BODY.small,
            "mt-4 sm:text-base",
            isDark ? "text-white/80" : cn(BODY.hero, TEXT_COLOR.secondary),
            align === "left" && "max-w-xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
