/**
 * Typography Tokens
 *
 * Centralized typography token exports for consistent text usage
 * across the application. Use these tokens to maintain a clear visual
 * hierarchy and avoid duplicated inline Tailwind classes.
 */

export const FONT_FAMILY = {
  sans: "Inter, system-ui, sans-serif",
  display: "Georgia, serif",
  serif: "Georgia, serif",
  body: "Inter, system-ui, sans-serif",
  mono: "JetBrains Mono, Fira Code, monospace",
};

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

export const HEADING = {
  display: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]",
  h1: "text-3xl font-black sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]",
  h2: "text-3xl font-extrabold sm:text-4xl lg:text-4xl tracking-tight leading-[1.12]",
  h3: "text-xl font-bold sm:text-2xl tracking-tight",
  h4: "text-lg font-semibold sm:text-xl tracking-tight",
  label: "text-sm font-semibold tracking-tight",
};

export const BODY = {
  hero: "text-sm sm:text-base leading-relaxed",
  large: "text-base md:text-lg",
  base: "text-base",
  small: "text-sm",
  caption: "text-xs",
  overline: "text-xxs uppercase tracking-wider",
};

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

export const TEXT_COLOR = {
  primary: "text-slate-900",
  secondary: "text-gray-500",
  teal: "text-teal-600",
  tealLight: "text-teal-500",
};

const typographyExport = { HEADING, BODY, COMPONENT_STYLES, FONT_WEIGHT, FONT_FAMILY, TEXT_COLOR };

export default typographyExport;
