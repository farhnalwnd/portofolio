/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        bg: '#EBF4F6',
        primary: '#37B7C3',
        secondary: '#088395',
        tersier : '#071952',
      },
      fontFamily: {
        Exo: ["Exo 2"],
      },
    },
  },
  plugins: [],
};
