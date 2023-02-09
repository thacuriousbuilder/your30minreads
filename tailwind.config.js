/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs:'360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
  'primary-bg': '#2DB5A9',
  'secondary-bg': '#5C5EEE',
  'tertiary-bg': '#EC7405',
  'quartiary-bg': '#2B2E30',
  'text': '#000000',
  'text-secondary': '#5c5eee',
  white: '#FFFFFF',
  black: '#000000',
  charcoal: '#222222',
  gray:'#D9D9D9'
    },
   fontFamily: {
      sans: ['Poppins','Helvetica', 'sans-serif'],
      serif: ['Bodoni', 'serif'],
    },
    extend: {
      spacing: {
        32: '60rem',

      },
      height:{
        100:'30rem'
      },
      fontSize:{
        '8px':'8px',
        '9px':'9px',
        '10px':'10px',
        '14rem':'14rem'
      }
    },
  },
  plugins: [],
};
