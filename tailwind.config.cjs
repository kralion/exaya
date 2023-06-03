/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Dosis: ["Dosis"],
				Literata : ["Literata"],
				Mansalva: ['Mansalva', 'serif'],
				Kanit : ['Kanit', 'sans-serif'],
			},
			borderWidth: {
				1: "1px",
				}
		},
	},
	plugins: [],
};

module.exports = config;
