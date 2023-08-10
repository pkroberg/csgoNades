/** @type {import('tailwindcss').Config} */
module.exports={
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'monkey-grey': 'rgb(50,52,55)',
        'light-text': '#d1d0c5',
        'accent-yellow': '#fdc500',
        'custom-grey': 'rgb(28, 28, 28)',
        'custom-grey-darker': 'rgb(36, 36, 36)',
        'palette-grey1': '#999999',
        'palette-grey2': '#777777',
        'palette-grey3': '#555555',
        'palette-grey4': '#333333',
        'palette-grey5': '#111111',
      }
    },
  },
  plugins: [],
}

