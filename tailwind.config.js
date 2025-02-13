import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				primary: [
					'var(--font-inter)'
				],
				secondary: [
					'var(--font-geist)'
				],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'dark-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 1) -27.06%, rgba(31, 31, 31, 1) 113.35%)',
			},

			colors: {
				primary: {
					DEFAULT: '#ffffff',
					light: '#BDBDBD'
				},
				secondary: {
					DEFAULT: '#292929',
					light: '#656565'
				},
				gray: {
					100: 'hsl(var(--wcs-gray-100-value))',
					200: 'hsl(var(--wcs-gray-200-value))',
					300: 'hsl(var(--wcs-gray-300-value))',
					400: 'hsl(var(--wcs-gray-400-value))',
					500: 'hsl(var(--wcs-gray-500-value))',
					600: 'hsl(var(--wcs-gray-600-value))',
					700: 'hsl(var(--wcs-gray-700-value))',
					800: 'hsl(var(--wcs-gray-800-value))',
					900: 'hsl(var(--wcs-gray-900-value))',
					1000: 'hsl(var(--wcs-gray-1000-value))',
				},
				blue: {
					100: 'hsl(var(--wcs-blue-100-value))',
					200: 'hsl(var(--wcs-blue-200-value))',
					300: 'hsl(var(--wcs-blue-300-value))',
					400: 'hsl(var(--wcs-blue-400-value))',
					500: 'hsl(var(--wcs-blue-500-value))',
					600: 'hsl(var(--wcs-blue-600-value))',
					700: 'hsl(var(--wcs-blue-700-value))',
					800: 'hsl(var(--wcs-blue-800-value))',
					900: 'hsl(var(--wcs-blue-900-value))',
					1000: 'hsl(var(--wcs-blue-1000-value))',
				},

			}
		}
	},
	darkMode: ["class"],
	plugins: [heroui(), require("tailwindcss-animate")],
}
