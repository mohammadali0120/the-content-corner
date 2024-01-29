/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        baseYellow: {
          900: "#FF7B00",
          800: "#FF8800",
          700: "#FF9500",
          600: "#FFA200",
          500: "#FFAA00",
          400: "#FFB700",
          300: "#FFC300",
          200: "#FFD000",
          100: "#FFDD00",
          50: "#FFEA00",
        },
        lightBlack: "#666666",
      },
      zIndex: {
        100: "999999",
      },
    },
  },
  plugins: [],
};
