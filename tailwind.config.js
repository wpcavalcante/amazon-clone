/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header-color": "var(--header-color)",
        "main-color": "var(--main-color)",
        "btn-color": "var(--btn-color)"
      }
    },
  },
  plugins: [],
}
