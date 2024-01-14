/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob : 'blob 3s infinite',
        scroll: 'scroll 2s infinite',
        bhoo: 'bhoo 2s infinite',
        arrow: 'arrow 1s infinite',
        'footer-ani': 'footer-ani 5s linear infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        },
        scroll: {
          '0%': {
            transform: 'translate(0px, 0px)'
          },
          '50%': {
            transform: 'translate(0px, -10px)'
          },
          '100%': {
            transform: 'translate(0px, 0px)'
          }
        },
        bhoo: {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        arrow: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '50%': {
            transform: 'translateX(-8px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        'footer-ani': {
          '0%': {
            transform: 'translate(0px, 0px)'
          },
          '33%': {
            transform: 'translate(-100px, -10px)'
          },
          '66%': {
            transform: 'translate(100px, 5px)'
          },
          '100%': {
            transform: 'translate(0px, 0px)'
          }
        }
      }
    },
  },
  plugins: [],
}