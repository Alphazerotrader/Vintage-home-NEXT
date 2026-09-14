/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E1B16",
        parchment: "#E8E0CC",
        parchment2: "#F1ECDE",
        brass: "#9C7A3C",
        brassLight: "#B79A5E",
        brick: "#7A3527",
        forest: "#333B2E",
        line: "#C7BC9C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-archivo)", "sans-serif"],
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};
