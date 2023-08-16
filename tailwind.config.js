/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-clr": "var(--primary-clr)",
        "primary-clr-100": "var(--primary-clr-100)",

        "dark-clr-300": "var(--dark-clr-300)",
        "dark-clr-400": "var(--dark-clr-400)"
      },
      fontFamily: {
        IranSans: "IranSans"
      }
    },
  },
  plugins: [],
}

