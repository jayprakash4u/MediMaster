import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  size = "md",
  className,
  headerRef,
  as: Tag = "h2",
  children,
}) {
  const isDark = theme === "dark";
  const isCenter = align === "center";
  const isRight = align === "right";
  const displaySize = HEADING.sectionDisplay[size] ?? HEADING.sectionDisplay.md;

  const titleContent =
    children ??
    (highlight ? (
      <>
        {title} {highlight}
      </>
    ) : (
      title
    ));

  return (
    <div
      ref={headerRef}
      className={cn(
        isCenter && "mx-auto max-w-2xl text-center",
        align === "left" && "text-left",
        isRight && "text-right",
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
          {!isDark ? <span className="h-1 w-1 rounded-full bg-teal-500" aria-hidden /> : null}
          {eyebrow}
        </span>
      ) : null}

      <Tag
        className={cn(displaySize, isDark ? "text-white" : "text-navy-950", isCenter && "mx-auto")}
      >
        {titleContent}
      </Tag>

      {description ? (
        <p
          className={cn(
            BODY.small,
            "mt-4 sm:text-base",
            isDark ? "text-white/80" : cn(BODY.hero, TEXT_COLOR.secondary),
            (align === "left" || isRight) && "max-w-xl",
            isCenter && isRight && "ml-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
