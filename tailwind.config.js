/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'brand-color': "#fea7df"
    },
    animation: {
      shimmer: "shimmer 8s infinite",
    },
    keyframes: {
      shimmer: {
        "0%, 90%, 100%": {
          "background-position": "calc(-100% - var(--shimmer-width)) 0",
        },
        "30%, 60%": {
          "background-position": "calc(100% + var(--shimmer-width)) 0",
        },
      },
    },
  },
  plugins: [],
};
