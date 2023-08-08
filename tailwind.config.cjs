/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dosis: ["Dosis"],
        Literata: ["Literata"],
        Mansalva: ["Mansalva", "serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        hero: "url('/src/assets/rect-background.svg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
