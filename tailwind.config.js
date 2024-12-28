/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'lg':'992px',
        'media350':"350px",
        'media550':"550px"
      }
    },
  },
  plugins: [],
}

