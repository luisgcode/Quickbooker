/** @type {import('tailwindcss').Config} */
export default {
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
        darkBlue: "#1b2554",
        blue: "#3c5dd8",
        ligtGray: "#f7f7f7",
        btnColor: "#5ed5cf",
      },
      spacing: {
        sma_pad: "24px 24px",
        mid_pad: "40px 120px",
      },
    },
  },
  plugins: [],
};
