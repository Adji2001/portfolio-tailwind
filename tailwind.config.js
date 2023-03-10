/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
      },
      screens: {
        '2xl': '1260px'
      }
    },
  },
  plugins: [],
}
