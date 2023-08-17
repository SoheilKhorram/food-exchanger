/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-clr-300": "var(--gold-clr-300)",

        "primary-clr": "var(--primary-clr)",

        "txt-clr-light": "var(--txt-clr-light)",
        "txt-clr-dark": "var(--txt-clr-dark)",

        "dark-clr-300": "var(--dark-clr-300)",
        "dark-clr-400": "var(--dark-clr-400)",

        "background-clr": "var(--background-clr)"
      },
      fontFamily: {
        IranSans: "IranSans"
      }
    },
  },
  plugins: [],
}

