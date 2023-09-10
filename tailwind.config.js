/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,jsx,js}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'infinity': "url('/images/infinity_green.png')",
      },
      borderRadius: {
        'half': '50px',
      },
      colors: {
        'button-green': '#005740',
        'block-gold': 'rgb(255, 215, 0)',
        'block-green': 'rgb(0, 128, 9)',
        'block-grey': 'rgb(128, 128, 128)',
        'background-grey': '#cccccc',
        'background-teal': 'rgba(108, 152, 157, .66)',
        'green-underline': '#52979B',
        'grey': '#B0B0B0',
        'light-black': '#232323',
        'intro': '#212529',
        'intro-underline': '#5DBA97',
        'intro-about': '#7ea8ad',
      },
      fontFamily: {
        'Noto Sans': 'Noto Sans'
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '1': '1rem',
        '1.2': '1.2rem',
      },
      height: {
        '95': '95vh'
      },
      lineHeight: {
        'extra-relaxed': '1.75',
        'light': '1.2'
      },
      maxWidth: {
        '960': '960px',
        '1200': '1200px',
        '430': '430px' 
      },
      spacing: {
        '22': '5.5rem',
        '62': '15.5rem'
      },
      width: {
        '45': '45%',
        '47.5': '47.5%',
      }
    },
  },
  plugins: []
};
