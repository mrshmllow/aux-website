/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"aux-primary": {
					50: "#fef2f2",
					100: "#ffe1e1",
					200: "#ffbcbc", // Brand
					300: "#fea3a3",
					400: "#fb6e6e",
					500: "#f24141",
					600: "#e02222",
					700: "#bc1919",
					800: "#9b1919",
					900: "#811b1b",
					950: "#460909",
				},
				"aux-secondary": {
					50: "#fdf4ff",
					100: "#fbe9fe",
					200: "#f6d2fc",
					300: "#f3b9fa", // Brand
					400: "#ea7df5",
					500: "#db4ce9",
					600: "#c22ccd",
					700: "#a421aa",
					800: "#871d8b",
					900: "#701d72",
					950: "#4b074b",
				},
				"aux-accent": {
					50: "#f0feef",
					100: "#ddfeda",
					200: "#a8faa2", // Brand
					300: "#86f67f",
					400: "#49e840",
					500: "#20d017",
					600: "#14ad0c",
					700: "#14870e",
					800: "#146a11",
					900: "#125710",
					950: "#023102",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
