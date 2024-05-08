/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			lpColor: {
				50: "#f4f7fb",
				100: "#1e2f47",
				200: "#cbdbec",
				300: "#9cbcdd",
				400: "#6799c9",
				500: "#447bb3",
				600: "#336296",
				700: "#2a4f7a",
				800: "#264466",
				900: "#243b56",
				950: "#1e2f47",
			}
		},
		extend: {},
	},
	plugins: [],
}
