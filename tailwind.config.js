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
      sm: { max: "880px" },
    },
    extend: {
      spacing: {
        1.5: "0.375rem", // 6px
        7: "1.75rem", // 28px
        7.5: "1.875rem", // 30px
        13.5: "3.375rem", // 54px
        25: "6.25rem", // 100px
        27: "6.75rem", // 108px
        44.25: "11.0625rem", // 177px
        50: "12.5rem", // 200px
        165: "41.25rem", // 660px
        170: "42.5rem", // 680px
        // 15: "3.75rem", // 60px
        // 84: "21rem", // 336px
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
