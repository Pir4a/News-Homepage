/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bld: ["interbold"],
        extrabld: ["extrabld"],
        reg: ["regular"],
      },
      colors: {
        deepblue: "#00001A",
        golden: "#ECB056",
        buttonorange: "#F15D52",
        graytext: "#9293A7",
      },
      letterSpacing: {
        widemax: "0.5em",
      },
      maxHeight: {
        big: "492px",
      },
    },
  },
  plugins: [],
}
