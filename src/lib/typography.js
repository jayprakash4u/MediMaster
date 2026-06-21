/**
 * Typography Tokens
 *
 * Semantic class presets built from Tailwind utilities in `tailwind.config.js`.
 * Prefer these over one-off text-* strings for section titles, body copy, and badges.
 */

export const FONT_FAMILY = {
  sans: "var(--font-inter), system-ui, sans-serif",
  display: "var(--font-inter), system-ui, sans-serif",
  body: "var(--font-inter), system-ui, sans-serif",
  outfit: "var(--font-outfit), var(--font-inter), system-ui, sans-serif",
  syne: "var(--font-syne), var(--font-inter), system-ui, sans-serif",
  condensed: "var(--font-barlow-condensed), var(--font-inter), system-ui, sans-serif",
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
  h2: "text-3xl font-extrabold sm:text-4xl tracking-tight leading-[1.12]",
  h3: "text-xl font-bold sm:text-2xl tracking-tight",
  h4: "text-lg font-semibold sm:text-xl tracking-tight",
  label: "text-sm font-semibold tracking-tight",
  hero: "text-2xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]",
  sectionDisplay: {
    sm: "text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl",
    md: "text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]",
    lg: "text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl",
  },
};

export const BODY = {
  hero: "text-sm sm:text-base leading-relaxed",
  large: "text-base md:text-lg leading-relaxed",
  base: "text-base leading-relaxed",
  small: "text-sm leading-relaxed",
  caption: "text-xs leading-relaxed",
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
  cardTitle: "text-base font-bold tracking-tight text-slate-900",
  linkAccent: "text-xs font-semibold text-teal-600 transition-colors hover:text-teal-700",
};

export const TEXT_COLOR = {
  primary: "text-slate-900",
  secondary: "text-gray-500",
  muted: "text-slate-600",
  inverse: "text-white",
  teal: "text-teal-600",
  tealLight: "text-teal-500",
  tealOnDark: "text-teal-400",
};

const typographyExport = { HEADING, BODY, COMPONENT_STYLES, FONT_WEIGHT, FONT_FAMILY, TEXT_COLOR };

export default typographyExport;
