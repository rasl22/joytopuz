/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: "repeat(3, 1fr)",
        2: "repeat(2, 1fr)",
        1: "repeat(1, 1fr)",
        6: "repeat(6, 1fr)",
        7: "repeat(7, 1fr)",
        8: "repeat(8, 1fr)",
        9: "repeat(9, 1fr)",
        10: "repeat(10, 1fr)",
        11: "repeat(11, 1fr)",
        12: "repeat(12, 1fr)",

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
      lightPrimary: "#ffeacb",
      darkerWhite: "#FFF6F3",
      lightGrey: "#575757",
      secondGrey: "#e5e5e5",
      lightBlack: "#444",
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
