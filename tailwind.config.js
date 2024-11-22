/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Menggunakan class-based dark mode
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D28D9',
          DEFAULT: '#5B21B6',
          dark: '#4C1D95',
        },
        secondary: {
          light: '#3B82F6',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        accent: {
          light: '#F59E0B',
          DEFAULT: '#D97706',
          dark: '#B45309',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-light': 'linear-gradient(135deg, #6D28D9 0%, #3B82F6 100%)',
        'hero-dark': 'linear-gradient(135deg, #4C1D95 0%, #1D4ED8 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(107, 114, 128, 0.5)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
