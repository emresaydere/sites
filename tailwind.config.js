/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "neon-blue": "#00f0ff",
        "neon-blue-dark": "#0099ff",
      },
    },
  },
  plugins: [],
}
