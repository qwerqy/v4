/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#2F3440",
        fill: "#262B33",
        fillText: "#D0D0D0",
        navRed: "#FF6058",
        navYellow: "#FFBE2D",
        navGreen: "#27CC40",
      },
    },
  },
  plugins: [],
};
