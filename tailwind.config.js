/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC0C13",
        secondary: "#ABB2BF",
        dark: "#282C33"
      }
    }
  },
  plugins: []
};
