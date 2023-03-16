/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate_0_to_90: {
          "0%%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(90deg)" },
        },
        rotate_90_to_180: {
          "0%%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
    },
  },
  plugins: [],
};
