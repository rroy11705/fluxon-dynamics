/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rethink Sans'],
      display: ['Funnel Display'],
    },
    extend: {
      fontFamily: {
        sans: ['Rethink Sans'],
        display: ['Funnel Display'],
      },
    },
  },
  plugins: [],
};
