const { addDynamicIconSelectors } = require("@iconify/tailwind");
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#30aedb",

          secondary: "#3076aa",

          accent: "#11044f",

          neutral: "#f4f7fd",

          "base-100": "#ffffff",

          info: "#22d3ee",

          success: "#34d399",

          warning: "#facc15",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui"), addDynamicIconSelectors()],
};
