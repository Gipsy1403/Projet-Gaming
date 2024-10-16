/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {},
    fontFamily : {
      monserrat:["monserrat"],
      monserratbold:["monserratbold"]
    }
  },
  plugins: [require('tailwind-hamburgers')],
}

