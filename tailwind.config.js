/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "brand-color": "#fea7df",
    },
    animation: {
      shimmer: "shimmer 8s infinite",
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      backgroundPositionSpin:
        "background-position-spin 3000ms infinite alternate",
    },
    keyframes: {
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
      shimmer: {
        "0%, 90%, 100%": {
          "background-position": "calc(-100% - var(--shimmer-width)) 0",
        },
        "30%, 60%": {
          "background-position": "calc(100% + var(--shimmer-width)) 0",
        },
      },
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
    },
  },
  plugins: [],
};
