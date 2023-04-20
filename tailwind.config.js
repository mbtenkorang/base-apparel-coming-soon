/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          desatred: "hsl(0, 36%, 70%)",
          softred: "hsl(0, 93%, 68%)",
        },
        neutral: "hsl(0, 6%, 24%)",
        "bg-grad": {
          white: "hsl(0,0%,100%)",
          verylightpink: "hsl(0,100%,98%)",
          lightpink: "hsl(0,80%,86%)",
          darkpink: "hsl(0,74%,74%)",
        },
      },
      fontFamily: {
        display: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
