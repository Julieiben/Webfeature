/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      marine: "#2447FF",
      neonpink: "#DB00FF",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        rexlia: "'relaxia', sans-serif",
        jetbrains: "'JetBrains Mono', monospace",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
