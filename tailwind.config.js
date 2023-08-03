/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'monkey-grey': 'rgb(50,52,55)',
        'light-text': '#d1d0c5',
        'accent-yellow': '#fdc500',
        'custom-grey': 'rgb(28, 28, 28)'
      }
    },
  },
  plugins: [],
}

