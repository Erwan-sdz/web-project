/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#FFD700',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
        },
      },
    },
  },
  plugins: [],
};