/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#618CB3",
        ink1: "#280617",
        ink2: "#BADBAA",
      },
      fontFamily: {
        Exo: ["Exo 2"],
      },
    },
  },
  plugins: [],
};
