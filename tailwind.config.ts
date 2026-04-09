/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-green": "#070D06",
        "highlight-green": "#008B52",
        "border-color": "rgba(255, 255, 255, 0.1)",
        "card-bg": "#1a1a1a",
      },
      spacing: {},
      fontFamily: {
        "title": ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
