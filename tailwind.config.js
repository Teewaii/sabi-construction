/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "14rem",
          '3xl': '16rem',
        },
        center: true,
      },
      colors: {
        orange: "#DA5A06",
        Dark_orange: "#b34904",
        footer_bg: "#302E2E",
      },
      backgroundImage: {
        "hero1-bkg": "url('/src/img/slider1_bkg_mob.png')",
        "hero1-bkg_lg": "url('/src/img/slider1_bkg.png')",
        "hero2-bkg_lg": "url('/src/img/slide2.jpg')",
        about_bkg: "url('/src/img/about_bkg.png')",
        about_bkg_mobile: "url('/src/img/about_bkg_mobile.png')",
        cont_bkg_mobile: "url('/src/img/contact_bkg_mob.svg')",
        cont_bkg: "url('/src/img/contact_bkg.svg')",
        contact_bkg: "url('/src/img/cont.jpg')",
        about_left: "url('/src/img/about.jpeg')",
        about_mo: "url('/src/img/about_mo.jpeg')",
      },

      screens: {
        // '3xl': '1680px',
        "3xl": "1700px",
        // => @media (min-width: 1680px) { ... }

        "4xl": "1920px",
      },
    },
  },

  plugins: [],
};
