/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: "repeat(3, 1fr)",
        1: "repeat(1, 1fr)",
      },
    },
    colors: {
      // primary: "#00040f",
      // secondary: "#000f6ff",
      // lightWhite: "rgba(255,255,255,0.7)",
      // lightBlue: "rgba(9, 151, 124, 0.1)",
      backBtn: "#ff7e47",
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1150px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
