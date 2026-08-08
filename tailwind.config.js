/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#3B2F82",
          "purple-deep": "#2a2260",
          "purple-muted": "#5c5299",
          gold: "#B58A00",
          "gold-light": "#d4a84b",
          "gold-pale": "#f5ecd4",
          cream: "#faf9f7",
          "cream-dark": "#f0ebe3",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
