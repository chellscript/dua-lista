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
        main: '#FD9745', //brand color
        overlay: 'rgba(0,0,0,0.8)',

        // light mode
        bg: '#fff4e0',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#272933',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color

        // custom colors for background and foreground
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        base: '10px',
      },
      boxShadow: {
        light: '2px 3px 0px 0px #000',
        dark: '2px 3px 0px 0px #000',
      },
      translate: {
        boxShadowX: '2px',
        boxShadowY: '3px',
        reverseBoxShadowX: '-2px',
        reverseBoxShadowY: '-3px',
      },
      fontWeight: {
        base: '500',
        heading: '800',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
} satisfies Config;
