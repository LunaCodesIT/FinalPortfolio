/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: "#008000",
      secondary: colors.red,
      yellow: "#E0E300",
      green: "#17B602",
      blue: "#009BE3",
      purple: "#BF40BF",
      orange: "#FF8F00",
      reddy: "#c00000",
      blood: "#880808",
      black: "#000000",
      rosepink: "#F33A6A",
      amaranth: "#9F2B68",
      aqua: "#00FFFF"
   
    },
  },
  plugins: [],
};
