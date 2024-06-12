/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "30px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1260px",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: "#FF5A30",
        heading: "#1E212C",
        paragraph: "#787A80",
        customGray: "#424551",
      },
    },
  },
  plugins: [],
};
