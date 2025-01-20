/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
