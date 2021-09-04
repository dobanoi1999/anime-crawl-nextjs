module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      lg: "717px",
    },
    colors: {
      cPink: "#BD00FF",
      cBlack: "#070707",
      cWhile: "#FCFCFC",
      search: "#302D2D",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Aubrey: ["Aubrey", "cursive"],
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus"],
      borderWidth: ["hover"],
      height: ["hover", "focus"],
      display: ["group-hover"],
      margin: ["group-hover"],
    },
  },
  plugins: [],
};
