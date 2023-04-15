/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Dosis: ["Dosis"],
			},
		},
	},
	plugins: [],
};

module.exports = config;
