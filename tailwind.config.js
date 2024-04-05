/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Rye", "serif"],
      hero: ["Fredericka the Great"],
      nav: ["Edu NSW ACT Foundation", "cursive"],
      logo: ["Bungee Spice", "sans-serif"],
      about: ["Imbue", "serif"],
      bungee: ["Bungee Shade", "sans-serif"],
      vibur: ["Vibur", "cursive"],
      sansita: ["Sansita Swashed", "system-ui"],
    },
  },
  plugins: [],
};
