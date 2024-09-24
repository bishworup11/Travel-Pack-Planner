/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#f4a226',
        custtomColor2: '#e5771f',
      },
      fontFamily: {
        monoton: ['Monoton', 'cursive'], // Adding Monoton as a custom font family
      },
     
    },
   
  },
  plugins: [],
}