import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		extend: {},
		colors: {
			'primary': '#09090b',
			'secondary': '#27272a',
			'secondary-text': '#a1a1aa',
			'white': '#FFFFFF'
		}
	},
	plugins: [
    ],
};
