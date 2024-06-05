/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
