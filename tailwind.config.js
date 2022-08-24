/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '16px',
        '2sm': '18px',
        base: '24px',
        lg: '40px'
      },
      colors: {
        'dark-primary-bg': '#25262C',
        'dark-second-bg': '#1E1E1E',
        'light-primary-bg': '#D6D6D6',
        'light-second-bg': '#F5F5F5',
        white: '#FFFFFF',
        active: '#EC7913'
      }
    },
  },
  plugins: [],
}