module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      nanummyeongjo: ['"Nanum Myeongjo"', "Georgia", "ui-serif"],
    },
    screens: {
      sm: { max: "1120px" },
    },
    extend: {
      spacing: {
        1.5: "0.375rem", // 6px
        19: "4.75rem", // 76px
        39: "9.75rem", // 156px
        126: "31.5rem", // 504px
      },
      colors: {
        "yellow-100": "#fff8ed",
        "yellow-300": "#ffe6bf",
        "pink-100": "#ffeceb",
        "pink-300": "#fdafab",
        "blue-100": "#f2fdff",
        "blue-300": "#b6e3ea",
        "gray-500": "#969696",
        "gray-600": "#595F6D",
      },
    },
  },
  variants: {},
  plugins: [],
};
