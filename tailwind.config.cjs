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
        'Violet': "#8D4ED8",
        'grisTransparent': "rgba(255, 255, 255, 0.3);",
        'gris-violet': "#F3EDFB"
      },

      Background: {
        'gradient': 'linear-gradient(90deg, #80D4F8 0%, #8D4ED8 31.13%, #FF6A60 67.49%, #FC1616 100%);',
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
