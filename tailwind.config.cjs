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
        'gray_background': "rgba(255, 255, 255, 0.3)",
        'card_round': '#FF6A60',
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
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        xl: '1.25rem',
      },
      spacing: {
        'card_width': '18.625rem',
        'card_height': '22.1875rem',
        'card_img_height': '11.875rem',
        'twenty_space': '1.25rem',
        'thirty_space': '1.875rem',
        '76': '4.75rem',
        'margin_cards_nav': '8.875rem'
      },
      borderRadius: {
        'card': '1.25rem',
      }
    },
  },
  plugins: [],
}

