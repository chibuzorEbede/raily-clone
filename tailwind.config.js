/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lufga: ["Lufga", "sans-serif"],
      },
      colors: {
        navbg: "rgba(120, 120, 120, .36)",
        navlink: "rgba(255, 255, 255, .1)",
      },
    },
  },
  plugins: [],
};
