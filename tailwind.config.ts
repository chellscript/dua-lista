/* eslint-disable @typescript-eslint/no-require-imports */
// const plugin = require('tailwindcss/plugin');
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FD9745", //brand color
        mainLight: "#fff4e0",
        accent: "#92cdfd",
        accentLight: "#c4e4fe",
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#291919",
      },
      borderRadius: {
        base: "10px",
      },
      boxShadow: {
        light: "2px 3px 0px 0px #000",
        main: "2px 3px 0px 0px #fff4e0",
        accent: "2px 3px 0px 0px #c4e4fe",
        dark: "2px 3px 0px 0px #000",
      },
      translate: {
        boxShadowX: "2px",
        boxShadowY: "3px",
        reverseBoxShadowX: "-2px",
        reverseBoxShadowY: "-3px",
      },
      fontWeight: {
        base: "500",
        heading: "800",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
