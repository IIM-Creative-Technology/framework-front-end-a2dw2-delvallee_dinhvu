/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
      colors: {
        'card_round': '#FF6A60',
      },
      borderRadius: {
        'card': '1.25rem',
      }
    },
  },
  plugins: [],
}
