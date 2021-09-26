module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        lg: "717px",
      },
      colors: {
        ctBlue: "#007bff ",
        ctIndigo: "#6610f2 ",
        ctPurple: "#6f42c1 ",
        ctPink: "#e83e8c ",
        ctRed: "#dc3545 ",
        ctOrange: "#fd7e14 ",
        ctYellow: "#ffc107 ",
        ctGreen: "#28a745 ",
        ctTeal: "#20c997 ",
        ctCyan: "#17a2b8 ",
        ctBgHeader: "#070720",
        ctGray: "#6c757d ",
        ctGrayDark: "#343a40 ",
        ctPrimary: "#007bff ",
        ctSecondary: "#6c757d ",
        ctSuccess: "#28a745 ",
        ctInfo: "#17a2b8 ",
        ctWarning: "#ffc107 ",
        ctDanger: "#dc3545 ",
        ctLight: "#f8f9fa ",
        ctDark: "#343a40 ",
        ctBackground: "#0b0c2a",
      },
      screen: {
        breakpointXs: 0,
        breakpointSm: "576px",
        breakpointMd: "768px",
        breakpointLg: "992px",
        breakpointXl: "1200px ",
      },
      animation: {
        shine: "shine 1s",
        spinning: "spinning 4s linear 0s infinite",
        scaling: "scaling 1.5s linear infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
          spinning: {
            "100%": { transform: "rotate(360deg)" },
          },
          scaling: {
            "50%": { transform: "scale(1.2)" },
          },
        },

        maxWidth: {
          "1/4": "25%",
          "1/2": "50%",
          "3/4": "75%",
        },
        borderRadius: {
          50: "50%",
        },
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Aubrey: ["Aubrey", "cursive"],
    },
    boxShadow: {
      cart: "0 3px 6px rgba(0,0,0,0.12)",
      product: "0 6px 12px rgba(0,0,0,.08)",
      listProduct: "0 2px 4px rgba(0,0,0,.08)",
      navigation: "0 3px 6px rgba(0, 0, 0, 0.16)",
      header: "0 2px 3px rgba(0, 0, 0, 0.08)",
      subMenu: "1px 2px 3px rgba(0, 0, 0, 0.08)",
      bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
    },
    variants: {
      extend: {
        visibility: ["hover", "focus"],
        borderWidth: ["hover"],
        height: ["hover", "focus"],
        display: ["group-hover"],
        margin: ["group-hover"],
        animation: ["hover"],
      },
    },
    plugins: [],
  },
};
