/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: {
          DEFAULT: "#000000",
        },
        orange: "#FF6225"
      },
      lineHeight: {
        130: "130%",
      },
    },
  },
};
