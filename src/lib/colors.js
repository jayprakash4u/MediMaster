/**
 * Color Tokens (JS / inline styles only)
 *
 * Prefer Tailwind classes in components: `bg-teal-500`, `text-navy-950`, etc.
 * Import from here only for SVG props, canvas, GSAP, or style={{ }} objects.
 * Values must stay in sync with `tailwind.config.js`.
 */

// PrimaryTeal / Aqua - Interaction Layer
export const TEAL = {
  50: "#F0FDFE",
  100: "#CCFDF5",
  200: "#99F6E4",
  300: "#5EEAD4",
  400: "#2DD4BF",
  500: "#14B8A6", // Primary - Main interaction color
  600: "#0D9488",
  700: "#0F766E",
  800: "#115E59",
  900: "#134E4A",
  950: "#042F2E",
};

export const AQUA = {
  50: "#F0F9FF",
  100: "#E0F2FE",
  200: "#B9F6FF",
  300: "#6EE7FF",
  400: "#38D9E8",
  500: "#06B6D4", // Aqua accent
  600: "#0891B2",
  700: "#0E7490",
  800: "#155E75",
  900: "#164E63",
  950: "#0C3A44",
};

export const CYAN = {
  50: "#ECFEFF",
  100: "#CFFAFE",
  200: "#A5F3FC",
  300: "#67E8F9",
  400: "#22D3EE",
  500: "#06B6D4",
  600: "#0891B2",
  700: "#0E7490",
  800: "#155E75",
  900: "#164E63",
};

// SecondaryDeep Navy - Branding Layer
export const NAVY = {
  50: "#EEF4FF",
  100: "#E0EBFF",
  200: "#C5D7FF",
  300: "#9AB1FF",
  400: "#6B8CFF",
  500: "#3B66E2", // Main navy brand color
  600: "#254DC8", // Deep navy primary
  700: "#1A3BA8",
  800: "#153087",
  900: "#122868",
  950: "#0F1F4D", // Near black navy
};

export const DEEPNavy = {
  50: "#F5F5F5",
  100: "#F0F0F0",
  200: "#E0E0E0",
  300: "#BDBDBD",
  400: "#757575",
  500: "#424242",
  600: "#373737",
  700: "#2E2E2E",
  800: "#262626",
  900: "#1F1F1F",
  950: "#1A1A1A",
};

// Neutral Light Blue/Grey - Surface Layer
export const GRAY = {
  50: "#FBFCFD",
  100: "#F5F7FA",
  200: "#E8ECF0",
  300: "#D5D9E0",
  400: "#A4A9B4",
  500: "#6C7480",
  600: "#4D535E",
  700: "#3A3F4A",
  800: "#2C313B",
  900: "#1D2129",
  950: "#14181F",
};

export const NEUTRAL = {
  50: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F3F4F6",
  300: "#E5E7EB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
  950: "#0B0F19",
};

export const SLATE = {
  50: "#F8FAFC",
  100: "#F1F5F9",
  200: "#E2E8F0",
  300: "#CBD5E1",
  400: "#94A3B8",
  500: "#64748B",
  600: "#475569",
  700: "#334155",
  800: "#1E293B",
  900: "#0F172A",
  950: "#020617",
};

export const BLUE = {
  50: "#EFF6FF",
  100: "#DBEAFE",
  200: "#BFDBFE",
  300: "#93C5FD",
  400: "#60A5FA",
  500: "#3B82F6",
  600: "#2563EB",
  700: "#1D4ED8",
  800: "#1E40AF",
  900: "#1E3A8A",
};

// Semantic Colors
export const SEMANTIC = {
  primary: TEAL[500],
  secondary: NAVY[600],
  accent: AQUA[500],
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: AQUA[500],
};

// Background & Surface
export const BACKGROUND = {
  DEFAULT: "#F9FAFB",
  dark: "#1F2937",
  card: "#FFFFFF",
  elevated: "#FFFFFF",
};

export const FOREGROUND = {
  DEFAULT: "#1F2937",
  muted: "#6B7280",
  disabled: "#9CA3AF",
  inverse: "#FFFFFF",
};

// Border & Ring
export const BORDER = "#E5E7EB";
export const INPUT = "#D5D9E0";
export const RING = TEAL[500];

// Shadows
export const SHADOW = {
  light: "rgba(16, 24, 40, 0.04)",
  medium: "rgba(16, 24, 40, 0.08)",
  dark: "rgba(16, 24, 40, 0.12)",
};

/**
 * Usage Examples
 *
 * // Import colors
 * import { TEAL, NAVY, GRAY } from '@/lib/colors';
 *
 * // Use in components
 * const buttonStyle = {
 *   backgroundColor: TEAL[500],
 *   color: '#FFFFFF',
 * };
 *
 * // Or use Tailwind classes
 * <button className="bg-teal-500 text-white">Click</button>
 */
