const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("open-color/open-color.js")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-ibm-plex)", ...fontFamily.mono],
        barcode: ["var(--font-barcode)"],
        lora: ["var(--font-lora)"],
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
