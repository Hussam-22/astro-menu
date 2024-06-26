const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Bricolage Grotesque Variable',
					'Inter Variable',
					'Inter',
					...defaultTheme.fontFamily.sans
				]
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animated'),
		require('tailwindcss-intersect')
	]
}
