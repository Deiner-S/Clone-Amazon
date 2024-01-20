/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        'arial':'Arial'

      },

      colors:{
        'darkblue-500':'#485769',
        'darkblue-600':'#37475A',
        'darkblue-700':'#232F3E',
        'darkblue-900':'#191E26',
        'darkblue-950':'#131A22',
        'gol-100':'#FEBD69',
        'gol-200':'#FAA63A',
        'orange-650':'#E47911',
        'yellow-350':'#f0C14B'
      },
      spacing:{
        '7':'1.75rem',
        '75px':'75px',
        '210px':'210px'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }

    },
  },
  plugins: [],
}

