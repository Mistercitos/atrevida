/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atrevida: {
          background: "#ebebeb",
          primary: "#ec1848",
        },
      },
      fontFamily: {
        title: ["var(--font-oswald)"],
        body: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
