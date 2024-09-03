/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        sansMedia: ['Source Sans 3', 'sans-serif'],
      },
      colors:{
        cusGray: '#686E76',
        cusBlack: '#525252',
        cusKontak: '#444B55',
      },
    },
  },
  plugins: [],
}

