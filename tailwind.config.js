/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
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
    },
   fontFamily: {
      sans: ['Poppins','Helvetica', 'sans-serif'],
      serif: ['Bodoni', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
      },
      height:{
        100:'30rem'
      },
      fontSize:{
        100:'2.5rem',
        200:'1px'
      }
    },
  },
  plugins: [],
};
