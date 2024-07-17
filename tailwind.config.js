const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0A192F",
        lightText: "#ccd6f6",
        darkText: "#8892b0",
        hoverColor: "#183E4A",
      },
      fontFamily: {
        bodyFont: ['"Montserrat", sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"),flowbite.plugin()],
};
