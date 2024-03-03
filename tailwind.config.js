/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf2ff",
          100: "#dde7ff",
          200: "#c2d1ff",
          300: "#9eb2ff",
          400: "#7788ff",
          500: "#5760fd",
          600: "#3d38f2",
          700: "#342cd6",
          800: "#2b27ac",
          900: "#282788",
          950: "#19174f",
        },
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
