/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    container: { center: true },
    extend: {
      colors: { primary: "#EF4130" },
      boxShadow: { primary: "0px 5px 30px 0px rgba(239, 65, 48, 0.80)" },
      backgroundImage: { heroImage: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 35%), url('../src/bgimage.png')" },
      fontFamily: {
        tabac: [
          "TabacBigSans-Regular",
          "TabacBigSans-Bold",
          "TabacBigSans-SemiBold",
        ],

        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
