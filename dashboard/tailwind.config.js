/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      geometric: ["GeometricExtraBold", "sans-serif"],
    },
    extend: {
      colors: {
        Clor1: {
          DEFAULT: "#f97316",
        },
        Clor2: {
          DEFAULT: "#FFDAB9",
        },
        bgCl_All: {
          DEFAULT: "#161d31",
        },
        TextCl1: {
          DEFAULT: "#FFFFFF",
        },
        bgCl: {
          DEFAULT: "#FFFFFF",
        },
        bgCl_Nav_1: {
          DEFAULT: "#FFFFFF",
        },
        bgCl_Nav_2: {
          DEFAULT: "#f97316",
        },
        textCl_2_Nav: {
          DEFAULT: "#000000",
        },
        textCl_2_NavHover: {
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
