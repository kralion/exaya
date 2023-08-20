/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
