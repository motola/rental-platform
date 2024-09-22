/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCream: '#FEF0D2', 
        primaryGreen: '#4CAF50',
        buttonPrimary: '#04DA91',
      },
    },
    gridTemplateColumns: {
      '100/0': '100% 0%',
    },
  },
  plugins: [],
}

