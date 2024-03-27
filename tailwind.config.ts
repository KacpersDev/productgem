import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["gilroy", 'sans-serif'],
        gilroy_600: ["gilroy_600", 'sans-serif'],
        gilroy_600_italic: ["gilroy_600_italic", 'sans-serif'],
        gilroy_900: ["gilroy_900", 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
