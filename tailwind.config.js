/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
      },
      fontSize: {
        '1.5xl': '1.25rem', // Custom size
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
      colors: {
        outerSpaceGray: '#444444',
        teradyne: '#2bab89',
      }
    },
  },
  plugins: [],
};