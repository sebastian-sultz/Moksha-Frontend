// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        'prim':'#AAB396',
        'prim-dark': '#4338CA',
        'sec':'#BAC3A4',
        'bgcolor':'#FFF8E8',
        'yelloww': '#ffff4d'
      },
      
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },

      fontFamily: {
        domine: ["Domine", "serif"],
        libre: ["Libre Baskerville", "serif"],
        calligraphy: ['Dancing Script', 'cursive'],
        serif: ['Merriweather', 'serif'],
      
      },

    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

