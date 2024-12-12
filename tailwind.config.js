/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC0C13",
        secondary: "#ABB2BF",
        dark: "#282C33"
      },
      screens: {
        min1650: "1650px"
      }
    }
  },
  plugins: []
};
