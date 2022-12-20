/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        color: {
          500: '#2db5a9',//turquoise
          400: '#e3b448',//orange
          300: '#2b2e30',//charcoal
          200: "#5c5eee",//purple
          
        },
      },
      spacing: {
        128: '32rem',
      },
      height:{
        100:'30rem'
      },
      fontSize:{
        100:'2.5rem'
      }
    },
  },
  plugins: [],
};
