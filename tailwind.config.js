/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0px 10px -3px rgb(0 0 0 / 0.3)',
      }
    },
  },
  plugins: [],
}