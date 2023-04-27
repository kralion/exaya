/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Dosis: ["Dosis"],
				Literata : ["Literata"],
				Mansalva : ['Mansalva', 'serif'],
			},
		},
	},
	plugins: [],
};

module.exports = config;
