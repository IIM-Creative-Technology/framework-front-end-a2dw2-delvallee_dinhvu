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
        'margin_between' : '0.9375rem',
      },
      colors: {
        'card_round': '#FF6A60',
      }
    },
  },
  plugins: [],
}
