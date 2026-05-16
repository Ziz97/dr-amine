/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "system-ui", "sans-serif"],
        body: ["Exo 2", "system-ui", "sans-serif"],
      },
      colors: {
        futur: {
          dark: "#06080f",
          deeper: "#030508",
          panel: "rgba(12, 18, 36, 0.72)",
          border: "rgba(34, 211, 238, 0.22)",
          cyan: "#22d3ee",
          "cyan-dim": "#0891b2",
          purple: "#a78bfa",
          gold: "#fbbf24",
          mist: "#94a3b8",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 24px rgba(34, 211, 238, 0.35), 0 0 48px rgba(34, 211, 238, 0.12)",
        "neon-purple": "0 0 32px rgba(167, 139, 250, 0.25)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "grid-shift": "grid-shift 20s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "grid-shift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
    },
  },
  plugins: [],
};
