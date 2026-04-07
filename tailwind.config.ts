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
          // VERKAUFSPSYCHOLOGIE: Primärfarben gemäss Webdesign-Psychologie-Dokument
          primary:  "#0D1B2A",   // Dunkelnavigation, Headlines, dunkle Sektionen
          accent:   "#00D4AA",   // Teal – Kompetenz + Vertrauen (Primär-CTA)
          orange:   "#FF6B35",   // Orange – Dringlichkeit, Express-Hinweise
          bg:       "#F5F0E8",   // Warmes Cream – Lesbarkeit, Handwerklichkeit
          gray:     "#6B7280",   // Muted Text
          // Karten & Oberflächen
          card:     "#FFFFFF",
          surface:  "#EDE8DF",   // Leicht dunkleres Cream für Abschnitte
          border:   "#D4CFC6",   // Subtile Trenner
          // Semantische Aliases (Rückwärtskompatibilität mit bestehenden Klassen)
          text:     "#0D1B2A",
          muted:    "#6B7280",
          "accent-dark": "#00B894",
          "accent-glow": "#00D4AA",
        },
      },
      fontFamily: {
        // VERKAUFSPSYCHOLOGIE: Barlow Condensed = technisch-kraftvoll, spart Platz
        // Lato = freundlich-professionell, sehr lesbar
        headline: ["Barlow Condensed", "system-ui", "sans-serif"],
        sans:     ["Lato", "system-ui", "sans-serif"],
        mono:     ["JetBrains Mono", "Menlo", "monospace"],
      },
      fontSize: {
        // Mindest-Body-Size 16px gemäss Vorgabe
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
