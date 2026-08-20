import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./engine/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          elevated: "rgb(var(--color-elevated) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)"
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          soft: "rgb(var(--color-ink-soft) / <alpha-value>)",
          faint: "rgb(var(--color-ink-faint) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          soft: "rgb(var(--color-primary-soft) / <alpha-value>)",
          strong: "rgb(var(--color-primary-strong) / <alpha-value>)",
          contrast: "rgb(var(--color-primary-contrast) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          soft: "rgb(var(--color-accent-soft) / <alpha-value>)"
        },
        success: {
          DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
          soft: "rgb(var(--color-success-soft) / <alpha-value>)"
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
          soft: "rgb(var(--color-warning-soft) / <alpha-value>)"
        },
        danger: {
          DEFAULT: "rgb(var(--color-danger) / <alpha-value>)",
          soft: "rgb(var(--color-danger-soft) / <alpha-value>)"
        },
        info: {
          DEFAULT: "rgb(var(--color-info) / <alpha-value>)",
          soft: "rgb(var(--color-info-soft) / <alpha-value>)"
        },
        keyboard: {
          base: "rgb(var(--color-key-base) / <alpha-value>)",
          edge: "rgb(var(--color-key-edge) / <alpha-value>)",
          press: "rgb(var(--color-key-press) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "JetBrains Mono",
          "monospace"
        ]
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px -2px rgb(0 0 0 / 0.06)",
        lift: "0 2px 6px -1px rgb(0 0 0 / 0.06), 0 16px 32px -8px rgb(0 0 0 / 0.12)",
        glow: "0 0 0 1px rgb(var(--color-primary) / 0.15), 0 8px 30px -6px rgb(var(--color-primary) / 0.35)",
        key: "0 2px 0 0 rgb(var(--color-key-edge)), 0 6px 16px -6px rgb(0 0 0 / 0.4)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "pop": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "60%": { opacity: "1", transform: "scale(1.04)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.96)" },
          "60%": { opacity: "1", transform: "translateY(-3px) scale(1.02)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.1", transform: "scale(1.6)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "pop": "pop 0.4s ease-out both",
        "bounce-in": "bounce-in 0.55s ease-out both",
        "shimmer": "shimmer 2.5s linear infinite",
        "caret-blink": "caret-blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;