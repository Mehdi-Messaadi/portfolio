/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(245, 158, 11, 1)",
        secondaryColor: "rgba(245, 158, 11, 0.1)",
        tertiaryColor: "rgba(245, 158, 11, 0.05)",
        quaternaryColor: "rgb(249, 250, 251, 1)",
        paragraphColor: "rgb(148 163 184 / 1)",
        textColor: "rgb(22, 28, 45)",
        primaryDarkColor: "rgb(25, 33, 50)",
        secondaryDarkColor: "rgb(15, 23, 42)",
      },
      screens: {
        sm540: "540px",
        md992: "992px",
      },
      maxWidth: {
        540: "540px",
        640: "640px",
        768: "768px",
        992: "992px",
        1024: "1024px",
        1280: "1280px",
      },
    },
  },
  plugins: [],
};
