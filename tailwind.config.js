/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true
      },
      colors: {
        'orange': '#DA5A06',
        'Dark_orange': '#b34904',
      },
      backgroundImage: {
        'hero1-bkg': "url('/src/img/slider1_bkg_mob.png')",
        'hero1-bkg_lg': "url('/src/img/slider1_bkg.png')",
        'hero2-bkg_lg': "url('/src/img/slide2.jpg')",
      }
    },
  },
  plugins: [],
}
