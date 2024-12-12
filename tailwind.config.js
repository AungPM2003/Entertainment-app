/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:{
          red:"#FC4747",
          darkBlue:"#10141E",
          greyishBlue:"#5A698F",
          semiDarkBlue:"#161D2F"
        }
      },
    },
  },
  plugins: [],
};
