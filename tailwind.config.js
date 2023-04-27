/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: "repeat(3, 1fr)",
        2: "repeat(2, 1fr)",
        1: "repeat(1, 1fr)",
      },
    },
    colors: {
      primary: "#ff7e47",
      secondary: "#426BFF",
      blue: "#426BFF",
      purple: "#9847FF",
      lightRed: "#FF5977",
      lightYellow: "#FFD159",
      lightGreen: "#45D891",
      lightWhite: "#fff",
      darkerWhite: "#FFF6F3",
      lightGrey: "#575757",
      secondGrey: "#e5e5e5",
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
