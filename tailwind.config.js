/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0d2847',
          800: '#1a3a5c',
          700: '#2b5797',
        },
        gold: {
          DEFAULT: '#c9a962',
          light: '#d4b978',
          dark: '#b8944d',
        },
        'accent-blue': '#4a9fd4',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0d2847 0%, #2b5797 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(13,40,71,0.7), rgba(13,40,71,0.9))',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
