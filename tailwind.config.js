/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  // darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "brand-color": "#fea7df",
    },
    animation: {
      shimmer: "shimmer 8s infinite",
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      marquee: "marquee var(--duration) linear infinite",
      "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      backgroundPositionSpin:
        "background-position-spin 3000ms infinite alternate",
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
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
