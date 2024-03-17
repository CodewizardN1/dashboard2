
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'base': '290px',

      'sm': '640px',

      'md': '768px',
      '2md': '845px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      '3xl': '1666px',
      '4xl': '1700px',
    }
  },
  plugins: [require("daisyui")],
}