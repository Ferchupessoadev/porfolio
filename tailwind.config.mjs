/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'side-theme': 'animate-side-theme .2s ease-in',
				'move-hand-wave': 'move-hand-wave .2s ease-in',
				'move-arrow-down': "move-arrow-down 3s infinite alternate"
			},
			fontFamily: {
				'firaCode': ['FiraCode', 'sans']
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
