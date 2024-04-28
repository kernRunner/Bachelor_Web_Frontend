/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', './src/**/*.vue'
  ],
  theme: {
    colors: {
      'primaryColor': '#c94930',
      'secondaryColor': '#fda33b',
      
      'white': 'white',
      'white5': 'rgb(255 255 255, 50)',
      'black': 'black',
      'lightgray': '#aaa',
      'gray': '#404040',
      'blue': 'blue',
      'brown': '#3f3331',
      'lightbrown': '#9c8076',
      
      'red': '#CA0000',
      
      'bg-1': '#A7ADBB',
      'bg-2': '#E0E0E0',
      'bg-3': '#d0b8ac',
    },
    extend: {},
  },
  plugins: [
  ],
}
