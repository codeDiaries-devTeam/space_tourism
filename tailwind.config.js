/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
