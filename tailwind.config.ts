import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:      "#252B36",   // Anthrazit-Dunkelgrau – Headlines, dunkle Sektionen
          accent:       "#06B6D4",   // Electric Cyan – Buttons, Links, Highlights
          "accent-dark":"#0891B2",   // Dunkleres Cyan – Hover-State
          "accent-light":"#ECFEFF",  // Sehr helles Cyan – Badges, Backgrounds
          bg:           "#FFFFFF",   // Reines Weiss – Haupthintergrund
          surface:      "#F4F6F8",   // Leicht dunkleres Weiss – Sektionswechsel
          card:         "#FFFFFF",   // Karten-Hintergrund
          border:       "#E2E6EA",   // Subtile Trennlinien
          gray:         "#6B7280",   // Muted Text
          muted:        "#6B7280",   // Alias
          text:         "#252B36",   // Alias Primary
          orange:       "#F59E0B",   // Bernstein – Coming-Soon Badges
        },
      },
      fontFamily: {
        headline: ["Barlow Condensed", "system-ui", "sans-serif"],
        sans:     ["Lato", "system-ui", "sans-serif"],
        mono:     ["JetBrains Mono", "Menlo", "monospace"],
      },
      fontSize: {
        base: ["16px", { lineHeight: "1.6" }],
      },
      animation: {
        "fade-in":  "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        pulse:      "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn:  { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
