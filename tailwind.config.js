module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#26C299",
        primaryBlue: "#0A40A1",
        primaryRose: "#FABFBA",
      },
    },
    screens: {
      sm: "834px",
      lg: "1920px",
    },
  },
  plugins: [],
};
