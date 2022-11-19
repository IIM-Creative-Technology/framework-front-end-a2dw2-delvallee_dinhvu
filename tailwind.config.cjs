/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blanc': "#ffffff",
        'violet': "#8D4ED8",
        'gris-transparent': "rgba(255, 255, 255, 0.3);",
        'gris-violet': "#F3EDFB"
      },

      'box-shadow': {
        searchbar: "2px 8px 30px rgba(0, 0, 0, 0.06)",
      },

      'screens': {
        sp: '375px', // sp = smartphone
      },

      'fontFamily': {
        'regular': ['poppins-regular'],
        // 'semibold': ['poppins-semibold'],
      }
    },
  },
  plugins: [],
}
