/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#203136',
				secondary: '#BFD962',
				green: '#BFD962',
				blue: '#425DB6',
				gray: '#8A8987'
			},
			fontSize: {
				base: '1rem',
				lg: '1.375rem'
			},
			fontWeight: {
				light: 400,
				normal: 500,
				medium: 600,
				bold: 700
			}
		}
	},
	plugins: []
};
