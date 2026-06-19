/**
 * Merge class names — filters falsy values.
 * Use for conditional Tailwind classes in components.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
