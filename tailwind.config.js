module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Zinc: "#18181b",
        orange: "#c2410c",
        darkGrayishBlue: "hsl(210,10%,33%)",
        grayishBlue: "hsl(201,11% , 66%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },

  plugins: [],
};
