/**
 * Typography Tokens
 *
 * Centralized typography token exports for consistent text usage
 * across the application. These tokens match the homepage patterns.
 */

// Font families
export const FONT_FAMILY = {
  sans: ["Inter", "system-ui", "sans-serif"],
  display: ["Inter", "system-ui", "sans-serif"],
  body: ["Inter", "system-ui", "sans-serif"],
  mono: ["JetBrains Mono", "Fira Code", "monospace"],
};

// Font weights
export const FONT_WEIGHT = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

// Heading scale - matches homepage patterns
export const HEADING = {
  h1: "text-3xl font-black sm:text-4xl md:text-5xl tracking-tight leading-[1.15] lg:leading-[1.12]",
  h2: "text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight leading-[1.15]",
  h3: "text-xl font-bold sm:text-2xl",
  h4: "text-lg font-semibold sm:text-xl",
};

// Body text scale
export const BODY = {
  hero: "text-sm sm:text-base leading-relaxed",
  large: "text-lg",
  base: "text-base",
  small: "text-sm",
  caption: "text-xs",
  overline: "text-xxs uppercase tracking-wider",
};

// Component-specific text styles - matches homepage
export const COMPONENT_STYLES = {
  badge: "text-xxs font-semibold uppercase tracking-wider",
  label: "text-xs font-semibold uppercase tracking-widest",
  caption: "text-xs font-medium",
  bodyText: "text-sm text-gray-500 leading-relaxed",
  bodyLarge: "text-base sm:text-lg text-gray-500 leading-relaxed",
  heroText: "text-sm sm:text-base text-gray-500 leading-relaxed font-normal",
  stepTitle: "text-base font-medium text-gray-800",
  stepBody: "text-sm text-gray-500 leading-relaxed",
  navLink: "text-base font-medium",
  serviceTitle: "text-sm font-bold text-slate-900 leading-tight",
  serviceSubtitle: "text-xxs font-medium text-teal-600/70",
};

// Color patterns - matches homepage
export const TEXT_COLOR = {
  primary: "text-slate-900",
  secondary: "text-gray-500",
  teal: "text-teal-600",
  tealLight: "text-teal-500",
};

/**
 * Usage Examples
 *
 * // Import typography tokens
 * import { HEADING, BODY, COMPONENT_STYLES, TEXT_COLOR } from '@/lib/typography';
 *
 * // Use in components
 * <h1 className={HEADING.h1}>Title</h1>
 * <p className={COMPONENT_STYLES.heroText}>Hero text</p>
 * <span className={TEXT_COLOR.teal}>Tealed text</span>
 */
export default { HEADING, BODY, COMPONENT_STYLES, FONT_WEIGHT, FONT_FAMILY, TEXT_COLOR };
