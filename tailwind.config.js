/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          'neutral-500': '#737373',
          'neutral-900': '#171717' ,
          'neutral-800': '#262626',
        gold: {
          500: '#D0AB64',
        },
      },
    },
  },
  plugins: [],
};