/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1200px",
    },
    extend: {
      colors: {
        regularText: "#323648",
        blueCompany: "#196af0",
        footerColor: "#1f252c  ",
        darkBG: "#121620",
        darkText: "#E0E6ED ",
      },
      spacing: {
        sma_pad: "24px 24px",
        mid_pad: "40px 120px",
      },
    },
  },
  plugins: [],
};
