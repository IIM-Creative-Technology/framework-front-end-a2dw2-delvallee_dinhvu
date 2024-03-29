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
        'gris-violet': "#F3EDFB",
        'footer_background':'#0A0909',
        'footer_mobile':'rgba(255, 255, 255, 0.18)'
      },

      Background: {
        'gradient': 'linear-gradient(90deg, #80D4F8 0%, #8D4ED8 31.13%, #FF6A60 67.49%, #FC1616 100%);',
      },

      'box-shadow': {
        searchbar: "2px 8px 30px rgba(0, 0, 0, 0.06)",
      },

      'screens': {
        sp: '375px', // sp = smartphone
        dt:'1440px' // desktop
      },

      'fontFamily': {
        'regular': ['poppins-regular'],
        // 'semibold': ['poppins-semibold'],
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        xl: '1.25rem',
        'footer_title':'0.875rem'
      },
      lineHeight: {
        'footer': '1.125rem',
      },
      spacing: {
        'card_width': '18.625rem',
        'card_height': '22.1875rem',
        'card_img_height': '11.875rem',
        'twenty_space': '1.25rem',
        'thirty_space': '1.875rem',
        '76': '4.75rem',
        'margin_cards_nav': '8.875rem',
        'margin_cards_nav_responsive': '10.5rem',
        'margin_title':'4.5rem',
        'margin_footer':'4.5625rem',
        '42':'2.625rem'
      },
      borderRadius: {
        'card': '1.25rem',
      }
    },
  },
  plugins: [],
}

