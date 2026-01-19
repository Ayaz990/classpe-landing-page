/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Color Palette
      colors: {
        primary: {
          DEFAULT: "#008FF5", // Azure
          50: "#E6F5FF",
          100: "#CCEBFF",
          200: "#99D7FF",
          300: "#66C3FF",
          400: "#33AFFF",
          500: "#008FF5", // Azure
          600: "#0072C3", // Ocean Boat Blue
          700: "#005A9A",
          800: "#004372",
          900: "#002B49",
        },
        secondary: {
          DEFAULT: "#F7D148", // Accent Yellow
          50: "#FEF9E6",
          100: "#FDF3CC",
          200: "#FBE799",
          300: "#F9DB66",
          400: "#F7CF33",
          500: "#F7D148", // Accent Yellow
          600: "#C5A73A",
          700: "#947D2B",
          800: "#62541D",
          900: "#312A0E",
        },
        gunmetal: {
          DEFAULT: "#262F3F",
          50: "#E8EAED",
          100: "#D1D5DB",
          200: "#A3ABB7",
          300: "#758193",
          400: "#47576F",
          500: "#262F3F", // Gunmetal
          600: "#1E2632",
          700: "#171C26",
          800: "#0F1319",
          900: "#08090D",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      // Typography - Font Families
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      // Typography - Font Sizes for Hero and Headings
      fontSize: {
        // Hero sizes
        "hero-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "hero-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "hero-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "hero-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        // Heading sizes
        "h1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h2": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3": ["1.75rem", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
        "h4": ["1.5rem", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
        "h5": ["1.25rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" }],
        "h6": ["1.125rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" }],
        // Body sizes
        "body-lg": ["1.125rem", { lineHeight: "1.75", letterSpacing: "0" }],
        "body": ["1rem", { lineHeight: "1.75", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }],
      },
      // Custom Container Widths
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px", // Custom max width for better readability
        },
      },
      // Custom Shadows (inspired by Vedantu's clean design)
      boxShadow: {
        "soft": "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 4px 16px rgba(0, 0, 0, 0.06)",
        "soft-xl": "0 8px 24px rgba(0, 0, 0, 0.08)",
        "card": "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        "primary": "0 4px 14px rgba(0, 143, 245, 0.15)",
        "primary-lg": "0 8px 24px rgba(0, 143, 245, 0.2)",
        "secondary": "0 4px 14px rgba(247, 209, 72, 0.15)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.04)",
      },
      // Custom Transitions
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-soft": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      // Custom Gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #008FF5 0%, #0072C3 100%)",
        "gradient-primary-light": "linear-gradient(135deg, #E6F5FF 0%, #CCEBFF 100%)",
        "gradient-secondary": "linear-gradient(135deg, #F7D148 0%, #F7CF33 100%)",
        "gradient-secondary-light": "linear-gradient(135deg, #FEF9E6 0%, #FDF3CC 100%)",
        "gradient-hero": "linear-gradient(135deg, #E6F5FF 0%, #FFFFFF 50%, #FEF9E6 100%)",
        "gradient-overlay": "linear-gradient(180deg, rgba(0, 143, 245, 0.1) 0%, rgba(247, 209, 72, 0.05) 100%)",
        "gradient-text-primary": "linear-gradient(135deg, #008FF5 0%, #0072C3 100%)",
        "gradient-text-secondary": "linear-gradient(135deg, #F7D148 0%, #F7CF33 100%)",
      },
    },
  },
  plugins: [],
}

