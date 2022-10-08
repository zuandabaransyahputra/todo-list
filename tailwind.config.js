/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'primary': 'repeat(auto-fit, minmax(170px, 235px))',
      }
    },
  },
  plugins: [],
}
