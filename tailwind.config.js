/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./**/*.{html, js}',
	'./src/index.html',
	'./pages/**/*.{html, js}',
	'./components/**/*.html'
  ],
  theme: {
    extend: {
	   fontFamily: {
		  'sans': ['Dm Sans'],
		  'rope': ['Manrope'],
		  'urban': ['Urbanist']
	   }
	
    },
  },
  plugins: [
	require('daisyui'),
	],
	daisyui: {
    themes: [
	 {
	   chill: {
		  "primary": "#4196e1",
		  "secondary": "#2e2e2e",
		  "accent": "#e35050",
		  "base-100": "#f5f5f5"
	   }
   },
	"dark", "corporate"],
    logs: false
  },
}

