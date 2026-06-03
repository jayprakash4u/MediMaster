/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PrimaryTeal / Aqua - Interaction Layer (Buttons, Labels, Accents)
        teal: {
          50: "#F0FDFE",
          100: "#CCFDF5",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6", // Primary teal - main interaction color
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
        },
        aqua: {
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
        },
        cyan: {
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
        },

        // SecondaryDeep Navy - Branding Layer (Logo, Typography, Illustration)
        navy: {
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
        },
        deepNavy: {
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
        },

        // Neutral Light Blue/Grey - Surface Layer (Input fields, Card shadows)
        slate: {
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
        },
        gray: {
          50: "#FBFCFD", // Pure white backgrounds
          100: "#F5F7FA", // Light card backgrounds
          200: "#E8ECF0", // Hover states
          300: "#D5D9E0", // Borders
          400: "#A4A9B4", // Disabled text
          500: "#6C7480", // Secondary text
          600: "#4D535E", // Primary text
          700: "#3A3F4A", // Dark text
          800: "#2C313B",
          900: "#1D2129",
          950: "#14181F",
        },
        neutral: {
          50: "#FFFFFF", // White - Cards, Paper
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E5E7EB", // Input borders
          400: "#9CA3AF",
          500: "#6B7280", // Placeholder text
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#0B0F19",
        },
        blue: {
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
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        lime: {
          50: "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#84CC16",
          600: "#65A30D",
          700: "#4D7C0F",
          800: "#3F6212",
          900: "#365314",
          950: "#1A2E05",
        },
        green: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#84CC16",
          600: "#22C55E",
          700: "#16A34A",
          800: "#15803D",
          900: "#166534",
          950: "#052E16",
        },

        // Semantic colors
        primary: {
          light: "#2DD4BF",
          DEFAULT: "#14B8A6",
          dark: "#0D9488",
        },
        secondary: {
          light: "#6B8CFF",
          DEFAULT: "#3B66E2",
          dark: "#254DC8",
        },
        accent: {
          light: "#6EE7FF",
          DEFAULT: "#06B6D4",
          dark: "#0891B2",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#06B6D4",

        // Background & Surface
        background: {
          DEFAULT: "#F9FAFB",
          dark: "#1F2937",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#1F2937",
          muted: "#6B7280",
          disabled: "#9CA3AF",
          inverse: "#FFFFFF",
        },

        // Border & Shadow colors
        border: "#E5E7EB",
        input: "#D5D9E0",
        ring: "#14B8A6",
        shadow: {
          light: "rgba(16, 24, 40, 0.04)",
          medium: "rgba(16, 24, 40, 0.08)",
          dark: "rgba(16, 24, 40, 0.12)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.02em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "-0.03em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.04em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.06em" }],
        "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.08em" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "0.875rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        // Industrial level shadows
        xs: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
        sm: "0 1px 3px 0 rgba(16, 24, 40, 0.06), 0 1px 2px -1px rgba(16, 24, 40, 0.05)",
        DEFAULT:
          "0 4px 6px -1px rgba(16, 24, 40, 0.06), 0 2px 4px -2px rgba(16, 24, 40, 0.04)",
        md: "0 8px 16px -2px rgba(16, 24, 40, 0.04), 0 4px 12px -4px rgba(16, 24, 40, 0.04)",
        lg: "0 16px 32px -4px rgba(16, 24, 40, 0.08), 0 8px 16px -4px rgba(16, 24, 40, 0.04)",
        xl: "0 24px 48px -8px rgba(16, 24, 40, 0.12), 0 12px 24px -8px rgba(16, 24, 40, 0.06)",
        "2xl": "0 32px 64px -12px rgba(16, 24, 40, 0.2)",
        // Card specific
        card: "0 4px 24px -4px rgba(16, 24, 40, 0.08), 0 0 0 1px rgba(16, 24, 40, 0.04)",
        cardHover:
          "0 12px 32px -8px rgba(16, 24, 40, 0.12), 0 0 0 1px rgba(16, 24, 40, 0.06)",
        // Glow effects for industrial accents
        glowTeal:
          "0 0 20px rgba(20, 184, 166, 0.15), 0 4px 16px -4px rgba(20, 184, 166, 0.1)",
        glowNavy:
          "0 0 32px rgba(37, 77, 200, 0.12), 0 8px 24px -8px rgba(37, 77, 200, 0.1)",
        // Inner shadows
        inner: "inset 0 2px 4px 0 rgba(16, 24, 40, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-out": "fadeOut 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "pulse-subtle": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
