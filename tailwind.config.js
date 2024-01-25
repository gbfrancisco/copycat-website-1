/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce-slow 5s ease-in-out infinite'
      },
      backgroundImage: {
        'hero-wave': "url('/banner1.png')"
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-5%)'
          },
          '50%': {
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
};
