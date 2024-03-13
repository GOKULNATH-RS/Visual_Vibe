/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#E6E6E6",
      gray: {
        10: "#EEEEEE",
        20: "#A2A2A2",
        30: "#7B7B7B",
        50: "#585858",
        90: "#141414",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
