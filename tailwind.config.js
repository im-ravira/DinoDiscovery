/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primary:
          "linear-gradient(to bottom, rgba(7, 75, 7, 0.1), rgba(18, 36, 9, 0.6)),url('/Primary.jpeg')",
        secondary:
          "linear-gradient(to bottom, rgba(7, 75, 7, 0.5), rgba(18, 36, 9, 0.8)), url('/Secondary.jpeg')",
      },
      fontFamily: {
        Berkshire: ["Berkshire Swash", "cursive"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
