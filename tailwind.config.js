/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xxs: "500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
