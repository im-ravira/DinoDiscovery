/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
      primary:"linear-gradient(to bottom, rgba(7, 75, 7, 0.1), rgba(18, 36, 9, 0.6)),url('/Primary.jpeg')",
    }},
  },
  plugins: [],
}

