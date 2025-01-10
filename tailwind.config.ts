/* eslint-disable @typescript-eslint/no-require-imports */
// const plugin = require("tailwindcss/plugin");
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
        mainDark: "#f36e03",
        accent: "#92cdfd",
        accentLight: "#c4e4fe",
        accentDark: "#47abfc",
        actionButton: "#c4db58",
        actionButtonDark: "#acac39",
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#190f0f",
      },
      borderRadius: {
        base: "10px",
      },
      boxShadow: {
        light: "2px 3px 0px 0px #190f0f",
        dark: "2px 3px 0px 0px #190f0f",
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
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
} satisfies Config;
