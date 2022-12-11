/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      backgroundImage: {
        'effect': "url('/src/assets/effect-background.png')",
      }
    },
  },
  plugins: [],
}