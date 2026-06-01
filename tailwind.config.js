/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'himalayan-dark-blue': '#0f172a',
        'himalayan-blue': '#1a3a52',
        'nepal-red': '#d91e63',
        'nepal-orange': '#ff6b35',
        'sky-blue': '#4da6ff',
        'forest-green': '#2d5016',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
      },
    },
  },
  plugins: [],
};
