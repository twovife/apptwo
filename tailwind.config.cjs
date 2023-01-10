/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fcde67",
        secondary: "#5bccf6",
        "basic-black": "#030e12",
      },
    },
  },
  plugins: [],
};
