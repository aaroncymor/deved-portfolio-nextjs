/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        'type-intro-1': {
          'from': { width: '0ch' },
          'to': { width: '10ch' },
        },
        'type-intro-2': {
          'from': { width: '0ch' },
          'to': { width: '21ch' },
        },
        'blink-caret' : {
          from: { borderColor: 'transparent '},
          to: { borderColor: 'transparent' },
          '50%': { borderColor: '#000' }
          // '50%': { borderColor: '#39FF14' }
        },
        'rotate': {
          from: { transform: 'rotate(0)'},
          to: { transform: 'rotate(360deg)'},
        },
        'pump': {
          '50%': { transform: 'scale(1.5)'}
        },
        'fadeInUp': {
          from: { transform: 'translate3d(0, 40px, 0)'},
          to: { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        },
        'swingLeftToRight': {
          '0%': { transform: 'rotate(45deg)'},
          '50%': { transform: 'rotate(-45deg)'},
          '100%': { transform: 'rotate(45deg)'},
        },
        'swingRightToLeft': {
          '0%': { transform: 'rotate(-45deg)'},
          '50%': { transform: 'rotate(45deg)'},
          '100%': { transform: 'rotate(-45deg)'},
        },
        'sproingIn': {
          '0%': { transform: 'scale(0)'},
          '100%': { transform: 'scale(1)'}
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s both',
        'typing-intro-1': 'type-intro-1 1s steps(10, end), blink-caret 0.75s step-end infinite',
        'typing-intro-2': 'type-intro-2 1.4s steps(21, end), blink-caret 0.75s step-end infinite',
        'rotating': 'rotate 10s linear infinite',
        'pumping': 'pump 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'swing': 'swingLeftToRight 2s ease infinite',
        'sproing': 'sproingIn 1.2s ease both',
      }
    },
  },
  plugins: [],
};
