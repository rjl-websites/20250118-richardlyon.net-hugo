/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  important: true, // This ensures styles are applied with higher specificity
  darkMode: "class",
  content: [
    "./content/**/*.{html,md}",
    "./layouts/**/*.html",
    "./themes/equity/layouts/**/*.html",
    "./themes/equity/assets/css/tailwind.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        "equity-a": ["equity_a", "Georgia", "sans-serif"],
        "equity-a-caps": ["equity_a_caps", "sans-serif"],
        "equity-b": ["equity_b", "Georgia", "sans-serif"],
        "equity-b-caps": ["equity_b_caps", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
