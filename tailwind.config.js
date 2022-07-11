/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        spaceG : ['Space Grotesk', 'sans-serif']
      },
      container : {
        center : true
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
