/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(237, 63%, 64%)",
        neutral: {
          DEFAULT: "hsl(233, 13%, 49%)",
          light: "hsl(234, 14%, 74%)",
          lighter: "hsl(240, 78%, 98%)",
          dark: "hsl(232, 13%, 33%)",
        },
      },
      backgroundImage: {
        "pattern-bottom": "url('./assets/bg-bottom.svg')",
        "pattern-top": "url('./assets/bg-top.svg')",
      },
      boxShadow: {
        card: "0px 4px 6px 0px hsla(237, 63%, 64%, 0.2)",
        "special-card": "inset 0px 0px 3px 1.5px hsla(237, 63%, 64%,1)",
      },
    },
  },
  plugins: [],
};
