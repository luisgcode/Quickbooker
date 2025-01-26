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
        regularText: "#323648",
        blueCompany: "#196af0",
      },
      spacing: {
        sma_pad: "24px 24px",
        mid_pad: "30px 50px",
      },
    },
  },
  plugins: [],
};
