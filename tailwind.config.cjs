/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#171821",
        secondary: "#21222d",
        pink: "#f9769d",
        turquoise: "#96a7ff",
        gray: "#6e6f76"
      },
    },
  },
  plugins: [],
};